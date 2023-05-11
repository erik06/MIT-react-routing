import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // root: "src",
  build: {
    outDir: "docs",
  },
  base: "/MIT-react-routing/",
  plugins: [react()],
});
