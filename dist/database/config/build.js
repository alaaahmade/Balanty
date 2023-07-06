"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const config_1 = require("../../config");
const insertData_1 = __importDefault(require("./insertData"));
const build = async () => {
    await __1.sequelize.sync({ force: true, logging: false });
    await (0, insertData_1.default)();
};
if (config_1.BUILD_DB) {
    build();
}
exports.default = build;
