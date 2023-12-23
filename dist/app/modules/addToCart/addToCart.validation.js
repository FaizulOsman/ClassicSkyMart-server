"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToCartValidation = void 0;
const zod_1 = require("zod");
const createAddToCartZodValidation = zod_1.z.object({
    body: zod_1.z.object({
        productId: zod_1.z.string(),
        email: zod_1.z.string(),
    }),
});
const updateAddToCartZodValidation = zod_1.z.object({
    body: zod_1.z.object({
        productId: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
    }),
});
exports.AddToCartValidation = {
    createAddToCartZodValidation,
    updateAddToCartZodValidation,
};
