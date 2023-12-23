import { Schema, model } from 'mongoose';
import { IProduct, ProductModel } from './product.interface';

type IVariation = {
  color?: string;
  size?: string;
};

const VariationSchema = new Schema<IVariation>({
  color: { type: String },
  size: { type: String },
});

const ProductSchema = new Schema<IProduct, ProductModel>(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    variation: { type: VariationSchema, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Product = model<IProduct, ProductModel>('Product', ProductSchema);
