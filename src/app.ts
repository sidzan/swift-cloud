import configureOpenAPI from "@/lib/configureOpenApi";
import { OpenAPIHono } from "@hono/zod-openapi";
import { logger } from "hono/logger";
import { router } from "./router";
import { staticHTML } from "../static/static";

export function createApp() {
  const app = new OpenAPIHono();
  configureOpenAPI(app);
  app.use(logger()).get("/", (c) => {
    return c.html(staticHTML);
  });

  const routes = [router];

  routes.forEach((r) => app.route("/", r));

  return app;
}

export const app = createApp();

export default app;
