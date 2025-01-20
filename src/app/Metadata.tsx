export default function Metadata() : React.JSX.Element {
  return (
    <>
      {/* Meta Tags */}
      <meta charSet="utf-8" />
      <title>Cristina Jimenez - Portfolio</title>
      <meta
        name="description"
        content="Portfolio of a communications and international marketing specialist who enjoys producing content that drives real value for ambitious B2B and B2C companies."
      />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Cristina Jimenez - Portfolio" />
      <meta
        property="og:description"
        content="Portfolio of a communications and international marketing specialist who enjoys producing content that drives real value for ambitious B2B and B2C companies."
      />
      <meta
        property="og:image"
        content="https://www.cristina-jimenez.netlify.app/og-image.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Cristina's Portfolio Open Graph Image"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.cristina-jimenez.netlify.app"
      />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cristina Jimenez - Portfolio" />
      <meta
        name="twitter:description"
        content="Portfolio of a communications and international marketing specialist who enjoys producing content that drives real value for ambitious B2B and B2C companies."
      />
      <meta
        name="twitter:image"
        content="https://www.cristinasportfolio.com/twitter-card-image.png"
      />

      {/* Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link
        rel="icon"
        type="image/png"
        sizes="48x48"
        href="/favicon-48x48.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="icon" sizes="192x192" href="/web-app-manifest-192x192.png" />
      <link rel="icon" sizes="512x512" href="/web-app-manifest-512x512.png" />

      {/* Mobile Web App */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        name="mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta
        name="mobile-web-app-title"
        content="Cristina Jimenez - Portfolio"
      />
    </>
  );
}
