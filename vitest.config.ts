import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    include: ["tests/unit/**/*.spec.{ts,tsx}"],
    setupFiles: ["vitest.setup.ts"],
    environment: "jsdom",
    globals: true,
  },
  resolve: {
    tsconfigPaths: true,
  }
});