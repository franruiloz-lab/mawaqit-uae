import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Custom domain active — update CNAME file and this site if domain changes
export default defineConfig({
  site: 'https://mawaqit-uae.com',
  base: '/',
  integrations: [tailwind()],
});
