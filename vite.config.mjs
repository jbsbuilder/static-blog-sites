import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  root: resolve('src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
};