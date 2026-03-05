import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Custom domain active — update CNAME file and this site if domain changes
export default defineConfig({
  site: 'https://timeofpray.net',
  integrations: [tailwind(), sitemap()],
});
