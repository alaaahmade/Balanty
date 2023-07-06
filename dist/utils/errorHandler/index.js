"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorWrapper = exports.CustomError = void 0;
const CustomError_1 = __importDefault(require("./CustomError"));
exports.CustomError = CustomError_1.default;
const errorWrapper_1 = __importDefault(require("./errorWrapper"));
exports.errorWrapper = errorWrapper_1.default;
