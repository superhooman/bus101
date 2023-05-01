import { type Message } from "@src/schemas/message";

export const getUserMessage = (content: string): Message => ({
    content,
    timestamp: Date.now(),
    from: 'user',
});