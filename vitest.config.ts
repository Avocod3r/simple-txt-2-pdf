/// <reference types="vitest" />
import { defineConfig as defineVitestConfig } from 'vitest/config';
import { mergeConfig } from 'vite';
import viteConfig from './vite.config';

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setup.ts',
  },
});

export default mergeConfig(viteConfig, vitestConfig);
