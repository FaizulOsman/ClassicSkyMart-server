"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToCartRoutes = void 0;
const express_1 = __importDefault(require("express"));
const addToCart_controller_1 = require("./addToCart.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const addToCart_validation_1 = require("./addToCart.validation");
const router = express_1.default.Router();
// Routes
router.post('/create-addToCart', (0, validateRequest_1.default)(addToCart_validation_1.AddToCartValidation.createAddToCartZodValidation), addToCart_controller_1.AddToCartController.createAddToCart);
router.get('/:id', addToCart_controller_1.AddToCartController.getSingleAddToCart);
router.delete('/:id', addToCart_controller_1.AddToCartController.deleteAddToCart);
router.patch('/:id', (0, validateRequest_1.default)(addToCart_validation_1.AddToCartValidation.updateAddToCartZodValidation), addToCart_controller_1.AddToCartController.updateAddToCart);
router.get('/', addToCart_controller_1.AddToCartController.getAllAddToCarts);
exports.AddToCartRoutes = router;
