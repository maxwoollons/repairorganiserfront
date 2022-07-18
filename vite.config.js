import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api': 'http://220.239.3.153:8000',
  //     secure: false,   
  //     changeOrigin: true,
  //   }
  // }
    
  // base: '/repairorganiser/',
})
