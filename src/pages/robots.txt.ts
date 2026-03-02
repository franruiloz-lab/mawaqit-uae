import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const site = import.meta.env.SITE.replace(/\/$/, '');
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const baseUrl = `${site}${base}`;

  const content = `User-agent: *
Allow: /
Disallow: /404

Sitemap: ${baseUrl}/sitemap.xml
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
