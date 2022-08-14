import e from 'cors';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  address: {
    type: String,
    required: true,
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'product',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  quantity: {
    type: String,
    default: 1,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
});

const Order = mongoose.model('order', OrderSchema);

export default Order;
