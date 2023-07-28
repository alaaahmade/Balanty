"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const reviewSchema = joi_1.default.object({
    value: joi_1.default.string().max(5).required(),
});
exports.default = reviewSchema;
