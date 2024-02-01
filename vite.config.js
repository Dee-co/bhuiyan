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
        target: 'https://api.apis.guru/v2/list.json',
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
