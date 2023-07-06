import Joi from 'joi';

const reviewSchema = Joi.object({
  value: Joi.string().max(5).required(),
});

export default reviewSchema;
