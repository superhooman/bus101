/* eslint-disable @typescript-eslint/no-misused-promises */
import { type GetServerSideProps, type NextPage } from "next";

import { api } from "@src/utils/api";
import { Container } from "@src/components/Container";
import { Input } from "@src/components/Input";
import { Stack } from "@src/components/Stack";
import { Button } from "@src/components/Button";
import { Text } from "@src/components/Typography";
import { Divider } from "@src/components/Divider";
import React from "react";
import { Toolbar } from "@src/components/Toolbar";
import { MagicWandIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { type MessageForm, type Message, messageFormSchema } from "@src/schemas/message";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { getUserMessage } from "@src/utils/getUserMessage";
import { getServerAuthSession } from "@src/server/auth";
import { VERSION } from "@src/constants/version";
import { MessageItem } from "@src/features/MessageItem";
import { unit } from "@src/styles/unit";
import { getBotMessages } from "@src/utils/getBotMessages";
import { getErrorMessage } from "@src/utils/getErrorMessage";
import { Typing } from "@src/components/Typing";

interface Props {
  placeholder: string;
}

const Initial: React.FC<Props & { onFocus: () => void }> = ({ placeholder, onFocus }) => {
  return (
    <Container size="large" withPadding withPaddingY flex flexGrow>
      <Stack direction="column" flexGrow gap={4} align="stretch">
        <Stack direction="column" justify="start" align="start">
          <Text color="secondary">Discover unique gift ideas tailored to their passions and interests</Text>
        </Stack>
        <Stack gap={2}>
          <Input
            fullWidth
            size="large"
            placeholder={placeholder}
            onFocus={onFocus}
          />
          <Button variant="primary" icon={<MagicWandIcon />} size="large">Generate</Button>
        </Stack>
        <Stack direction="column" gap={1}>
          <Divider />
          <Text size="small" align="center" color="secondary">
            Made by R3T4 BUS101 Team
          </Text>
          <Text size="small" align="center" color="secondary">
            {VERSION}
          </Text>
        </Stack>
      </Stack>
    </Container>
  )
}

const Active: React.FC<Props> = ({ placeholder }) => {
  const mainRef = React.useRef<HTMLDivElement>(null);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const { mutateAsync, isLoading } = api.main.send.useMutation();
  const { register, handleSubmit, setFocus, reset, formState: { isValid } } = useForm<MessageForm>({
    defaultValues: {
      text: '',
    },
    resolver: zodResolver(messageFormSchema),
  });

  React.useEffect(() => {
    setFocus('text');
  }, [setFocus]);

  React.useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = mainRef.current.scrollHeight;
    }
  }, [messages]);

  const onSubmit = React.useCallback((data: MessageForm) => {
    setMessages((messages) => [...messages, getUserMessage(data.text)]);
    reset();
    mutateAsync(data).then((response) => {
      setMessages((messages) => [...messages, ...getBotMessages(response)]);
    }).catch((error) => {
      setMessages((messages) => [...messages, { content: getErrorMessage(error), from: 'bot', timestamp: Date.now() }]);
    });
  }, [mutateAsync, reset]);

  return (
    <>
      <Stack ref={mainRef} direction="column" flexGrow style={{
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        scrollBehavior: 'smooth',
      }}>
        <Container size="large" withPadding withPaddingY flex flexGrow style={{ height: '100%' }}>
          <Stack direction="column" style={{ marginTop: 'auto', paddingBottom: unit(4) }} gap={4}>
            {messages.map((message, index) => (
              <MessageItem message={message} key={index} />
            ))}
            {isLoading && (
              <MessageItem message={{
                content: <Typing />,
                from: 'bot',
                timestamp: 0,
              }} />
            )}
          </Stack>
        </Container>
      </Stack>
      <Toolbar>
        <Container size="large" withPadding withPaddingY>
          <Stack gap={2} as="form" onSubmit={handleSubmit(onSubmit)}>
            <Input
              fullWidth
              size="large"
              placeholder={placeholder}
              autoComplete="off"
              {...register('text')}
            />
            <Button isLoading={isLoading} type="submit" variant="primary" size="large" disabled={!isValid} icon={<PaperPlaneIcon />} />
          </Stack>
        </Container>
      </Toolbar>
    </>
  );
};

type State = 'initial' | 'active';

const Home: NextPage<Props> = ({ placeholder }) => {
  const [state, setState] = React.useState<State>('initial');

  const onFocus = React.useCallback(() => {
    setState('active');
  }, []);

  if (state === 'initial') {
    return (
      <Initial
        placeholder={placeholder}
        onFocus={onFocus}
      />
    );
  }

  return (
    <Active
      placeholder={placeholder}
    />
  )
};

export default Home;

const PLACEHOLDERS = [
  "A birthday surprise for a cooking enthusiast who loves ...",
  "An anniversary gift for a partner who adores hiking and ...",
  "A thoughtful present for a friend passionate about photography and ...",
  "A unique gift for a parent who enjoys gardening and ...",
  "A special treat for a bookworm who can't get enough of ...",
  "A graduation gift for a student who's into technology and ...",
  "A holiday present for a coworker who's a fan of yoga and ...",
] as const;

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const user = await getServerAuthSession(ctx);

  if (!user) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  let placeholder = PLACEHOLDERS[Math.floor(Math.random() * PLACEHOLDERS.length)];

  if (!placeholder) {
    placeholder = PLACEHOLDERS[0];
  }

  return {
    props: {
      placeholder,
    },
  };
};