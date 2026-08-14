import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative base so the build works both at a domain root and under
  // https://jayj221.github.io/<repo>/ on GitHub Pages.
  base: './',
  plugins: [react()],
});
