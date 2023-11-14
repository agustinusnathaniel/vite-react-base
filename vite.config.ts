/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react-swc';
import million from 'million/compiler';
import tsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const pwaOptions: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  base: '/',
  manifest: {
    name: 'Vite React App Template',
    short_name: 'vite-react-ts',
    theme_color: '#FFFFFF',
    lang: 'en',
    start_url: '/',
    background_color: '#FFFFFF',
    dir: 'ltr',
    display: 'standalone',
    orientation: 'portrait',
    prefer_related_applications: false,
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    million.vite({ auto: true }),
    react(),
    checker({
      typescript: true,
      eslint: { lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"' },
    }),
    tsConfigPaths(),
    VitePWA(pwaOptions),
  ],
  server: {
    open: true,
  },
});
