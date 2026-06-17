// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Update this to the real production domain before deploying.
  site: 'https://crescentjuniorcollege.pages.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});
