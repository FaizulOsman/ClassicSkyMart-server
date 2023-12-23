import { Schema, model } from 'mongoose';
import { IAddToCart, AddToCartModel } from './addToCart.interface';

// AddToCart Schema
const AddToCartSchema = new Schema<IAddToCart, AddToCartModel>(
  {
    productId: {
      type: String,
      required: [true, 'Product Id is missing!'],
    },
    email: {
      type: String,
      required: [true, 'Email is missing!'],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const AddToCart = model<IAddToCart, AddToCartModel>(
  'AddToCart',
  AddToCartSchema
);
