import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
    <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

            <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
);

export default Document;
