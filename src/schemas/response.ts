import { z } from "zod";

export const responseSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    justification: z.string(),
    price_min: z.number(),
    price_max: z.number(),
});

export type Response = z.infer<typeof responseSchema>;
