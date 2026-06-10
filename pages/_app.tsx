import type { AppProps } from "next/app";
import Head from "next/head";
import localFont from "next/font/local";
import { GlobalWrapper } from "config/GlobalWrapper";

const outfit = localFont({
  src: [
    {
      path: "../public/assets/fonts/Outfit-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Outfit-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Outfit-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Outfit-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-outfit",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
  preload: true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={outfit.variable}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalWrapper />
      <Component {...pageProps} />
    </div>
  );
}
