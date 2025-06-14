import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
// import vercel from "@astrojs/vercel"; // Commented out for static build

export default defineConfig({
  integrations: [tailwind(), react()],
  // output: "server", // Commented out for static build - defaults to "static"
  // adapter: vercel(), // Commented out for static build
  outDir: "./dist", // Explicitly set output directory for static build
});
