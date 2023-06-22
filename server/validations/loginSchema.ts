import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().alphanum().min(4).max(50).required().messages({
    'string.empty': 'هذا الحقل لا يمكن أن يكون فارغ',
    'string.min': 'يجب ألا يقل هذا الحقل عن 5 أحرف',
    'string.max': 'يجب ألا يزيد هذا الحقل عن 25 حرفًا',
    'any.required': 'اسم المسخدم حقل مطلوب',
  }),
  password: Joi.string().alphanum().min(4).max(50).required().messages({
    'string.empty': 'هذا الحقل لا يمكن أن يكون فارغ',
    'string.base': 'This field must be a password',
    'string.min': 'يجب ألا يقل هذا الحقل عن 5 أحرف',
    'string.max': 'يجب ألا يزيد هذا الحقل عن 25 حرفًا',
    'any.required': 'كلمة المرور حقل مطلوب',
  }),
});
export default loginSchema;
