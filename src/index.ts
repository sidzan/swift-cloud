import app from "@/app";
import { serve } from "@hono/node-server";

const port = 3000;
// eslint-disable-next-line no-console
console.info(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
