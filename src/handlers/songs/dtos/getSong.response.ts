import { z } from "@hono/zod-openapi";

export const getSongResponse = z.object({
  id: z.string(),
  title: z.string(),
  album: z.object({ id: z.string(), title: z.string() }).nullable(),
  artists: z.array(
    z.object({
      id: z.string(),
      role: z.string(),
      artist: z.object({ id: z.string(), name: z.string() }),
    }),
  ),
  songWriters: z.array(
    z.object({
      id: z.string(),
      writer: z.object({ id: z.string(), name: z.string() }),
    }),
  ),
  plays: z.array(
    z.object({
      id: z.string(),
      month: z.number(),
      year: z.number(),
      count: z.number(),
    }),
  ),
  year: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
