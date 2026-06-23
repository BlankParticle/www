import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import adapterCloudflare from "@sveltejs/adapter-cloudflare";

export default defineConfig({
  plugins: [sveltekit({ adapter: adapterCloudflare() }), tailwindcss()],
  server: { allowedHosts: ["anna"] },
  resolve: { tsconfigPaths: true },
});
