"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidation = void 0;
const zod_1 = require("zod");
const IVariation = {
    color: zod_1.z.string().optional(),
    size: zod_1.z.string().optional(),
};
const createProductZodValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        image: zod_1.z.string(),
        variation: zod_1.z.object(IVariation),
    }),
});
const updateProductZodValidation = zod_1.z.object({
    body: zod_1.z.object({
        body: zod_1.z.object({
            title: zod_1.z.string().optional(),
            image: zod_1.z.string().optional(),
            variation: zod_1.z.object(IVariation).optional(),
        }),
    }),
});
exports.ProductValidation = {
    createProductZodValidation,
    updateProductZodValidation,
};
