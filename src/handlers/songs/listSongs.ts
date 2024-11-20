import type { ListSongRoute } from "@/router";
import { prisma } from "@/services/db/prisma";
import { type RouteHandler } from "@hono/zod-openapi";
import { Prisma } from "@prisma/client";
import { defaultSongIncludes } from "@/handlers/songs/helpers/queryHelpers";

export const listSongs: RouteHandler<ListSongRoute> = async (c) => {
  const query = c.req.valid("query");
  const { title, year, limit, page } = query;
  const offset = (page - 1) * limit;

  const searchQuery: Prisma.SongFindManyArgs = {
    where: {
      ...(title && {
        title: {
          contains: title,
          mode: "insensitive",
        },
      }),
      ...(year && {
        year: {
          contains: year,
          mode: "insensitive",
        },
      }),
    },
  };

  const songs = await prisma.song.findMany({
    where: searchQuery.where,
    include: defaultSongIncludes,
    skip: offset,
    take: limit,
  });

  const totalCount = await prisma.song.count({ where: searchQuery.where });

  return c.json({
    items: songs,
    totalPages: Math.ceil(totalCount / limit),
    totalCount,
    currentPage: page,
    limit: limit,
  });
};
