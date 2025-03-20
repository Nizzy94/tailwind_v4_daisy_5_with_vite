import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/static/",
  resolve: {
    alias: {
      "^": resolve("./assets"),
    },
  },
  build: {
    manifest: "manifest.json",
    outDir: resolve("./static"),
    rollupOptions: {
      input: {
        index: resolve("./assets/js/index.ts"),
      },
      output: {
        entryFileNames: "js/[name].js",
        assetFileNames: "css/[name].css",
      },
    },
  },
  plugins: [tailwindcss()],
});
