import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import pkg from './package.json';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: pkg.name,
      fileName: 'index',
    },
  },
});
