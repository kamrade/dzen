import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, ''),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, './node_modules/bootstrap'),
      '~styles': path.resolve(__dirname, './src/styles'),
      '~helpers': path.resolve(__dirname, './src/helpers'),
      '~hooks': path.resolve(__dirname, './src/hooks'),
      '~data': path.resolve(__dirname, './src/data'),
      '~': path.resolve(__dirname, './src/'),
    },
  },
  server: {
    port: 1982,
  },
  plugins: [react()],
});
