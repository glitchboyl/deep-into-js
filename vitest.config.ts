import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src/"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    clearMocks: true,
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});
