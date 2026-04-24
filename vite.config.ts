import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  plugins: [reactRouter()],
  base: mode === "production" ? "/npipeline.net/" : "/",
  resolve: {
    tsconfigPaths: true,
  },
}));
