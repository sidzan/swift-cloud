import { testClient, describe, expect, it } from "@/services/testing/app";

describe("List Songs", async () => {
  it("should return a list of songs", async () => {
    const response = await testClient.request("/songs?page=1&limit=10");
    const result = await response
      .text()
      .then((response) => JSON.parse(response));

    expect(result.items).toHaveLength(10);
    expect(result.totalCount).toBe(172);
  });
});
