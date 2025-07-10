import fs from 'node:fs';
import path, { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import svgSprite from '@pivanov/vite-plugin-svg-sprite';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

const keyPath = process.env.VITE_PEM_KEY_PATH || 'localhost+2-key.pem';
const certPath = process.env.VITE_PEM_CERT_PATH || 'localhost+2.pem';

const resolvedKeyPath = path.resolve(dirname, keyPath);
const resolvedCertPath = path.resolve(dirname, certPath);

const isLocal = !process.env.CI && process.env.CLOUDFLARE_ENV !== 'true';

const https =
  isLocal && fs.existsSync(resolvedKeyPath) && fs.existsSync(resolvedCertPath)
    ? {
        key: fs.readFileSync(resolvedKeyPath),
        cert: fs.readFileSync(resolvedCertPath),
      }
    : undefined;

export default defineConfig({
  server: {
    https,
  },
  plugins: [
    react(),
    svgSprite({
      iconDirs: [resolve(dirname, 'src/shared/assets/svgs')],
      symbolId: 'icon-[name]',
      inject: 'body-last',
    }),
    tailwindcss(),
    tsconfigPaths(),
  ],
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
