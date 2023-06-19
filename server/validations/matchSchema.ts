import Joi from 'joi';

const matchSchema = Joi.object({
  StadiumId: Joi.number().min(1).required(),
  title: Joi.string().min(5).max(250).required(),
  description: Joi.string().min(5),
  startDate: Joi.string().required(),
  endDate: Joi.string().required(),
  seats: Joi.number().min(5).max(50).required(),
});

export default matchSchema;
