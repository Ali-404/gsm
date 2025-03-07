import { resolve, dirname } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    build:{
      outDir: "out/renderer",
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/renderer/index.html'),
          splash: resolve(__dirname, 'src/renderer/splash/index.html')
        }
      }
    },
    plugins: [react(),tailwindcss()]
  }
})
