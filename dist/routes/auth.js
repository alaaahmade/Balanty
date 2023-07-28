"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.authRouter = express_1.default.Router();
const errorHandler_1 = require("../utils/errorHandler");
const auth_1 = require("../controllers/auth");
exports.authRouter.post('/signup', (0, errorHandler_1.errorWrapper)(auth_1.signup));
exports.authRouter.post('/login', (0, errorHandler_1.errorWrapper)(auth_1.login));
exports.authRouter.post('/logout', auth_1.logout);
