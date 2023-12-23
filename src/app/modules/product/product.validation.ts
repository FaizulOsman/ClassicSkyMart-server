import { z } from 'zod';

const IVariation = {
  color: z.string().optional(),
  size: z.string().optional(),
};

const createProductZodValidation = z.object({
  body: z.object({
    title: z.string(),
    image: z.string(),
    variation: z.object(IVariation),
  }),
});

const updateProductZodValidation = z.object({
  body: z.object({
    body: z.object({
      title: z.string().optional(),
      image: z.string().optional(),
      variation: z.object(IVariation).optional(),
    }),
  }),
});

export const ProductValidation = {
  createProductZodValidation,
  updateProductZodValidation,
};
