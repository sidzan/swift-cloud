import { z } from "@hono/zod-openapi";

export const listSongQuerySchema = z.object({
  title: z.string().nullable().optional(),
  album: z.string().nullable().optional(),
  year: z.string().nullable().optional(),
  page: z.preprocess((val) => Number(val), z.number().min(1).default(1)),
  limit: z.preprocess((val) => Number(val), z.number().min(10).default(10)),
});
