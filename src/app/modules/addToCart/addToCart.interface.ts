import { Model } from 'mongoose';

export type IAddToCart = {
  productId: string;
  email: string;
};

// AddToCart Model
export type AddToCartModel = Model<IAddToCart, Record<string, unknown>>;

export type IAddToCartFilters = {
  searchTerm?: string;
  productId?: string;
  email?: string;
};
