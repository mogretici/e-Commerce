import Joi from 'joi';

const Schema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string(),
  password: Joi.string().min(3).required(),
});

export default Schema;
