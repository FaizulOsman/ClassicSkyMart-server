import express from 'express';
import { ProductController } from './product.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ProductValidation } from './product.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

// Routes
router.post(
  '/',
  validateRequest(ProductValidation.createProductZodValidation),
  auth(ENUM_USER_ROLE.ADMIN),
  ProductController.createProduct
);

router.get('/:id', ProductController.getSingleProduct);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ProductController.updateProduct
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ProductController.deleteProduct
);

router.get('/', ProductController.getAllProducts);

export const ProductRoutes = router;
