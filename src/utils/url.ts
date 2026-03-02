/**
 * Returns an absolute URL with the Astro base path prepended.
 * Works both in dev (base="/") and GitHub Pages (base="/mawaqit-uae/").
 *
 * Usage in templates:  href={u('dubai')}  or  href={u('')}  for home
 * Usage in scripts:    window.location.href = BASE + 'dubai';
 */

const _base = import.meta.env.BASE_URL; // "/" or "/mawaqit-uae/"

/** Returns a site-relative URL with the base prefix */
export function u(path: string): string {
  if (!path || path === '/') return _base;
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${_base}${clean}`;
}

/** The raw base URL (always has trailing slash) */
export const BASE = _base;
