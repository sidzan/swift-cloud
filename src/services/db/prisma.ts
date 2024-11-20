import { PrismaClient } from "@prisma/client";
import { env } from "@/services/env/env";

export const prisma = new PrismaClient({
  log: env.NODE_ENV === "development" ? ["query"] : [],
});
