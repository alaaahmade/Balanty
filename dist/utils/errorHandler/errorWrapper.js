"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = __importDefault(require("./CustomError"));
const errorMappings = {
    JsonWebTokenError: 401,
    Unauthorized: 401,
    ValidationError: 403,
    NotFound: 404,
};
const errorWrapper = (controller) => async (req, res, next) => {
    try {
        await controller(req, res, next);
    }
    catch (error) {
        if (error instanceof CustomError_1.default) {
            return next(error);
        }
        const customError = error;
        const status = errorMappings[customError?.name];
        customError.status = status;
        next(customError);
    }
};
exports.default = errorWrapper;
