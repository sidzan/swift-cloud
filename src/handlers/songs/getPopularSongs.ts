import { GetPopularSong, GetSongRoute } from "@/router";
import { prisma } from "@/services/db/prisma";
import { type RouteHandler } from "@hono/zod-openapi";
import { defaultSongIncludes } from "@/handlers/songs/helpers/queryHelpers";

export const getPopularSongs: RouteHandler<GetPopularSong> = async (c) => {
  let { month, year, limit } = c.req.valid("query");
  if (!month || !year) {
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    month = month || lastMonth.getMonth() + 1;
    year = year || lastMonth.getFullYear();
  }

  const plays = await prisma.plays.findMany({
    select: {
      songId: true,
    },
    where: {
      month: month,
      year: year,
    },
    orderBy: {
      count: "desc",
    },
    take: limit,
  });

  const popularSongs = await prisma.song.findMany({
    where: {
      id: {
        in: plays.map((play) => play.songId),
      },
    },
    include: defaultSongIncludes,
  });

  return c.json(popularSongs, 200);
};
