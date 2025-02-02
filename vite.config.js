// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// Vite config export
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    fs: {
      strict: false, // In case you get errors about filesystem restrictions
    },
  },
  css: {
    postcss: {
      config: {
        path: './tailwind.config.js', // Specify the path to your tailwind config
      },
    },
  },
});
