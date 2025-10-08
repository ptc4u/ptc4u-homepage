import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#7c3aed" />

        {/* Favicon and App Icons - Using PTC Logo */}
        <link rel="icon" type="image/png" href="/rndPTClogo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/rndPTClogo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/rndPTClogo.png" />
        <link rel="apple-touch-icon" href="/rndPTClogo.png" />
        <link rel="shortcut icon" href="/rndPTClogo.png" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
