import { Model } from 'mongoose';

export type IVariation = {
  color?: string;
  size?: string;
};

export type IProduct = {
  image: string;
  title: string;
  variation: IVariation;
};

// User Model
export type ProductModel = Model<IProduct, Record<string, unknown>>;

export type IProductFilters = {
  searchTerm?: string;
  title?: string;
};
