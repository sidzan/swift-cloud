import { getSong } from "@/handlers/songs/getSong";
import { healthCheck } from "@/handlers/healthCheck";
import { listSongs } from "@/handlers/songs/listSongs";
import { createRouter } from "@/lib/createRouter";
import { createRoute, z } from "@hono/zod-openapi";
import { getSongQuerySchema } from "@/handlers/songs/dtos/getSong.request";
import { listSongQuerySchema } from "@/handlers/songs/dtos/listSong.request";
import { getSongResponse } from "@/handlers/songs/dtos/getSong.response";
import { listSongResponse } from "@/handlers/songs/dtos/listSong.response";
import { getPopularSongQuerySchema } from "@/handlers/songs/dtos/getPopularSongs.request";
import { getPopularSongResponseSchema } from "@/handlers/songs/dtos/getPopularSongs.response";
import { getPopularSongs } from "@/handlers/songs/getPopularSongs";
import { getArtistsResponse } from "@/handlers/artists/dtos/getArtistsResponse";
import { getArtists } from "@/handlers/artists/getArtists";

const healthCheckRoute = createRoute({
  method: "get",
  path: "/health-check",
  tags: ["System"],
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
  tags: ["Songs"],
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
  tags: ["Songs"],
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

export const getPopularSongsRoute = createRoute({
  method: "get",
  path: "/songs/popular",
  request: {
    query: getPopularSongQuerySchema,
  },
  tags: ["Songs"],
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: getPopularSongResponseSchema,
        },
      },
    },
  },
});

export const getArtistsRoute = createRoute({
  method: "get",
  path: "/artists",
  tags: ["artists"],
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: getArtistsResponse,
        },
      },
    },
  },
});

export const router = createRouter()
  .openapi(healthCheckRoute, healthCheck)
  .openapi(listSongRoute, listSongs)
  .openapi(getPopularSongsRoute, getPopularSongs)
  .openapi(getSongRoute, getSong)
  .openapi(getArtistsRoute, getArtists);

export type ListSongRoute = typeof listSongRoute;
export type GetSongRoute = typeof getSongRoute;
export type GetPopularSong = typeof getPopularSongsRoute;
export type GetArtists = typeof getArtistsRoute;
