import Joi from 'joi';

const signupSchema = Joi.object({
  username: Joi.string().alphanum().min(2).max(50).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .regex(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required(),
  phone: Joi.string().min(7).max(10).required(),
  role: Joi.string().valid('player', 'stadium'),
  password: Joi.string().alphanum().min(8).max(50).required(),
  confirmPassword: Joi.any().valid(Joi.ref('password')).required(),
});

const loginSchema = Joi.object({
  username: Joi.string().alphanum().min(4).max(50).required().messages({
    'string.empty': 'هذا الحقل لا يمكن أن يكون فارغ',
    'string.min': 'يجب ألا يقل هذا الحقل عن 5 أحرف',
    'string.max': 'يجب ألا يزيد هذا الحقل عن 25 حرفًا',
    'any.required': 'اسم المسخدم حقل مطلوب',
  }),
  password: Joi.string().alphanum().min(4).max(50).required().messages({
    'string.empty': 'هذا الحقل لا يمكن أن يكون فارغ',
    'string.base': 'هذا الحقل يجب أن يكون عبارة عن كلمة مرور',
    'string.min': 'يجب ألا يقل هذا الحقل عن 5 أحرف',
    'string.max': 'يجب ألا يزيد هذا الحقل عن 25 حرفًا',
    'any.required': 'كلمة المرور حقل مطلوب',
  }),
});

export { signupSchema, loginSchema };
