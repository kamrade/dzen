import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, ''),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, './node_modules/bootstrap'),
      '~styles': path.resolve(__dirname, './src/styles'),
      '~hooks': path.resolve(__dirname, './src/hooks'),
      "~": path.resolve(__dirname, "./src/"),
    }
  },
  server: {
    port: 8080
  },
  plugins: [react()],
})
