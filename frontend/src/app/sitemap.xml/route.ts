export async function GET() {
  const sitemap =
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    '<url>' +
    '<loc>' + process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + '/</loc>' +
    '</url>' +
    '<url>' +
    '<loc>' + process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + '/home</loc>' +
    '</url>' +
    '<url>' +
    '<loc>' + process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + '/about</loc>' +
    '</url>' +
    '<url>' +
    '<loc>' + process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + '/portfolio</loc>' +
    '</url>' +
    '<url>' +
    '<loc>' + process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + '/resume</loc>' +
    '</url>' +
    '</urlset>';

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
