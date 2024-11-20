import { z } from "@hono/zod-openapi";

export const getPopularSongQuerySchema = z.object({
  month: z
    .preprocess((val) => Number(val), z.number().min(1).max(12))
    .nullable()
    .optional(),
  year: z
    .preprocess((val) => Number(val), z.number().min(2006))
    .nullable()
    .optional(),
  limit: z.preprocess((val) => Number(val), z.number().min(2).default(2)),
});
