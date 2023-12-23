"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const product_validation_1 = require("./product.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const router = express_1.default.Router();
// Routes
router.post('/', (0, validateRequest_1.default)(product_validation_1.ProductValidation.createProductZodValidation), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), product_controller_1.ProductController.createProduct);
router.get('/:id', product_controller_1.ProductController.getSingleProduct);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), product_controller_1.ProductController.updateProduct);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), product_controller_1.ProductController.deleteProduct);
router.get('/', product_controller_1.ProductController.getAllProducts);
exports.ProductRoutes = router;
