import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith("pdf")) {
            // Don't hash pdf files
            return "assets/[name][extname]";
          } else {
            // Hash everything else
            return "assets/[name]-[hash][extname]";
          }
        },
      },
    },
  },
});
