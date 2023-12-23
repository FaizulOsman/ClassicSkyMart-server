"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToCartProduct = void 0;
const addToCart_model_1 = require("./addToCart.model");
const http_status_1 = __importDefault(require("http-status"));
const user_model_1 = require("../user/user.model");
const apiError_1 = __importDefault(require("../../../errors/apiError"));
const product_model_1 = require("../product/product.model");
// Create AddToCart
const createAddToCart = (payload, verifiedUser) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.find({ _id: verifiedUser.id });
    if (user.length === 0) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, 'User not found');
    }
    const isExist = yield addToCart_model_1.AddToCart.find({
        $and: [{ productId: payload === null || payload === void 0 ? void 0 : payload.productId }, { email: payload === null || payload === void 0 ? void 0 : payload.email }],
    });
    if ((isExist === null || isExist === void 0 ? void 0 : isExist.length) > 0) {
        throw new apiError_1.default(http_status_1.default.BAD_REQUEST, 'You already have added this product to cart.');
    }
    const result = yield addToCart_model_1.AddToCart.create(payload);
    return result;
});
// Get All AddToCarts (can also filter)
const getAllAddToCarts = (verifiedUser) => __awaiter(void 0, void 0, void 0, function* () {
    const carts = yield addToCart_model_1.AddToCart.find({ email: verifiedUser === null || verifiedUser === void 0 ? void 0 : verifiedUser.email });
    const result = yield product_model_1.Product.find({
        _id: carts.map(x => x.productId),
    });
    return result;
});
// Get Single AddToCart
const getSingleAddToCart = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield addToCart_model_1.AddToCart.findById(id);
    console.log(result);
    return result;
});
const updateAddToCart = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield addToCart_model_1.AddToCart.findOne({ _id: id });
    if (!isExist) {
        throw new apiError_1.default(http_status_1.default.BAD_REQUEST, 'AddToCart not found');
    }
    const result = yield addToCart_model_1.AddToCart.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
// Delete AddToCart
const deleteAddToCart = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield addToCart_model_1.AddToCart.findOneAndDelete({ productId: id });
    if (!result) {
        throw new apiError_1.default(http_status_1.default.FORBIDDEN, 'Cart Not Found');
    }
    return result;
});
exports.AddToCartProduct = {
    createAddToCart,
    getAllAddToCarts,
    getSingleAddToCart,
    updateAddToCart,
    deleteAddToCart,
};
