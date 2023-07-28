"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAvatarService = exports.updateCoverService = exports.getPlayersService = exports.playerAvatarService = exports.playerMatchesService = exports.updatePlayerService = exports.getPlayerService = void 0;
const sequelize_1 = require("sequelize");
const models_1 = require("../models");
const playerSchema_1 = __importDefault(require("../validations/playerSchema"));
const getPlayerService = async (id) => {
    const player = await models_1.User.findOne({
        where: { id },
        attributes: ['username', 'phone', 'id'],
        include: [
            {
                model: models_1.Player,
            },
        ],
    });
    if (!player) {
        return {
            status: 401,
            data: 'هذا اللاعب غير موجود',
        };
    }
    return {
        status: 200,
        data: player,
    };
};
exports.getPlayerService = getPlayerService;
const updatePlayerService = async (req) => {
    const playerId = req.user?.id;
    const { body } = req;
    const isPLayerExist = await models_1.Player.findOne({ where: { UserId: playerId } });
    if (!isPLayerExist) {
        return {
            status: 401,
            data: 'هذا اللاعب غير متاح',
        };
    }
    await playerSchema_1.default.validateAsync(body);
    const [updatedRows, [updatedPlayer]] = await models_1.Player.update({ ...body }, {
        where: { UserId: playerId },
        returning: true,
    });
    if (updatedRows === 0) {
        return {
            status: 400,
            data: 'Failed to update the player',
        };
    }
    return {
        status: 200,
        data: updatedPlayer,
    };
};
exports.updatePlayerService = updatePlayerService;
const playerMatchesService = async (id) => {
    const isPLayerExist = models_1.Player.findOne({ where: { UserId: id } });
    if (!isPLayerExist) {
        return {
            status: 401,
            data: 'هذا اللاعب غير موجود',
        };
    }
    const playerMatches = await models_1.User.findOne({
        where: { id },
        attributes: ['username'],
        include: [
            {
                model: models_1.Match,
                as: 'ownersMatches',
            },
            {
                model: models_1.Match,
                as: 'Matches',
            },
        ],
    });
    return {
        status: 200,
        data: playerMatches,
    };
};
exports.playerMatchesService = playerMatchesService;
const playerAvatarService = async (id) => {
    const player = await models_1.User.findOne({
        where: { id },
        attributes: ['id'],
        include: [
            {
                model: models_1.Player,
                attributes: ['avatar'],
            },
        ],
    });
    if (!player) {
        return {
            status: 404,
            data: 'هذا اللاعب غير موجود',
        };
    }
    return { status: 200, data: player.Player.avatar };
};
exports.playerAvatarService = playerAvatarService;
const getPlayersService = async (req) => {
    const { search } = req.query;
    const { page } = req.params;
    const pageSize = 8;
    const offset = (Number(page) - 1) * pageSize;
    const { count, rows: players } = await models_1.User.findAndCountAll({
        where: {
            username: {
                [sequelize_1.Op.iLike]: `%${search ?? ''}%`,
            },
            role: 'PLAYER',
        },
        include: [{ model: models_1.Player, attributes: ['avatar', 'UserId'] }],
        limit: pageSize,
        offset: offset,
    });
    const totalPages = Math.ceil(count / pageSize);
    const paginatedItems = players;
    return {
        status: 200,
        data: {
            items: paginatedItems,
            totalItems: count,
            totalPages: totalPages,
            currentPage: Number(page),
        },
    };
};
exports.getPlayersService = getPlayersService;
const updateCoverService = async (req) => {
    const { newCover } = req.body;
    const { playerId } = req.params;
    const UserId = req.user?.id;
    const isPLayerExist = await models_1.Player.findOne({
        where: { UserId, id: playerId },
    });
    if (!isPLayerExist) {
        return {
            status: 401,
            data: 'هذا اللاعب غير متاح',
        };
    }
    const updateCover = await models_1.Player.update({ cover: newCover }, { where: { id: playerId } });
    return {
        status: 200,
        data: +updateCover === 1 ? 'successful' : 'fail',
    };
};
exports.updateCoverService = updateCoverService;
const updateAvatarService = async (req) => {
    const { newAvatar } = req.body;
    const { playerId } = req.params;
    const UserId = req.user?.id;
    const isPLayerExist = await models_1.Player.findOne({
        where: { UserId, id: playerId },
    });
    if (!isPLayerExist) {
        return {
            status: 401,
            data: 'هذا اللاعب غير متاح',
        };
    }
    const updateCover = await models_1.Player.update({ avatar: newAvatar }, { where: { id: playerId } });
    return {
        status: 200,
        data: +updateCover === 1 ? 'successful' : 'fail',
    };
};
exports.updateAvatarService = updateAvatarService;
