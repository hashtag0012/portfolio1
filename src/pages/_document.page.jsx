import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap" rel="stylesheet" />
          <link href="/fonts/NeueHaasDisplayBold.woff2" as="font" type="font/woff2" />
          <link href="/fonts/NeueHaasDisplayLight.woff2" as="font" type="font/woff2" />
          <link href="/fonts/NeueHaasDisplayLightItalic.woff2" as="font" type="font/woff2" />
          <link href="/fonts/NeueHaasDisplayMedium.woff2" as="font" type="font/woff2" />
          <link href="/fonts/NeueHaasDisplayRoman.woff2" as="font" type="font/woff2" />
          <link href="/fonts/NeueHaasDisplayRomanItalic.woff2" as="font" type="font/woff2" />
          <link rel="preload" as="image" href="/motherboard_opt.png" />
          <link rel="preload" as="image" href="/overlay1.png" />
          <link rel="preload" as="image" href="/optimization.webp" />
          <link rel="preload" as="image" href="/script.webp" />
          <link rel="preload" as="image" href="/discord.webp" />
          <link rel="preload" as="image" href="/3d.webp" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
