import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
  plugins: [preact()],
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/main.tsx',
      name: 'ClerkChat',
      formats: ['umd', 'es'],
      fileName: (format) => `widget${format === 'es' ? '.esm' : ''}.js`
    },
    copyPublicDir: false
  }
})
