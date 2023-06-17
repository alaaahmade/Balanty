import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().alphanum().min(4).max(50).required().messages({
    'string.empty': 'This field must has a value',
    'string.min': 'This field must be at least 5 characters',
    'string.max': 'This field must be at max 25 characters',
    'any.required': 'Username is required field'
  }),
  password: Joi.string().alphanum().min(4).max(50).required().messages({
    'string.empty': 'This field must has a value',
    'string.base': 'This field must be a password',
    'string.min': 'This field must be at least 5 characters',
    'string.max': 'This field must be at max 25 characters',
    'any.required': 'Password is required field'
  }),
})
export default loginSchema;