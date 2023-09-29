import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      src: "/src",
      planMaking: "/plan-making",
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "dluhc.js",
        assetFileNames: "dluhc.css",
      },
    },
  },
});
