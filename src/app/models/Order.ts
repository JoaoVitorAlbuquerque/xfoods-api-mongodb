import { model, Schema } from 'mongoose';

export const Order = model('Order', new Schema({
  table: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
    default: 'WAITING',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
  },
  read: {
    type: Boolean,
    default: false,
  },
  restarted: {
    type: Boolean,
    default: false,
  },
  products: {
    required: true,
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
      quantity: {
        type: Number,
        default: 1,
      },
      size: {
        type: String,
        enum: ['TINY', 'SMALL', 'MEAN', 'LARGE', 'EXTRA_LARGE', 'METER'],
        default: 'MEAN',
      },
    }],
  },
}));
