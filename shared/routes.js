import { z } from 'zod';
import { insertInquirySchema, insertProductSchema, products, inquiries } from './schema.js';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  products: {
    list: {
      method: 'GET',
      path: '/api/products',
      responses: {
        200: z.array(z.custom()),
      },
    },
    get: {
      method: 'GET',
      path: '/api/products/:id',
      responses: {
        200: z.custom(),
        404: errorSchemas.notFound,
      },
    },
    create: {
      method: 'POST',
      path: '/api/products',
      input: insertProductSchema,
      responses: {
        201: z.custom(),
        400: errorSchemas.validation,
      },
    },
  },
  inquiries: {
    create: {
      method: 'POST',
      path: '/api/inquiries',
      input: insertInquirySchema,
      responses: {
        201: z.custom(),
        400: errorSchemas.validation,
      },
    },
  },
};

export function buildUrl(path, params) {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
