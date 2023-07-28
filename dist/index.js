"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chat_1 = __importDefault(require("./chat"));
const config_1 = require("./config");
const startServer = async () => {
    try {
        console.log('Connection has been established successfully.');
        chat_1.default.listen(config_1.PORT, () => {
            console.log(`server is running on http://localhost:${config_1.PORT}`);
        });
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
startServer();
