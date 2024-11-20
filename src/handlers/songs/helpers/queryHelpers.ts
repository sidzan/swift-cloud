export const defaultSongIncludes = {
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
};
