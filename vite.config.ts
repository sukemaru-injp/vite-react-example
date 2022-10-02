import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  build: {
    target: 'esnext',
    outDir: '../dist',
    minify: 'esbuild'
  },
  server: {
    open: true,
    port: 3009
  },
  plugins: [react()]
})
