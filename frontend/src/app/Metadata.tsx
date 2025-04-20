export interface IMetadataProps {
  title?: string;
  description?: string;
}

export default function Metadata({
  title = 'Cristina Jimenez - Home',
  description = 'Portfolio of a communications and international marketing specialist who enjoys producing content that drives real value for ambitious B2B and B2C companies.',
}: IMetadataProps): React.JSX.Element {
  return (
    <>
      {/* Meta Tags */}
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}/og-image.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Cristina's Portfolio Open Graph Image" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`${process.env.NEXT_PUBLIC_BASE_URL}/twitter-card-image.png`}
      />

      {/* Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="icon" sizes="192x192" href="/web-app-manifest-192x192.png" />
      <link rel="icon" sizes="512x512" href="/web-app-manifest-512x512.png" />

      {/* Mobile Web App */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="mobile-web-app-title" content="Cristina Jimenez - Portfolio" />
    </>
  );
}
