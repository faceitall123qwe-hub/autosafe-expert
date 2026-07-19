// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// UWAGA: po kupnie domeny ustaw `site` na docelowy adres (np. https://autosafe-expert.pl)
export default defineConfig({
  site: 'https://autosafe-expert.pl',
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'uk'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
