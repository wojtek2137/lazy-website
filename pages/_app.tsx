import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalWrapper } from "config/GlobalWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Lazy Swing Band - Polski Zespół Jazzowy | Taneczna Muzyka | Swing,
          Retro, Wielki Gatsby
        </title>
      </Head>
      <GlobalWrapper />
      <Component {...pageProps} />
    </>
  );
}
