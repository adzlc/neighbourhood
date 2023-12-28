import { createTRPCRouter } from "~/server/api/trpc";
import { neighbourhoodRouter } from "./routers/neighbourhood";
import { simsRouter } from "./routers/sims";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  neighbourhood: neighbourhoodRouter,
  sims: simsRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
