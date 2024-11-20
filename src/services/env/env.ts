import { z } from "@hono/zod-openapi";

export const env = z
  .object({
    NODE_ENV: z.string(),
  })
  .parse({
    NODE_ENV: process.env.NODE_ENV,
  });
