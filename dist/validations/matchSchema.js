"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const matchSchema = joi_1.default.object({
    StadiumId: joi_1.default.number().min(1).required(),
    title: joi_1.default.string().min(5).max(250).required(),
    description: joi_1.default.string().min(5),
    startDate: joi_1.default.string().required(),
    endDate: joi_1.default.string().required(),
    seats: joi_1.default.number().min(5).max(50).required(),
});
exports.default = matchSchema;
