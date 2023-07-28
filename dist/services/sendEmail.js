"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = require("../config");
const sendEmail = async ({ to, subject, text, message }) => {
    const transporter = nodemailer_1.default.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: `${config_1.EMAIL}`,
            pass: `${config_1.EMAIL_PASSWORD}`,
        },
    });
    const mailOptions = {
        from: `${config_1.EMAIL}`,
        to,
        subject,
        text,
        html: message,
    };
    await transporter.sendMail(mailOptions);
};
exports.default = sendEmail;
