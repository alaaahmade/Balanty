"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const environment_1 = __importDefault(require("../../config/environment"));
const verifyToken = (token) => new Promise((resolve, reject) => {
    jsonwebtoken_1.default.verify(token, environment_1.default.SECRET_KEY, (err, decoded) => {
        if (err)
            reject(err);
        resolve(decoded);
    });
});
exports.default = verifyToken;
