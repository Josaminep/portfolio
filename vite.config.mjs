import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Node 22-compatible, fully ESM version
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext",
    },
  },
  build: {
    target: "esnext",
  },
});
