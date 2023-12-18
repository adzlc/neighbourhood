import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";

export const neighbourhoodRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ name: z.string().min(1), description: z.string().optional() }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session?.user?.id
      if (userId) {
      return ctx.db.neighbourhood.create({
        data: {
          name: input.name,
          description: input.description,
          createdById: userId
        },
      });
    }
    }),

    list: publicProcedure.query(({ ctx }) => {
      return ctx.db.neighbourhood.findMany();
    }),
});
