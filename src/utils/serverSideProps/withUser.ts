/* eslint-disable @typescript-eslint/no-explicit-any */
import { ROUTES } from "@src/constants/routes";
import { getServerAuthSession } from "@src/server/auth";
import type { GetServerSideProps, PreviewData, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import type { Session, User } from "next-auth";
import type { ParsedUrlQuery } from "querystring";

type Handler<
    P extends { [key: string]: any } = { [key: string]: any },
    Q extends ParsedUrlQuery = ParsedUrlQuery,
    D extends PreviewData = PreviewData
> = (ctx: GetServerSidePropsContext<Q, D> & {
    session: Session & { 
        user: User,
    };
}) => Promise<GetServerSidePropsResult<P>>;

export const withUser = <
    P extends { [key: string]: any } = { [key: string]: any, session: Session },
    Q extends ParsedUrlQuery = ParsedUrlQuery,
    D extends PreviewData = PreviewData
  >(handler?: Handler<P, Q, D>): GetServerSideProps<P, Q, D> => async (ctx) => {
    const session = await getServerAuthSession(ctx);

    if (!session || !session.user) {
        return {
            redirect: {
                destination: ROUTES.AUTH.get(),
                permanent: false,
            },
        };
    }

    if (handler) {
        return handler({
            ...ctx,
            session: {
                ...session,
                user: session.user,
            }
        });
    }

    return {
        props: {
            session,
        } as unknown as P,
    };
};
