import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                // Make the JS filename fixed
                entryFileNames: 'index.js',     // main JS file
                chunkFileNames: 'index.js',     // any additional chunks
                assetFileNames: '[name].[ext]'  // CSS and other assets
            }
        }
    }
})
