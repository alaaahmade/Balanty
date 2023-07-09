"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const path_1 = require("path");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const router_1 = require("./routes/router");
const errorMiddleware_1 = __importDefault(require("./middleware/errorMiddleware"));
const utils_1 = require("./utils");
const app = (0, express_1.default)();
app.use([
    (0, express_1.json)(),
    (0, express_1.urlencoded)({ extended: false }),
    (0, compression_1.default)(),
    (0, cookie_parser_1.default)(),
    (0, cors_1.default)(),
]);
app.use('/api/v1', router_1.router);
app.use(express_1.default.static((0, path_1.join)(__dirname, '..', 'client', 'dist')));
app.get('*', (0, utils_1.errorWrapper)((req, res) => {
    res.sendFile((0, path_1.join)(__dirname, '..', 'client', 'dist', 'index.html'));
}));
app.use(errorMiddleware_1.default);
exports.default = app;
