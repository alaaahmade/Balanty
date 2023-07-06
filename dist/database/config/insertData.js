"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const seeds_json_1 = __importDefault(require("./seeds.json"));
const models_1 = require("../../models");
const insertData = async () => {
    await models_1.User.bulkCreate(seeds_json_1.default.Users);
    await models_1.Player.bulkCreate(seeds_json_1.default.Players);
    await models_1.Stadium.bulkCreate(seeds_json_1.default.Stadiums);
    await models_1.Match.bulkCreate(seeds_json_1.default.Matches);
    await models_1.Gallery.bulkCreate(seeds_json_1.default.Gallery);
    await models_1.Message.bulkCreate(seeds_json_1.default.Message);
    await models_1.Review.bulkCreate(seeds_json_1.default.Review);
};
exports.default = insertData;
