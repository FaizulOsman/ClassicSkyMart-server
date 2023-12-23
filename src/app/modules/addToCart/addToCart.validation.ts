import { z } from 'zod';

const createAddToCartZodValidation = z.object({
  body: z.object({
    productId: z.string(),
    email: z.string(),
  }),
});

const updateAddToCartZodValidation = z.object({
  body: z.object({
    productId: z.string().optional(),
    email: z.string().optional(),
  }),
});

export const AddToCartValidation = {
  createAddToCartZodValidation,
  updateAddToCartZodValidation,
};
