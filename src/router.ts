import { getSong } from "@/handlers/songs/getSong";
import { healthCheck } from "@/handlers/healthCheck";
import { listSongs } from "@/handlers/songs/listSongs";
import { createRouter } from "@/lib/createRouter";
import { createRoute, z } from "@hono/zod-openapi";
import { getSongQuerySchema } from "@/handlers/songs/dtos/getSong.request";
import { listSongQuerySchema } from "@/handlers/songs/dtos/listSong.request";
import { getSongResponse } from "@/handlers/songs/dtos/getSong.response";
import { listSongResponse } from "@/handlers/songs/dtos/listSong.response";

const healthCheckRoute = createRoute({
  method: "get",
  path: "/health-check",
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: z.object({
            message: z.string(),
          }),
        },
      },
    },
  },
});

export const listSongRoute = createRoute({
  method: "get",
  path: "/songs",
  request: {
    query: listSongQuerySchema,
  },
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: listSongResponse,
        },
      },
    },
  },
});

export const getSongRoute = createRoute({
  method: "get",
  path: "/songs/{id}",
  request: {
    params: getSongQuerySchema,
  },
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: getSongResponse,
        },
      },
    },
  },
});

export const router = createRouter()
  .openapi(healthCheckRoute, healthCheck)
  .openapi(listSongRoute, listSongs)
  .openapi(getSongRoute, getSong);

export type ListSongRoute = typeof listSongRoute;
export type GetSongRoute = typeof getSongRoute;
