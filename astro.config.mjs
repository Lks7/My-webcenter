import { defineConfig, svgoOptimizer } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import swup from "@swup/astro";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import node from "@astrojs/node";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321", //"https://djsiddz.github.io",
  // base: "/space-ahead", // 如果你要部署到 GitHub Pages 的子目录（比如 /space-ahead），发布时请取消注释这一行

  output: "static",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [
    swup({
      theme: ["overlay", { direction: "to-top" }],
      cache: true,
      progress: true,
    }),
    preact(),
    react(),
    sitemap(),
    keystatic(),
  ],

  image: {
    responsiveStyles: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
});

//swup theme variations:
// theme: "fade"
// theme: ["overlay", { direction: "to-top"}]
//
// for overlay and fade, further customization can be done in animate.css file
// To know about swup, visit https://swup.js.org/
