import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 8001,
    host: true,
    cors: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@mock': path.resolve(__dirname, 'src/mock'),
      '@styles': path.resolve(__dirname, 'src/styles')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // modifyVars:{
        //   //自定义ant design主题变量
        // }
      }
    },
    modules: {
      localsConvention: 'camelCase'
    }
  }
})
