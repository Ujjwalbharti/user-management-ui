import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // This allows access from any network interface
    port: 3000,      // You can set any port you want
  },
  plugins: [react()],
})
