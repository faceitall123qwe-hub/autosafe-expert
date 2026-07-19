// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://autosafexpert.pl',
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'uk', 'en', 'ru', 'be'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
