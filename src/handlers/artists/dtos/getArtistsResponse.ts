import { z } from "@hono/zod-openapi";

export const getArtistsResponse = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
  }),
);
