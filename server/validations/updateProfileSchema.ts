import Joi from 'joi';

const updatedValueSchema = Joi.object({
  description: Joi.string().min(3).max(200).allow(null),
  phone: Joi.string().min(3).max(10).allow(null),
  price: Joi.number().min(3).allow(null),
  ground: Joi.string().min(3).max(10).allow(null),
  address: Joi.string().min(3).max(100).allow(null),
});

export default updatedValueSchema;
