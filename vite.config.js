// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/bookstore/', // lisää tämä ominaisuus
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  } 
});
