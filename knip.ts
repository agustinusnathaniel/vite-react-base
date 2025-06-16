import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/main.tsx', 'env.ts'],
  project: ['src/**/*.{ts,tsx,js,jsx,css,scss}'],
  ignore: ['src/**/*.gen.ts'],
  ignoreBinaries: ['changelogithub'],
};

export default config;
