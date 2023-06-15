import Joi from 'joi';

const matchSchema = Joi.object({
  stadium_id: Joi.number().min(1),
  title: Joi.string().min(5).max(250),
  description: Joi.string().min(5),
  startDate: Joi.string(),
  endDate: Joi.string(),
  seats: Joi.number().min(5).max(50),
});

export default matchSchema;
