"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchStadiumsService = exports.getBestStadiumsService = exports.deleteStadiumImageService = exports.AddStadiumImageService = exports.UpdateStadiumGalleryService = exports.UpdateStadiumDataService = exports.getStadiumsService = exports.getStadiumProfileService = exports.getStadiumMatchesService = exports.getStadiumDetailsService = exports.getAllStadiumsService = void 0;
const models_1 = require("../models");
const sequelize_1 = require("sequelize");
const stadiumProfileSchema_1 = __importDefault(require("../validations/stadiumProfileSchema"));
const getAllStadiumsService = async () => {
    const res = await models_1.User.findAll({
        where: { role: 'STADIUM' },
        attributes: ['username', 'id'],
    });
    return {
        status: 200,
        data: res,
    };
};
exports.getAllStadiumsService = getAllStadiumsService;
const getStadiumDetailsService = async (req) => {
    const userId = req.params.id;
    const isStadiumExist = await models_1.Stadium.findOne({ where: { UserId: +userId } });
    if (!isStadiumExist) {
        return {
            status: 401,
            data: 'هذا الملعب غير متاح',
        };
    }
    const res = await models_1.Gallery.findAll({
        include: [
            {
                model: models_1.Stadium,
                where: { UserId: +userId },
            },
        ],
    });
    return {
        status: 200,
        data: res,
    };
};
exports.getStadiumDetailsService = getStadiumDetailsService;
const getStadiumMatchesService = async (req) => {
    const { stadiumId } = req.params;
    const isStadiumExist = await models_1.Stadium.findOne({
        where: { UserId: +stadiumId },
    });
    if (!isStadiumExist) {
        return {
            status: 401,
            data: 'هذا الملعب غير متاح',
        };
    }
    const currentDate = new Date();
    const matches = await models_1.Match.findAll({
        where: {
            stadiumId: stadiumId,
            startDate: {
                [sequelize_1.Op.gt]: currentDate,
            },
        },
    });
    return {
        status: 200,
        data: matches,
    };
};
exports.getStadiumMatchesService = getStadiumMatchesService;
const getStadiumProfileService = async (req) => {
    const { id } = req.params;
    const isStadiumExist = await models_1.Stadium.findOne({ where: { UserId: id } });
    if (!isStadiumExist) {
        return {
            status: 401,
            data: 'هذا الملعب غير متاح',
        };
    }
    const stadium = await models_1.User.findOne({
        where: { id },
        attributes: ['username', 'phone', 'id'],
        include: [
            {
                model: models_1.Stadium,
                include: [
                    {
                        model: models_1.Gallery,
                        as: 'stadiumGallery',
                    },
                ],
            },
            {
                model: models_1.Review,
                as: 'StadiumsReviews',
            },
        ],
    });
    return {
        status: 200,
        data: stadium,
    };
};
exports.getStadiumProfileService = getStadiumProfileService;
const getStadiumsService = async (req) => {
    const { page } = req.params;
    const Stadiums = await models_1.User.findAll({
        where: { role: 'STADIUM' },
        attributes: ['id', 'username'],
        include: [
            {
                model: models_1.Stadium,
                include: [
                    {
                        model: models_1.Gallery,
                        as: 'stadiumGallery',
                        limit: 1,
                    },
                ],
            },
            { model: models_1.Review, as: 'StadiumsReviews', attributes: ['value'] },
        ],
    });
    const pageSize = 8;
    const startIndex = (+page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedItems = Stadiums.slice(startIndex, endIndex);
    return {
        status: 200,
        data: paginatedItems,
    };
};
exports.getStadiumsService = getStadiumsService;
const UpdateStadiumDataService = async (req) => {
    const StadiumId = req.user?.id;
    const { body } = req;
    const isStadiumExist = await models_1.Stadium.findOne({
        where: { UserId: StadiumId },
    });
    if (!isStadiumExist) {
        return {
            status: 401,
            data: 'هذا الملعب غير متاح',
        };
    }
    await stadiumProfileSchema_1.default.validateAsync(body);
    const stadiumResult = await models_1.Stadium.update(body, {
        where: { UserId: StadiumId },
    });
    const UserResult = await models_1.User.update(body, { where: { id: StadiumId } });
    return {
        status: 200,
        data: {
            message: 'تم الحفظ بنجاح',
            stadiumResult: [stadiumResult][0][0],
            UserResult: [UserResult][0][0],
        },
    };
};
exports.UpdateStadiumDataService = UpdateStadiumDataService;
const UpdateStadiumGalleryService = async (req) => {
    const { body: { image, id, StadiumId, userId }, } = req;
    const checkAuthId = req.user?.id;
    if (+userId !== +checkAuthId) {
        return {
            status: 401,
            data: 'UnAuthorize',
        };
    }
    const check = await models_1.Gallery.findAll({ where: { id, StadiumId } });
    if (!check.length) {
        return {
            status: 404,
            data: ' هذه الصورة غير موجودة',
        };
    }
    const galleries = await models_1.Gallery.update({ image }, { where: { id, StadiumId }, returning: true });
    return {
        status: 200,
        data: galleries[1][0].dataValues,
    };
};
exports.UpdateStadiumGalleryService = UpdateStadiumGalleryService;
const AddStadiumImageService = async (req) => {
    const { body } = req;
    const { StadiumId, userId } = body;
    const checkAuthId = req.user?.id;
    if (+userId !== +checkAuthId) {
        return {
            status: 401,
            data: 'UnAuthorize',
        };
    }
    const check = await models_1.Gallery.findAll({ where: { StadiumId } });
    if (check.length >= 4) {
        return {
            status: 401,
            data: 'لا يمكن اضافة اكثر من اربعة صور',
        };
    }
    const galleries = await models_1.Gallery.create({ ...body, StadiumId });
    return {
        status: 200,
        data: galleries,
    };
};
exports.AddStadiumImageService = AddStadiumImageService;
const deleteStadiumImageService = async (req) => {
    const { ImageId, StadiumId, userId } = req.params;
    const checkAuthId = req.user?.id;
    if (+userId !== +checkAuthId) {
        return {
            status: 401,
            data: 'UnAuthorize',
        };
    }
    const check = await models_1.Gallery.findOne({
        where: { StadiumId: +StadiumId, id: +ImageId },
    });
    if (!check) {
        return {
            status: 404,
            data: 'هذه الصورة غير موجودة',
        };
    }
    const result = await models_1.Gallery.destroy({
        where: { StadiumId: +StadiumId, id: +ImageId },
    });
    return { status: 204, data: result };
};
exports.deleteStadiumImageService = deleteStadiumImageService;
const getBestStadiumsService = async () => {
    const Stadiums = await models_1.User.findAll({
        where: { role: 'STADIUM' },
        attributes: ['id', 'username'],
        include: [
            {
                model: models_1.Stadium,
                include: [
                    {
                        model: models_1.Gallery,
                        as: 'stadiumGallery',
                        limit: 1,
                    },
                ],
            },
            { model: models_1.Review, as: 'StadiumsReviews', attributes: ['value'] },
        ],
    });
    const stadiumWithAverage = Stadiums.map((stadium) => {
        const totalReviews = stadium.StadiumsReviews.length;
        const averageReview = stadium.StadiumsReviews.reduce((sum, review) => sum + +review.value, 0) / totalReviews;
        stadium.StadiumsReviews = averageReview || 0;
        return stadium;
    });
    const sortedStadiums = stadiumWithAverage.sort((a, b) => b.StadiumsReviews - a.StadiumsReviews);
    const topThreeStadiums = sortedStadiums.slice(0, 3);
    return {
        status: 200,
        data: topThreeStadiums,
    };
};
exports.getBestStadiumsService = getBestStadiumsService;
const searchStadiumsService = async (req) => {
    const { search } = req.query;
    const Stadiums = await models_1.User.findAll({
        where: {
            role: 'STADIUM',
            username: {
                [sequelize_1.Op.iLike]: `${search}%`,
            },
        },
        attributes: ['id', 'username'],
        include: [
            {
                model: models_1.Stadium,
                include: [
                    {
                        model: models_1.Gallery,
                        as: 'stadiumGallery',
                        limit: 1,
                    },
                ],
            },
            { model: models_1.Review, as: 'StadiumsReviews', attributes: ['value'] },
        ],
    });
    const stadiumWithAverage = Stadiums.map((stadium) => {
        const totalReviews = stadium.StadiumsReviews.length;
        const averageReview = stadium.StadiumsReviews.reduce((sum, review) => sum + +review.value, 0) / totalReviews;
        stadium.StadiumsReviews = averageReview || 0;
        return stadium;
    });
    const sortedStadiums = stadiumWithAverage.sort((a, b) => b.StadiumsReviews - a.StadiumsReviews);
    const topThreeStadiums = sortedStadiums.slice(0, 3);
    return {
        status: 200,
        data: topThreeStadiums,
    };
};
exports.searchStadiumsService = searchStadiumsService;
