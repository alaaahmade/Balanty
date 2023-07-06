"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMatches = exports.createMatch = void 0;
const services_1 = require("../services");
const createMatch = async (req, res) => {
    const data = (await (0, services_1.createMatchService)(req));
    res.status(data?.status).json(data);
};
exports.createMatch = createMatch;
const getMatches = async (req, res) => {
    const data = await (0, services_1.getAllMatches)();
    res.status(data.status).json(data);
};
exports.getMatches = getMatches;
