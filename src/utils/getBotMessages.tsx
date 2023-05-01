import { BotResponse } from "@src/features/BotResponse";
import { type Message } from "@src/schemas/message";
import { type Response } from "@src/schemas/response";

export const getBotMessages = (responses: Response[]): Message[] => responses.map((response) => ({
    content: (
        <BotResponse response={response} />
    ),
    timestamp: Date.now(),
    from: 'bot',
}));
