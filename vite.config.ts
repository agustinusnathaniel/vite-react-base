import { ValidateEnv } from '@julr/vite-plugin-validate-env';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import type { PluginOption } from 'vite';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import type { VitePWAOptions } from 'vite-plugin-pwa';
import { VitePWA } from 'vite-plugin-pwa';
import tsConfigPaths from 'vite-tsconfig-paths';

const pwaOptions: Partial<VitePWAOptions> = {
  // TODO: enable if you want to enable PWA service worker
  disable: true,
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
    prefer_related_applications: false,
  },
  pwaAssets: {
    disabled: false,
    config: true,
  },
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isCheckDisabled = mode === 'production' || !!process.env.VITEST;

  return {
    plugins: [
      ValidateEnv(),
      tanstackRouter({ autoCodeSplitting: true }),
      viteReact(),
      ...(!isCheckDisabled
        ? [
            checker({
              typescript: true,
            }),
          ]
        : []),
      tsConfigPaths(),
      VitePWA(pwaOptions),
      visualizer({ template: 'sunburst' }) as unknown as PluginOption,
    ],
    server: {
      open: true,
    },
  };
});
