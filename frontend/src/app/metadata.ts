import type { Metadata } from 'next';


/**
 * Generates the metadata for the page, including Open Graph, Twitter, and icon information.
 *
 * @param {Object} params - The metadata parameters.
 * @param {string} [params.title='Cristina Jiménez - Home'] - The page title.
 * @param {string} [params.description='Portfolio of a communications and international marketing specialist...'] - The page description.
 * @returns {Metadata} The generated metadata object.
 */
export default function getMetadata({
  title = 'Cristina Jiménez - Home',
  description = 'Portfolio of a communications and international marketing specialist who enjoys producing content that drives real value for ambitious B2B and B2C companies.',
}: {
  title?: string;
  description?: string;
}): Metadata {
  return (
    {
      title,
      description,
      openGraph: {
        title,
        description,
        url: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL,
        type: 'website',
        siteName: 'Cristina Jiménez - Portfolio',
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/og-image.png`,
            width: 1200,
            height: 630,
            alt: "Cristina's Portfolio Open Graph Image",
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [`${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/twitter-card-image.png`],
      },
      icons: {
        icon: [
          '/favicon.ico',
          { url: '/favicon.svg', type: 'image/svg+xml' },
          { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
        ],
        apple: '/apple-touch-icon.png',
        other: [
          {
            rel: 'manifest',
            url: '/site.webmanifest',
          },
          {
            rel: 'icon',
            url: '/web-app-manifest-192x192.png',
            sizes: '192x192',
          },
          {
            rel: 'icon',
            url: '/web-app-manifest-512x512.png',
            sizes: '512x512',
          },
        ],
      },
      authors: [{ name: 'Michael Boethas / Mishmesh', url: process.env.NEXT_PUBLIC_AUTHOR_CREDIT }],
      applicationName: 'Cristina Jimenez - Portfolio',
    }
  );
}
