import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve("index.html"),
        404: resolve("public/404.html"),
      },
    },
  },
});
