import { z } from "@hono/zod-openapi";
import { getSong } from "@/handlers/songs/getSong";
import { getSongResponse } from "@/handlers/songs/dtos/getSong.response";

export const listSongResponse = z.object({
  items: z.array(getSongResponse),
  totalPages: z.number(),
  totalCount: z.number(),
  currentPage: z.number(),
  limit: z.number(),
});
