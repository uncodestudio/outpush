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
    minify: 'esbuild',
    rollupOptions: {
      input: 'main.js',
      output: {
        entryFileNames: 'main.js',
        assetFileNames: '[name].[ext]',
        format: 'es'
      }
    }
  },
  
  esbuild: {
    drop: ['console', 'debugger'] // Supprime console.log en prod
  }
})