// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), svelte()],

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['@prisma/client']
    }
  },

  adapter: node({
    mode: 'standalone'
  }),

  output: "server",

  server: {
    async start() {
      const { airtableSyncWorker } = await import('./src/lib/airtable.ts');
      await airtableSyncWorker.start();
    }
  }
});