import { z } from "@hono/zod-openapi";

export const listAlbumsResponseSchema = z.array(
  z.object({
    id: z.string(),
    title: z.string(),
    year: z.number(),
    songs: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
      }),
    ),
  }),
);
