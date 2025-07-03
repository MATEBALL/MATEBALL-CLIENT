import { resolve } from 'node:path';
import svgSprite from '@pivanov/vite-plugin-svg-sprite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [
		react(),
		svgSprite({
			iconDirs: [resolve(__dirname, 'src/shared/assets/svgs')],
			symbolId: 'icon-[name]',
			inject: 'body-last',
		}),
		tailwindcss(),
		tsconfigPaths(),
	],
});
