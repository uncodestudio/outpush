import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  
  build: {
    target: 'es2015',
    outDir: 'dist',
    minify: 'terser',
    rollupOptions: {
      input: 'main.js',
      output: {
        entryFileNames: 'main.js',
        assetFileNames: '[name].[ext]',
        format: 'es'
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      mangle: true,
      format: {
        comments: false
      }
    }
  }
})