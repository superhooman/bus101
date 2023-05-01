import type { GetServerSideProps, NextPage } from "next";
import { getServerAuthSession } from "@src/server/auth";
import { Container } from "@src/components/Container";
import { Button } from "@src/components/Button";
import { GoogleIcon } from "@src/components/Icon";
import { Stack } from "@src/components/Stack";
import { Text, Title } from "@src/components/Typography";
import React from "react";
import { signIn } from "next-auth/react";
import { ROUTES } from "@src/constants/routes";
import { VERSION } from "@src/constants/version";


const AuthPage: NextPage = () => {
    const [loading, setLoading] = React.useState(false);

    const handleAuth = React.useCallback(() => {
        setLoading(true);
        signIn('google', { callbackUrl: ROUTES.HOME.get() }).catch(() => setLoading(false));
    }, []);

    return (
        <Container size="small" flex flexGrow withPaddingY>
            <Stack flexGrow direction="column" align="start" gap={4}>
                <Stack direction="column" align="start" gap={2}>
                    <Title size="medium">Sign in</Title>
                    <Text color="secondary">Sign in with your Google account to get started.</Text>
                </Stack>
                <Button onClick={handleAuth} isLoading={loading} icon={<GoogleIcon />} fullWidth>
                    Sign in with Google
                </Button>
                <Text size="small" align="center" color="secondary" block>{VERSION}</Text>
            </Stack>
        </Container>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getServerAuthSession(ctx);

    if (session) {
        return {
            redirect: {
                destination: ROUTES.HOME.get(),
                permanent: false,
            },
        };
    }

    return { props: {} }
}

export default AuthPage;