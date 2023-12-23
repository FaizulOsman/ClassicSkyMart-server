"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_router_1 = require("../modules/auth/auth.router");
const user_router_1 = require("../modules/user/user.router");
const product_route_1 = require("../modules/product/product.route");
const addToCart_route_1 = require("../modules/addToCart/addToCart.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_router_1.AuthRouter,
    },
    {
        path: '/users',
        route: user_router_1.UserRoutes,
    },
    {
        path: '/products',
        route: product_route_1.ProductRoutes,
    },
    {
        path: '/addToCart',
        route: addToCart_route_1.AddToCartRoutes,
    },
];
moduleRoutes === null || moduleRoutes === void 0 ? void 0 : moduleRoutes.forEach(route => router.use(route === null || route === void 0 ? void 0 : route.path, route === null || route === void 0 ? void 0 : route.route));
exports.default = router;
