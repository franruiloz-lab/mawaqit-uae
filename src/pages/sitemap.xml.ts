import type { APIRoute } from 'astro';
import { cities } from '../data/cities';

export const GET: APIRoute = () => {
  // Build the canonical base URL from Astro config (single source of truth).
  // When you switch to a custom domain, update astro.config.mjs and this
  // file will automatically use the new URL.
  const site = import.meta.env.SITE.replace(/\/$/, '');      // e.g. https://franruiloz-lab.github.io
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');  // e.g. /mawaqit-uae
  const baseUrl = `${site}${base}`;                           // e.g. https://franruiloz-lab.github.io/mawaqit-uae

  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '/',         priority: '1.0', changefreq: 'daily'   },
    { url: '/maghrib/', priority: '0.9', changefreq: 'daily'   },
    { url: '/ramadan/', priority: '0.8', changefreq: 'weekly'  },
    { url: '/blog/',    priority: '0.7', changefreq: 'weekly'  },
    { url: '/blog/salat-al-jumua/',               priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/arkan-al-salah/',               priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/salat-al-fajr/',                priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/salat-al-dhuhr/',               priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/salat-al-isha/',                priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/turuq-hisab-awqat-al-salah/',  priority: '0.6', changefreq: 'monthly' },
    { url: '/blog/awqat-al-salah-wal-fusul/',     priority: '0.6', changefreq: 'monthly' },
    { url: '/about/',   priority: '0.5', changefreq: 'monthly' },
    { url: '/privacy/', priority: '0.5', changefreq: 'monthly' },
    { url: '/terms/',   priority: '0.5', changefreq: 'monthly' },
  ];

  const cityPages = cities.map(c => ({
    url: `/${c.id}/`,
    priority: c.volume > 5000 ? '0.9' : '0.8',
    changefreq: 'daily',
  }));

  const allPages = [...staticPages, ...cityPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages
  .map(
    p => `  <url>
    <loc>${baseUrl}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}${p.url}"/>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
