"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerReview = exports.addReview = exports.getReview = void 0;
const services_1 = require("../services");
const getReview = async (req, res) => {
    const response = await (0, services_1.getReviewService)(req);
    res.status(response.status).json(response);
};
exports.getReview = getReview;
const addReview = async (req, res) => {
    const response = await (0, services_1.addReviewService)(req);
    res.status(response.status).json(response);
};
exports.addReview = addReview;
const getPlayerReview = async (req, res) => {
    const response = await (0, services_1.getPlayerReviewService)(req);
    res.status(response.status).json(response);
};
exports.getPlayerReview = getPlayerReview;
