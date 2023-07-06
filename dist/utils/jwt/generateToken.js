"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const environment_1 = __importDefault(require("../../config/environment"));
const generateToken = (payload) => {
    return new Promise((resolve, reject) => {
        (0, jsonwebtoken_1.sign)(payload, environment_1.default.SECRET_KEY, (err, token) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generateToken = generateToken;
