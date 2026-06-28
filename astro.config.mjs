// https://astro.build/config
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';

const SITE_URL = process.env.PUBLIC_SITE_URL || 'https://yoursite.com/';

export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    }
  },
  envPrefix: 'PUBLIC_',
  site: SITE_URL,
  base: '/',
  output: 'static',
  integrations: [
    sitemap(),
    mdx(),
    react(),
    keystatic(),
  ],
  css: {
    preprocessorOptions: {
      sass: {
        api: "modern",
      },
    },
  },
});
