import { Avatar } from "@src/components/Avatar";
import { Stack } from "@src/components/Stack";
import { type Message } from "@src/schemas/message"
import { useSession } from "next-auth/react";
import React from "react";
import * as cls from './MessageItem.css';
import { cn } from "@src/utils/cn";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
    message: Message;
}

export const MessageItem: React.FC<Props> = ({ message }) => {
    const { data: session } = useSession();

    const isUser = message.from === 'user';

    const avatar = React.useMemo(() => {
        if (isUser) {
            return (
                <Avatar
                    name={session?.user?.name ?? 'User'}
                    img={session?.user?.image ?? undefined}
                />
            )
        }
        return (
            <Avatar
                name="✷"
                img={undefined}
            />
        );
    }, [isUser, session?.user?.image, session?.user?.name]);

    const direction = isUser ? 'row' : 'rowReverse';

    return (
        <AnimatePresence>
            <Stack fullWidth gap={4} align="end" justify="end" direction={direction}>
                <motion.div initial={{ scale: 0.2, opacity: 0 }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        transition: { type: 'spring', duration: 0.5 },
                    }}
                    exit={{ scale: 0.2, opacity: 0, transition: { duration: 0.1 } }} className={cn(cls.body, isUser ? cls.user : cls.bot)}>{message.content}</motion.div>
                <motion.div
                    initial={{ scale: 0.2, opacity: 0 }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        transition: { type: 'spring', duration: 0.5 },
                    }}
                    exit={{ scale: 0.2, opacity: 0, transition: { duration: 0.1 } }}
                >{avatar}</motion.div>
            </Stack>
        </AnimatePresence>
    )
};
