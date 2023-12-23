import express from 'express';
import { AddToCartController } from './addToCart.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AddToCartValidation } from './addToCart.validation';
const router = express.Router();

// Routes
router.post(
  '/create-addToCart',
  validateRequest(AddToCartValidation.createAddToCartZodValidation),
  AddToCartController.createAddToCart
);

router.get('/:id', AddToCartController.getSingleAddToCart);

router.delete('/:id', AddToCartController.deleteAddToCart);

router.patch(
  '/:id',
  validateRequest(AddToCartValidation.updateAddToCartZodValidation),
  AddToCartController.updateAddToCart
);

router.get('/', AddToCartController.getAllAddToCarts);

export const AddToCartRoutes = router;
