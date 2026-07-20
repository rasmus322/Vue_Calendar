import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import { resolve } from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@app": resolve(__dirname, "./src/app"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@widgets": resolve(__dirname, "./src/widgets"),
      "@features": resolve(__dirname, "./src/features"),
      "@entities": resolve(__dirname, "./src/entities"),
      "@shared": resolve(__dirname, "./src/shared"),
    },
  },
});
