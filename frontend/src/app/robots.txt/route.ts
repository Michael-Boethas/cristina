export async function GET() {
    const content = `
  User-agent: *
  Disallow:
  
  Sitemap: ${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/sitemap.xml
    `.trim();

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}
