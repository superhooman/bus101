import {
  createTRPCRouter,
  protectedProcedure,
} from "@src/server/api/trpc";
import { messageFormSchema } from "@src/schemas/message";
import { responseSchema } from "@src/schemas/response";
import { TRPCError } from "@trpc/server";

export const mainRouter = createTRPCRouter({
  send: protectedProcedure
    .input(messageFormSchema)
    .output(responseSchema.array())
    .mutation(async ({ ctx, input }) => {
      const responses = await ctx.backend.send(input.text);

      if ('error' in responses) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: responses.error,
        });
      }

      return responses;
    }),
});
