import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // 🔗 IMPORTANT for GitHub Pages
  // Change "proposal-app" to your GitHub repository name
  base: "/proposal-app/",
});