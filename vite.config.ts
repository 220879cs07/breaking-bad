import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: 'api', replacement: path.resolve(__dirname, 'src/api') },
      { find: 'app', replacement: path.resolve(__dirname, 'src/app') },
      { find: 'assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: 'pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: 'shared', replacement: path.resolve(__dirname, 'src/shared') },
    ],
  },
});
