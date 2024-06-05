import { sentryVitePlugin } from "@sentry/vite-plugin";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    sveltekit(),
    sentryVitePlugin({
      org: "martrust",
      project: "seafarer-ui",
      telemetry: false,
    }),
  ],
});
