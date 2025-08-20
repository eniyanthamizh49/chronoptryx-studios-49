import { defineConfig } from 'vite'

// Minimal Vite config for plain HTML/CSS/JS
export default defineConfig({
  // No plugins needed for plain HTML
  plugins: [],
  
  // Build configuration
  build: {
    // Output to dist folder
    outDir: 'dist',
    
    // Don't minify for easier debugging
    minify: false,
    
    // Generate sourcemaps
    sourcemap: true,
    
    // Copy public folder assets
    copyPublicDir: true,
    
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  
  // Development server settings
  server: {
    port: 3000,
    open: true
  },
  
  // Base public path
  base: './'
})