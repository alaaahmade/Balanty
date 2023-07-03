import Joi from 'joi';

const reviewSchema = Joi.object({
  value: Joi.number().min(1).max(5).required(),
});

export default reviewSchema;
