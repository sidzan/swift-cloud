import { prisma } from "@/services/db/prisma";
import { RouteHandler } from "@hono/zod-openapi";
import { GetArtists } from "@/router";
import { defaultSongIncludes } from "@/handlers/songs/helpers/queryHelpers";

export const getArtists: RouteHandler<GetArtists> = async (c) => {
  const artists = await prisma.artist.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return c.json(artists);
};