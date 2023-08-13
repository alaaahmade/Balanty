"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinToMatchService = exports.getMyMatchesService = exports.getAllMatches = exports.createMatchService = void 0;
const sequelize_1 = require("sequelize");
const models_1 = require("../models");
const validations_1 = require("../validations");
const MatchPlayer_1 = __importDefault(require("../models/MatchPlayer"));
const createMatchService = async (req) => {
    const { body, user } = req;
    const ownerId = user?.id;
    const { StadiumId, startDate, endDate } = body;
    const newStartTime = startDate;
    const newEndTime = endDate;
    const currentDate = new Date();
    const newDate = new Date(newStartTime);
    if (newDate < currentDate) {
        return {
            status: 401,
            data: 'هذا الوقت غير متاح',
        };
    }
    const data = await validations_1.matchSchema.validateAsync(body);
    const isStadiumExist = await models_1.Stadium.findOne({
        where: { UserId: StadiumId },
    });
    if (!isStadiumExist) {
        return {
            status: 401,
            data: 'هذا الملعب غير متاح',
        };
    }
    const Exist = await models_1.Match.findOne({
        where: {
            [sequelize_1.Op.or]: [
                { startDate: { [sequelize_1.Op.gte]: newStartTime, [sequelize_1.Op.lt]: newEndTime } },
                { endDate: { [sequelize_1.Op.gt]: newStartTime, [sequelize_1.Op.lte]: newEndTime } },
                {
                    [sequelize_1.Op.and]: [
                        { startDate: { [sequelize_1.Op.lte]: newStartTime } },
                        { endDate: { [sequelize_1.Op.gte]: newEndTime } },
                    ],
                },
            ],
            stadiumId: StadiumId,
        },
    });
    if (!Exist) {
        const DBData = await models_1.Match.create({
            ...data,
            ownerId,
            stadiumId: StadiumId,
        });
        return {
            status: 201,
            data: DBData,
        };
    }
    return {
        status: 401,
        data: '! هذا الوقت محجوز',
    };
};
exports.createMatchService = createMatchService;
const getAllMatches = async (req) => {
    const currentDate = Date.now();
    const currentDateObject = new Date(currentDate);
    const currentDateFormatted = currentDateObject.toISOString();
    const userId = req.user?.id;
    const matches = await models_1.Match.findAll({
        where: {
            [sequelize_1.Op.or]: [{ startDate: { [sequelize_1.Op.gt]: currentDateFormatted } }],
        },
        include: [
            { model: models_1.User, as: 'ownerUser' },
            {
                model: models_1.User,
                as: 'stadiumMatch',
                include: [
                    {
                        model: models_1.Stadium,
                        include: [{ model: models_1.Gallery, as: 'stadiumGallery' }],
                    },
                ],
            },
            { model: models_1.User, as: 'Players' },
        ],
    });
    const playerMatches = await MatchPlayer_1.default.findAll({
        where: { userId },
        attributes: ['matchId'],
    });
    if (matches.length > 0) {
        return {
            status: 200,
            data: matches,
            playerMatches,
        };
    }
    else {
        return {
            status: 404,
            data: 'لا يوجد مباريات',
        };
    }
};
exports.getAllMatches = getAllMatches;
const getMyMatchesService = async (req) => {
    const userId = req.user?.id;
    const matchesIds = await MatchPlayer_1.default.findAll({
        where: {
            userId,
        },
        attributes: ['matchId'],
    });
    const PlayerMatchesId = matchesIds.map(matchPlayer => matchPlayer.matchId);
    const matches = await models_1.Match.findAll({
        where: {
            id: {
                [sequelize_1.Op.in]: PlayerMatchesId,
            },
        },
    });
    if (matches.length > 0) {
        return {
            status: 200,
            data: matches,
        };
    }
    else {
        return {
            status: 404,
            data: 'لا يوجد مباريات',
        };
    }
};
exports.getMyMatchesService = getMyMatchesService;
const JoinToMatchService = async (req) => {
    const playerId = req.user?.id;
    const { matchId } = req.params;
    const checkExist = await models_1.User.findOne({
        where: { id: playerId },
    });
    if (!checkExist) {
        return {
            status: 404,
            data: 'هذا اللاعب غير موجود',
        };
    }
    const user = await models_1.User.findByPk(playerId);
    const match = await models_1.Match.findByPk(matchId);
    const data = await MatchPlayer_1.default.findOne({
        where: { userId: playerId, matchId },
    });
    if (data) {
        return {
            status: 401,
            data: 'لا يمكنك الانضمام مرتين في نفس الدوري',
        };
    }
    const matchP = await MatchPlayer_1.default.create({
        userId: user?.id,
        matchId: match?.id,
    });
    return {
        status: 200,
        data: matchP,
    };
};
exports.JoinToMatchService = JoinToMatchService;
