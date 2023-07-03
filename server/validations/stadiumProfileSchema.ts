import Joi from 'joi';

const updatedValueSchema = Joi.object({
  description: Joi.string().min(3).max(200).allow(null).messages({
    'string.base': 'يجب أن يكون الوصف نصًا',
    'string.min': 'يجب أن يحتوي الوصف على الأقل {{#limit}} حروف',
    'string.max': 'يجب أن يحتوي الوصف على الأكثر {{#limit}} حروف',
  }),
  phone: Joi.string().min(3).max(10).allow(null).messages({
    'string.min': 'يجب أن يحتوي رقم الهاتف على الأقل {{#limit}} أرقام',
    'string.max': 'يجب أن يحتوي رقم الهاتف على الأكثر {{#limit}} أرقام',
  }),
  price: Joi.number().min(3).allow(null).messages({
    'number.base': 'يجب أن يكون السعر رقمًا',
    'number.min': 'يجب أن يكون السعر أكبر من أو يساوي {{#limit}}',
  }),
  ground: Joi.string().min(3).max(10).allow(null).messages({
    'string.base': 'يجب أن يكون نوع الارضية نصًا',
    'string.min': 'يجب أن يحتوي نوع الارضية على الأقل {{#limit}} حروف',
    'string.max': 'يجب أن يحتوي نوع الارضية على الأكثر {{#limit}} حروف',
  }),
  address: Joi.string().min(3).max(100).allow(null).messages({
    'string.base': 'يجب أن يكون العنوان نصًا',
    'string.min': 'يجب أن يحتوي العنوان على الأقل {{#limit}} حروف',
    'string.max': 'يجب أن يحتوي العنوان على الأكثر {{#limit}} حروف',
  }),
});

export default updatedValueSchema;
