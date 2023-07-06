"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerReviewService = exports.addReviewService = exports.getReviewService = void 0;
const models_1 = require("../models");
const validations_1 = require("../validations");
const getReviewService = async (req) => {
    const { stadiumId } = req.params;
    const checkStadium = await models_1.Stadium.findOne({ where: { id: stadiumId } });
    if (!checkStadium) {
        return {
            status: 404,
            data: '! هذا الملعب غير موجود ',
        };
    }
    const reviews = await models_1.Review.findAll({
        where: { stadiumId },
        attributes: ['id', 'value', 'playerId', 'stadiumId'],
    });
    return {
        status: 200,
        data: reviews,
    };
};
exports.getReviewService = getReviewService;
const addReviewService = async (req) => {
    const UserId = req.user?.id;
    const { stadiumId } = req.params;
    const { body } = req;
    const checkPlayer = await models_1.User.findOne({ where: { id: UserId } });
    const checkStadium = await models_1.Stadium.findOne({ where: { id: stadiumId } });
    if (!checkStadium) {
        return {
            status: 404,
            data: '! هذا الملعب غير موجود ',
        };
    }
    else if (!checkPlayer) {
        return {
            status: 404,
            data: '! هذا اللاعب غير موجود ',
        };
    }
    const { value } = await validations_1.reviewSchema.validateAsync(body);
    const checkReview = await models_1.Review.findOne({
        where: { playerId: UserId, stadiumId },
    });
    if (checkReview) {
        const updatedReview = await models_1.Review.update({ value }, { where: { stadiumId }, returning: true });
        return {
            status: 200,
            data: updatedReview[1][0],
        };
    }
    else {
        const newReview = await models_1.Review.create({
            playerId: UserId,
            stadiumId,
            value,
        });
        return {
            status: 200,
            data: newReview,
        };
    }
};
exports.addReviewService = addReviewService;
const getPlayerReviewService = async (req) => {
    const playerId = req.user?.id;
    const { stadiumId } = req.params;
    if (!playerId) {
        return {
            status: 401,
            data: 'UnAuthorize',
        };
    }
    const checkPlayer = await models_1.User.findOne({ where: { id: playerId } });
    const checkStadium = await models_1.Stadium.findOne({ where: { id: stadiumId } });
    if (!checkStadium) {
        return {
            status: 404,
            data: '! هذا الملعب غير موجود ',
        };
    }
    else if (!checkPlayer) {
        return {
            status: 404,
            data: '! هذا اللاعب غير موجود ',
        };
    }
    const playerReview = await models_1.Review.findOne({
        where: { playerId, stadiumId },
        attributes: ['id', 'value', 'playerId', 'stadiumId'],
    });
    return {
        status: 200,
        data: playerReview,
    };
};
exports.getPlayerReviewService = getPlayerReviewService;
