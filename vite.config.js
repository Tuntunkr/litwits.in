import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/payments': {
        target: 'https://api.litwits.in',
        changeOrigin: true,
        secure: true, // set to false if your SSL is self-signed
      },
    },
  },
})
