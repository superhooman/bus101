import type React from "react";
import { z } from "zod";

export const messageFormSchema = z.object({
    text: z.string().min(1).max(1024),
});

export type MessageForm = z.infer<typeof messageFormSchema>;

export const messageSchema = z.object({
    content: z.string().min(1).max(1024),
    timestamp: z.number(),
    from: z.enum(['user', 'bot']),
});

export interface Message {
    content: React.ReactNode;
    timestamp: number;
    from: 'user' | 'bot';
}
