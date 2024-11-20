import type { GetSongRoute } from "@/router";
import { prisma } from "@/services/db/prisma";
import { type RouteHandler } from "@hono/zod-openapi";

export const getSong: RouteHandler<GetSongRoute> = async (c) => {
  const { id } = c.req.valid("param");

  const song = await prisma.song.findUnique({
    where: { id },
    include: {
      album: {
        select: {
          id: true,
          title: true,
        },
      },
      artists: {
        select: {
          id: true,
          role: true,
          artist: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
      songWriters: {
        select: {
          id: true,
          writer: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
      plays: {
        select: {
          id: true,
          month: true,
          year: true,
          count: true,
        },
      },
    },
  });

  if (!song) {
    throw new Error("Song not found");
  }

  return c.json(song);
};
