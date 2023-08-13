"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editMessageService = exports.deleteMessageService = exports.getAllMessagesService = exports.getMessageByIdService = exports.addMessageService = void 0;
const models_1 = require("../models");
const MatchPlayer_1 = __importDefault(require("../models/MatchPlayer"));
const addMessageService = async ({ message, senderId, matchId, }) => {
    const newMessage = await models_1.Message.create({
        UserId: senderId,
        MatchId: matchId,
        message,
    });
    const match = await models_1.Match.findOne({
        where: { id: matchId },
        include: [
            {
                model: models_1.Message,
                where: { id: newMessage.id },
                as: 'MatchMessages',
                include: [
                    {
                        model: models_1.User,
                        attributes: [
                            'createdAt',
                            'email',
                            'id',
                            'phone',
                            'role',
                            'updatedAt',
                            'username',
                        ],
                        include: [
                            {
                                model: models_1.Player,
                            },
                            {
                                model: models_1.Stadium,
                            },
                        ],
                    },
                ],
            },
        ],
    });
    return {
        status: 201,
        data: {
            message: 'Message added successfully',
            newMessage: match?.dataValues.MatchMessages[0],
        },
    };
};
exports.addMessageService = addMessageService;
const getMessageByIdService = async (messageId) => {
    const message = await models_1.Message.findOne({ where: { id: messageId } });
    if (message) {
        return {
            status: 200,
            data: {
                message,
            },
        };
    }
    else {
        return {
            status: 404,
            data: {
                message: 'No message found',
            },
        };
    }
};
exports.getMessageByIdService = getMessageByIdService;
const getAllMessagesService = async (matchId, req) => {
    const userId = req.user?.id;
    const matchesIds = await MatchPlayer_1.default.findAll({
        where: {
            userId,
        },
        attributes: ['matchId'],
    });
    const PlayerMatchesId = matchesIds.map(matchPlayer => matchPlayer.matchId);
    if (!PlayerMatchesId.includes(matchId)) {
        return {
            status: 401,
            data: {
                message: 'Unauthorized',
            },
        };
    }
    else {
        const match = await models_1.Match.findOne({
            where: { id: matchId },
            include: [
                {
                    model: models_1.Message,
                    as: 'MatchMessages',
                    include: [
                        {
                            model: models_1.User,
                            attributes: [
                                'createdAt',
                                'email',
                                'id',
                                'phone',
                                'role',
                                'updatedAt',
                                'username',
                            ],
                            include: [
                                {
                                    model: models_1.Player,
                                },
                                {
                                    model: models_1.Stadium,
                                },
                            ],
                        },
                    ],
                },
            ],
        });
        if (match) {
            return {
                status: 200,
                data: {
                    match,
                },
            };
        }
        return {
            status: 404,
            data: {
                message: 'Match not found',
            },
        };
    }
};
exports.getAllMessagesService = getAllMessagesService;
const deleteMessageService = async (id) => {
    const message = await models_1.Message.findOne({ where: { id: Number(id) } });
    if (message) {
        await models_1.Message.destroy({ where: { id: Number(id) } });
        return {
            status: 200,
            data: {
                message: 'Message deleted successfully',
                deletedMessage: message,
            },
        };
    }
    else {
        return {
            status: 404,
            data: {
                message: 'No message found',
            },
        };
    }
};
exports.deleteMessageService = deleteMessageService;
const editMessageService = async (id, newMessage) => {
    const [updatedRows, [updatedMessage]] = await models_1.Message.update({ message: newMessage }, { where: { id }, returning: true });
    if (updatedRows) {
        return {
            status: 200,
            data: {
                message: 'Message updated successfully',
                updatedMessage,
            },
        };
    }
    else {
        return {
            status: 404,
            data: {
                message: 'Message not found',
            },
        };
    }
};
exports.editMessageService = editMessageService;
