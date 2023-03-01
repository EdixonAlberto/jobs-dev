import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8000
  },
  base: '/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/scss/global.scss" as *;`
      }
    }
  },
  resolve: {
    alias: [
      {
        find: '~/',
        replacement: '/src/'
      }
    ]
  }
})
