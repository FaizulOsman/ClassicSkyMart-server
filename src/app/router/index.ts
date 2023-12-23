import express from 'express';
import { AuthRouter } from '../modules/auth/auth.router';
import { UserRoutes } from '../modules/user/user.router';
import { ProductRoutes } from '../modules/product/product.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRouter,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
];

moduleRoutes?.forEach(route => router.use(route?.path, route?.route));

export default router;
