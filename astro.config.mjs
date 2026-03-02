import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GitHub Pages URL: https://franruiloz-lab.github.io/mawaqit-uae/
// When you buy the domain, remove `base` and update `site`.
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubActions
    ? 'https://franruiloz-lab.github.io'
    : 'http://localhost:4321',
  base: isGitHubActions ? '/mawaqit-uae' : '/',
  integrations: [tailwind()],
});
