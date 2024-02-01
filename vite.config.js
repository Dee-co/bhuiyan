import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
export default defineConfig({
  plugins: [
   
    vue(),
     vuetify({ autoImport: true }),
  ],
  server: {
    proxy: {
      '/v1': {
        target: 'http://54.82.47.83:5000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/v1/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
