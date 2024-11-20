import { RouteHandler } from "@hono/zod-openapi";
import { prisma } from "@/services/db/prisma";
import { ListAlbum } from "@/router";

export const listAlbums: RouteHandler<ListAlbum> = async (c) => {
  const albums = await prisma.album.findMany({
    include: {
      songs: {
        select: {
          id: true,
          title: true,
        },
      },
    },
  });

  return c.json(albums);
};
