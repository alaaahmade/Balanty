"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEmail = void 0;
const mailgen_1 = __importDefault(require("mailgen"));
const config_1 = require("../config");
const generateEmail = (body) => {
    const mailGenerator = new mailgen_1.default({
        theme: 'default',
        textDirection: 'rtl',
        product: {
            name: `${config_1.PRODUCT}`,
            link: `${config_1.PRODUCT_LINK}`,
            copyright: 'حقوق النشر محفوظة لدى بلنتي @ 2023',
        },
    });
    const email = { body };
    const emailBody = mailGenerator.generate(email);
    const emailText = mailGenerator.generatePlaintext(email);
    return { emailBody, emailText };
};
exports.generateEmail = generateEmail;
