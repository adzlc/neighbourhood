import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const simsRouter = createTRPCRouter({
  list: protectedProcedure
    .input(
      z.object({
        neighbourhoodId: z.string(),
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(), // <-- "cursor" needs to exist, but can be any type
      }),
    )
    .query(async (opts ) => {
      const { ctx, input } = opts;
      const limit = input.limit ?? 10;
      const { cursor } = input;

      console.log("INPUT", input);

      const items = await ctx.db.sim.findMany({
        where: {
          neighbourhoodId: input.neighbourhoodId,
          createdById: ctx.session?.user?.id,
        },
        take: limit + 1, // get an extra item at the end which we'll use as next cursor
        cursor: cursor ? { id: cursor } : undefined,
        skip:  cursor ? 1 : 0,
        orderBy: {
          id: 'asc',
        },
      });
      

      let nextCursor: typeof cursor | undefined = undefined;
      if (items.length > limit) {
        const nextItem = items.pop();
        nextCursor = nextItem!.id;
      }

      console.log("Found items", items.length, "next cursor", nextCursor);
      return {
        items,
        nextCursor,
      };
    }),
});
