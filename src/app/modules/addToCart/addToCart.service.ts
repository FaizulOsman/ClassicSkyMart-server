/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { IAddToCart } from './addToCart.interface';
import { AddToCart } from './addToCart.model';
import httpStatus from 'http-status';
import { User } from '../user/user.model';
import ApiError from '../../../errors/apiError';
import { Product } from '../product/product.model';

// Create AddToCart
const createAddToCart = async (
  payload: IAddToCart,
  verifiedUser: any
): Promise<IAddToCart | null> => {
  const user = await User.find({ _id: verifiedUser.id });
  if (user.length === 0) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const isExist = await AddToCart.find({
    $and: [{ productId: payload?.productId }, { email: payload?.email }],
  });

  if (isExist?.length > 0) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'You already have added this product to cart.'
    );
  }

  const result = await AddToCart.create(payload);
  return result;
};

// Get All AddToCarts (can also filter)
const getAllAddToCarts = async (verifiedUser: any): Promise<any> => {
  const carts = await AddToCart.find({ email: verifiedUser?.email });

  const result = await Product.find({
    _id: carts.map(x => x.productId),
  });

  return result;
};

// Get Single AddToCart
const getSingleAddToCart = async (id: string): Promise<IAddToCart | null> => {
  const result = await AddToCart.findById(id);
  console.log(result);

  return result;
};

const updateAddToCart = async (
  id: string,
  payload: Partial<IAddToCart>
): Promise<IAddToCart | null> => {
  const isExist = await AddToCart.findOne({ _id: id });
  if (!isExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'AddToCart not found');
  }

  const result = await AddToCart.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

// Delete AddToCart
const deleteAddToCart = async (id: string): Promise<IAddToCart | null> => {
  const result = await AddToCart.findOneAndDelete({ productId: id });
  if (!result) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Cart Not Found');
  }
  return result;
};

export const AddToCartProduct = {
  createAddToCart,
  getAllAddToCarts,
  getSingleAddToCart,
  updateAddToCart,
  deleteAddToCart,
};
