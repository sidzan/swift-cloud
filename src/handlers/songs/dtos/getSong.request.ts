import { z } from "@hono/zod-openapi";

export const getSongQuerySchema = z.object({
  id: z.string(),
});