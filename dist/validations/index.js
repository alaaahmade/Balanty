"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewSchema = exports.loginSchema = exports.signupSchema = exports.matchSchema = void 0;
var matchSchema_1 = require("./matchSchema");
Object.defineProperty(exports, "matchSchema", { enumerable: true, get: function () { return __importDefault(matchSchema_1).default; } });
var authSchema_1 = require("./authSchema");
Object.defineProperty(exports, "signupSchema", { enumerable: true, get: function () { return authSchema_1.signupSchema; } });
Object.defineProperty(exports, "loginSchema", { enumerable: true, get: function () { return authSchema_1.loginSchema; } });
var review_1 = require("./review");
Object.defineProperty(exports, "reviewSchema", { enumerable: true, get: function () { return __importDefault(review_1).default; } });
