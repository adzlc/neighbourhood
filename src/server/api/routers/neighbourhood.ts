import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const neighbourhoodRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.neighbourhood.create({
        data: {
          name: input.name,
        },
      });
    }),

    list: publicProcedure.query(({ ctx }) => {
      return ctx.db.neighbourhood.findMany();
    }),
});
