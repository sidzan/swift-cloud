import { z } from "@hono/zod-openapi";
import { getSongResponse } from "@/handlers/songs/dtos/getSong.response";

export const getPopularSongResponseSchema = z.array(getSongResponse);
