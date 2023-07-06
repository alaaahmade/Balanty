"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.signupSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const signupSchema = joi_1.default.object({
    username: joi_1.default.string().min(2).max(25).required().messages({
        'string.empty': 'هذا الحقل لا يمكن أن يكون فارغ',
        'string.min': 'يجب ألا يقل هذا الحقل عن 2 أحرف',
        'string.max': 'يجب ألا يزيد هذا الحقل عن 25 حرفًا',
        'any.required': 'اسم المسخدم حقل مطلوب',
    }),
    email: joi_1.default.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .regex(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        .required()
        .messages({
        'string.empty': 'هذا الحقل لا يمكن أن يكون فارغ',
        'string.base': 'هذا الحقل يجب أن يكون عبارة عن ايميل',
        'any.required': 'الايميل حقل مطلوب',
    }),
    phone: joi_1.default.string().min(2).max(10).required().messages({
        'string.empty': 'هذا الحقل لا يمكن أن يكون فارغ',
        'string.base': 'هذا الحقل يجب أن يكون عبارة عن كلمة مرور',
        'string.min': 'يجب ألا يقل هذا الحقل عن 2 أرقام',
        'string.max': 'يجب ألا يزيد هذا الحقل عن 10 أرقام',
        'any.required': 'رقم الجوال حقل مطلوب',
    }),
    role: joi_1.default.string().valid('player', 'stadium'),
    password: joi_1.default.string().min(2).max(25).required().messages({
        'string.empty': 'هذا الحقل لا يمكن أن يكون فارغ',
        'string.base': 'هذا الحقل يجب أن يكون عبارة عن كلمة مرور',
        'string.min': 'يجب ألا يقل هذا الحقل عن 2 أحرف',
        'string.max': 'يجب ألا يزيد هذا الحقل عن 25 حرفًا',
        'any.required': 'كلمة المرور حقل مطلوب',
    }),
    confirmPassword: joi_1.default.any().valid(joi_1.default.ref('password')).required(),
});
exports.signupSchema = signupSchema;
const loginSchema = joi_1.default.object({
    username: joi_1.default.string().min(2).max(25).required().messages({
        'string.empty': 'هذا الحقل لا يمكن أن يكون فارغ',
        'string.min': 'يجب ألا يقل هذا الحقل عن 2 أحرف',
        'string.max': 'يجب ألا يزيد هذا الحقل عن 25 حرفًا',
        'any.required': 'اسم المسخدم حقل مطلوب',
    }),
    password: joi_1.default.string().min(2).max(50).required().messages({
        'string.empty': 'هذا الحقل لا يمكن أن يكون فارغ',
        'string.base': 'هذا الحقل يجب أن يكون عبارة عن كلمة مرور',
        'string.min': 'يجب ألا يقل هذا الحقل عن 2 أحرف',
        'string.max': 'يجب ألا يزيد هذا الحقل عن 25 حرفًا',
        'any.required': 'كلمة المرور حقل مطلوب',
    }),
});
exports.loginSchema = loginSchema;
