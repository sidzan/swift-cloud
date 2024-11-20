import * as fs from "node:fs";
import { ArtistRole, PrismaClient } from "@prisma/client";
import { parse } from "csv-parse/sync";

const prisma = new PrismaClient();

// Interface for CSV record structure
interface SongRecord {
  Song: string;
  "[Main] Artist": string;
  "[Featured] Artist": string;
  Writer: string;
  Album: string;
  Year: string;
  "Plays - June": string;
  "Plays - July": string;
  "Plays - August": string;
}

async function main() {
  await prisma.song.deleteMany({});
  await prisma.artist.deleteMany({});
  console.log("Starting seed...");

  // Read and parse CSV file
  const fileContent = fs.readFileSync("./prisma/seed/swiftcloud.csv", "utf-8");
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  }) as SongRecord[];

  for (const record of records) {
    try {
      // Process Album and Artist first
      let album: { id: string } | undefined;
      if (
        record.Album &&
        record.Album !== "None" &&
        !record.Album.includes("None[")
      ) {
        // Get or create the main artist for the album
        const mainArtistName = record["[Main] Artist"].split(";")[0].trim();
        const albumArtist = await prisma.artist.upsert({
          where: { name: mainArtistName },
          update: {},
          create: { name: mainArtistName },
        });

        // Find existing album or create new one
        const existingAlbum = await prisma.album.findFirst({
          where: {
            title: record.Album,
          },
        });

        if (!existingAlbum) {
          album = await prisma.album.create({
            data: {
              title: record.Album,
              year: Number.parseInt(record.Year),
            },
          });
        } else {
          album = existingAlbum;
        }
      }

      // Rest of the code remains the same...
      // Create the song
      const song = await prisma.song.create({
        data: {
          title: record.Song,
          year: record.Year,
          albumId: album?.id,
        },
      });

      // Process main artists
      const mainArtists = record["[Main] Artist"]
        .split(";")
        .map((name) => name.trim());
      for (const artistName of mainArtists) {
        const artist = await prisma.artist.upsert({
          where: { name: artistName },
          update: {},
          create: { name: artistName },
        });
        console.log(">>>", song.title);
        await prisma.songArtist.create({
          data: {
            songId: song.id,
            artistId: artist.id,
            role: ArtistRole.PRIMARY,
          },
        });
      }

      // Process featured artists if any
      if (record["[Featured] Artist"]) {
        const featuredArtists = record["[Featured] Artist"]
          .split(";")
          .map((name) => name.trim());
        for (const artistName of featuredArtists) {
          if (artistName && artistName !== "") {
            const artist = await prisma.artist.upsert({
              where: { name: artistName },
              update: {},
              create: { name: artistName },
            });
            console.log(">>>", song.title);

            await prisma.songArtist.create({
              data: {
                songId: song.id,
                artistId: artist.id,
                role: ArtistRole.FEATURED,
              },
            });
          }
        }
      }

      // Process writers
      const writers = record.Writer.split("\n").map((name) => name.trim());
      for (const writerName of writers) {
        if (writerName && writerName !== "") {
          const writer = await prisma.writer.upsert({
            where: { name: writerName },
            update: {},
            create: { name: writerName },
          });

          await prisma.songWriter.create({
            data: {
              songId: song.id,
              writerId: writer.id,
            },
          });
        }
      }

      // Create plays records
      const months = ["June", "July", "August"];
      for (let i = 0; i < months.length; i++) {
        // @ts-ignore
        const playCount = Number.parseInt(record[`Plays - ${months[i]}`]);
        if (!isNaN(playCount)) {
          await prisma.plays.create({
            data: {
              songId: song.id,
              month: i + 6, // June is 6, July is 7, August is 8
              year: 2023, // Assuming the plays are from 2023
              count: playCount,
            },
          });
        }
      }
    } catch (error) {
      console.error(`Error processing record for song: ${record.Song}`);
      console.error(error);
    }
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
