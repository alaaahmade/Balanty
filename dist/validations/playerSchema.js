"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const updatedPLayerSchema = joi_1.default.object({
    bio: joi_1.default.string().min(3).max(200).allow(null).messages({
        'string.base': 'يجب أن يكون الوصف نصًا',
        'string.min': 'يجب أن يحتوي الوصف على الأقل {{#limit}} حروف',
        'string.max': 'يجب أن يحتوي الوصف على الأكثر {{#limit}} حروف',
    }),
    phone: joi_1.default.string().min(3).max(10).allow(null).messages({
        'string.min': 'يجب أن يحتوي رقم الهاتف على الأقل {{#limit}} أرقام',
        'string.max': 'يجب أن يحتوي رقم الهاتف على الأكثر {{#limit}} أرقام',
    }),
    age: joi_1.default.number().allow(null).messages({
        'number.base': 'يجب أن يكون العمر رقمًا',
    }),
    position: joi_1.default.string().min(3).max(10).allow(null).messages({
        'string.base': 'يجب أن يكون المركز نصًا',
        'string.min': 'يجب أن يحتوي نوع الارضية على الأقل {{#limit}} حروف',
        'string.max': 'يجب أن يحتوي نوع الارضية على الأكثر {{#limit}} حروف',
    }),
    address: joi_1.default.string().min(3).max(100).allow(null).messages({
        'string.base': 'يجب أن يكون العنوان نصًا',
        'string.min': 'يجب أن يحتوي العنوان على الأقل {{#limit}} حروف',
        'string.max': 'يجب أن يحتوي العنوان على الأكثر {{#limit}} حروف',
    }),
});
exports.default = updatedPLayerSchema;
