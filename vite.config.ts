import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    strictPort: true,
    open: true,
    https: false,
    proxy: {
      "/api": {
        target: "http://localhost:8081",
      },
      "/auth": {
        target: "http://localhost:9000",
      },
    },
  },
});
