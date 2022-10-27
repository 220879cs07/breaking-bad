import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      { find: 'api', replacement: path.resolve(__dirname, 'src/api') },
      { find: 'app', replacement: path.resolve(__dirname, 'src/app') },
      { find: 'assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: 'pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: 'shared', replacement: path.resolve(__dirname, 'src/shared') },
      { find: 'store', replacement: path.resolve(__dirname, 'src/store') },
    ],
  },
});
