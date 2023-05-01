import { createTRPCRouter } from "@src/server/api/trpc";
import { mainRouter } from "@src/server/api/routers/main";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  main: mainRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
