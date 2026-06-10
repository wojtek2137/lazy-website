import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pl">
        <Head>
          {/* Icons & PWA manifest */}
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/logo192.png" />
          <link rel="apple-touch-icon" sizes="192x192" href="/logo192.png" />
          <link rel="apple-touch-icon" sizes="512x512" href="/logo512.png" />
          <link rel="manifest" href="/manifest.json" />

          {/* iOS startup images */}
          <link
            rel="apple-touch-startup-image"
            href="/logo512.png"
            media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/logo512.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/logo512.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />

          {/* Theme color */}
          <meta name="theme-color" content="#ccb379" />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#000000"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="#ccb379"
          />

          {/* PWA */}
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="apple-mobile-web-app-title" content="Lazy Swing Band" />
          <meta name="apple-touch-fullscreen" content="yes" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="msapplication-TileColor" content="#ccb379" />
          <meta name="msapplication-TileImage" content="/logo192.png" />
          <meta name="application-name" content="Lazy Swing Band" />
          <meta name="msapplication-config" content="/browserconfig.xml" />

          {/* Geographic targeting */}
          <meta name="geo.region" content="PL-12" />
          <meta name="geo.placename" content="Kraków" />
          <meta name="geo.position" content="50.0647;19.9450" />
          <meta name="ICBM" content="50.0647, 19.9450" />

          {/* Preload critical hero image for Core Web Vitals */}
          <link
            rel="preload"
            as="image"
            href="/images/responsive/homepage-hero_desktop.webp"
            imageSrcSet="/images/responsive/homepage-hero_mobile.webp 400w, /images/responsive/homepage-hero_tablet.webp 768w, /images/responsive/homepage-hero_desktop.webp 1200w"
            imageSizes="(max-width: 400px) 100vw, (max-width: 768px) 50vw, 33vw"
          />

          {/* Resource hints */}
          <link rel="prefetch" href="/images/responsive/about_desktop.webp" />
          <link rel="prefetch" href="/images/responsive/lazy_desktop.webp" />

          {/* DNS prefetch / preconnect */}
          <link
            rel="preconnect"
            href="https://www.google.com"
            crossOrigin="anonymous"
          />
          <link
            rel="preconnect"
            href="https://www.googlebot.com"
            crossOrigin="anonymous"
          />
          <link rel="dns-prefetch" href="https://www.google.com" />
          <link rel="dns-prefetch" href="https://www.googlebot.com" />
          <link rel="dns-prefetch" href="https://open.spotify.com" />
          <link rel="dns-prefetch" href="https://music.youtube.com" />
          <link rel="dns-prefetch" href="https://www.facebook.com" />
          <link rel="dns-prefetch" href="https://www.instagram.com" />
          <link rel="dns-prefetch" href="https://www.youtube.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
