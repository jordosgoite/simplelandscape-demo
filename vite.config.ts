import react from '@vitejs/plugin-react';
import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const viteConfig = defineViteConfig({
  plugins: [react(), viteTsconfigPaths()],
});

const vitestConfig = defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.js'],
  },
});
export default mergeConfig(viteConfig, vitestConfig);

/* import reactRefresh from '@vitejs/plugin-react-refresh';
import react from '@vitejs/plugin-react-swc';
import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';
import { PWAConfig } from './src/lib/config';

const viteConfig = defineViteConfig({
  plugins: [react(), reactRefresh(), tsconfigPaths(), VitePWA(PWAConfig)],
});

const vitestConfig = defineConfig({
  
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
export default mergeConfig(viteConfig, vitestConfig); */
