import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    preset: "static",
    prerender: {
      crawlLinks: true,
    },
  },
  vite: {
    base: "/kaantaa-web-site/",
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});