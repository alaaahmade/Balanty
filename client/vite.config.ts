/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
    ],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Replace with your backend server URL
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
