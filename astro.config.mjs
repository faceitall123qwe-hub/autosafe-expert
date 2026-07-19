// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// UWAGA: po kupnie domeny ustaw `site` na docelowy adres (np. https://autosafe-expert.pl)
// i USUŃ pole `base` (jest potrzebne tylko dla GitHub Pages na subścieżce).
export default defineConfig({
  site: 'https://faceitall123qwe-hub.github.io',
  base: '/autosafe-expert',
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'uk'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
