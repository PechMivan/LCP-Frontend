import { defineConfig } from 'vite'
import { viteStaticCopy } from "vite-plugin-static-copy";
import react from '@vitejs/plugin-react'
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: `${path.resolve(__dirname, "./src/assets")}/[!.]*`, // 1️⃣
          dest: "./assets", // 2️⃣
        },
      ],
    }),
  ],
})
