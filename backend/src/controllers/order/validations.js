import Joi from 'joi';

const OrderSchema = Joi.object({
  address: Joi.string().required(),
  items: Joi.array().items(Joi.string()).required(),
  quantity: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().required()
});

export default OrderSchema;
