import { createApp } from "@/app";
import { describe, expect, it } from "vitest";

const testClient = await createApp();
export { describe, expect, it, testClient };
