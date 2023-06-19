import Joi from 'joi';

const signupSchema = Joi.object({
  username: Joi.string().alphanum().min(4).max(50).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .regex(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required(),
  phone: Joi.string().min(7).max(10).required(),
  role: Joi.string().valid('player', 'stadium'),
  password: Joi.string().alphanum().min(8).max(50).required(),
  confirmPassword: Joi.any().valid(Joi.ref('password')).required(),
});

export { signupSchema };
