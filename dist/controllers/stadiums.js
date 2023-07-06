"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchStadiums = exports.getBestStadiums = exports.deleteStadiumImage = exports.AddStadiumImage = exports.UpdateStadiumGallery = exports.UpdateStadiumData = exports.getStadiums = exports.getStadiumProfile = exports.getStadiumMatches = exports.getStadiumDetails = exports.getAllStadiums = void 0;
const services_1 = require("../services");
const stadiums_1 = require("../services/stadiums");
const getAllStadiums = async (req, res) => {
    const response = (await (0, services_1.getAllStadiumsService)());
    res.status(response?.status).json(response);
};
exports.getAllStadiums = getAllStadiums;
const getStadiumDetails = async (req, res) => {
    const response = await (0, services_1.getStadiumDetailsService)(req);
    res.status(response?.status).json(response);
};
exports.getStadiumDetails = getStadiumDetails;
const getStadiumMatches = async (req, res) => {
    const matches = await (0, services_1.getStadiumMatchesService)(req);
    res.status(matches.status).json(matches);
};
exports.getStadiumMatches = getStadiumMatches;
const getStadiumProfile = async (req, res) => {
    const matches = await (0, services_1.getStadiumProfileService)(req);
    res.status(matches.status).json(matches);
};
exports.getStadiumProfile = getStadiumProfile;
const getStadiums = async (req, res) => {
    const response = await (0, services_1.getStadiumsService)(req);
    res.status(response.status).json(response);
};
exports.getStadiums = getStadiums;
const UpdateStadiumData = async (req, res) => {
    const response = await (0, services_1.UpdateStadiumDataService)(req);
    res.status(response.status).json(response);
};
exports.UpdateStadiumData = UpdateStadiumData;
const UpdateStadiumGallery = async (req, res) => {
    const response = await (0, stadiums_1.UpdateStadiumGalleryService)(req);
    res.status(response.status).json(response);
};
exports.UpdateStadiumGallery = UpdateStadiumGallery;
const AddStadiumImage = async (req, res) => {
    const response = await (0, stadiums_1.AddStadiumImageService)(req);
    res.status(response.status).json(response);
};
exports.AddStadiumImage = AddStadiumImage;
const deleteStadiumImage = async (req, res) => {
    const response = await (0, stadiums_1.deleteStadiumImageService)(req);
    res.status(response.status).json(response);
};
exports.deleteStadiumImage = deleteStadiumImage;
const getBestStadiums = async (req, res) => {
    const response = await (0, stadiums_1.getBestStadiumsService)();
    res.status(response.status).json(response);
};
exports.getBestStadiums = getBestStadiums;
const searchStadiums = async (req, res) => {
    const response = await (0, stadiums_1.searchStadiumsService)(req);
    res.status(response.status).json(response);
};
exports.searchStadiums = searchStadiums;
