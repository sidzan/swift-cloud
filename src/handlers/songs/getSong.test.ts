import { testClient, describe, expect, it } from "@/services/testing/app";
import { prisma } from "@/services/db/prisma";

describe("Get Songs", async () => {
  it("should return a list of songs", async () => {
    // ideally seed the db with some songs and use a test DB
    const song = await prisma.song.findFirstOrThrow();
    const response = await testClient.request(`/songs/${song.id}`);
    const result = await response
      .text()
      .then((response) => JSON.parse(response));

    expect(result.id).toBe(song.id);
  });
});
