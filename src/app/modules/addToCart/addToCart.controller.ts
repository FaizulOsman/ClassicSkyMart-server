/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, RequestHandler, Response } from 'express';
import { AddToCartProduct } from './addToCart.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IAddToCart } from './addToCart.interface';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helper/jwtHelpers';
import { IGenericResponse } from '../../../interfaces/common';

// Create AddToCart
const createAddToCart: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const token: any = req.headers.authorization;
    const verifiedUser = jwtHelpers.verifyToken(
      token,
      config.jwt.secret as Secret
    );

    const { ...addToCartData } = req.body;

    const result = await AddToCartProduct.createAddToCart(
      addToCartData,
      verifiedUser
    );

    // Send Response
    sendResponse<IAddToCart>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'AddToCart Created Successfully',
      data: result,
    });
  }
);

// Get all addToCarts
const getAllAddToCarts: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const token: any = req.headers.authorization;
    const verifiedUser = jwtHelpers.verifyToken(
      token,
      config.jwt.secret as Secret
    );

    const result = await AddToCartProduct.getAllAddToCarts(verifiedUser);

    // Send Response
    sendResponse<IGenericResponse<IAddToCart[]>>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'AddToCarts retrieved Successfully',
      data: result,
    });
  }
);

// Get single AddToCart by id
const getSingleAddToCart: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await AddToCartProduct.getSingleAddToCart(id);

    // Send Response
    sendResponse<IAddToCart>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get Single AddToCart Successfully',
      data: result,
    });
  }
);

// Update AddToCart
const updateAddToCart: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;

  const result = await AddToCartProduct.updateAddToCart(id, updateData);

  sendResponse<IAddToCart>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AddToCart updated successfully',
    data: result,
  });
});

// Delete AddToCart
const deleteAddToCart: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await AddToCartProduct.deleteAddToCart(id);

  sendResponse<IAddToCart>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart deleted successfully',
    data: result,
  });
});

export const AddToCartController = {
  createAddToCart,
  getAllAddToCarts,
  getSingleAddToCart,
  updateAddToCart,
  deleteAddToCart,
};
