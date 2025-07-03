import { defineConfig } from "vite";
import svgSprite from '@pivanov/vite-plugin-svg-sprite';
import { resolve } from "path";
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({

	plugins: [
		react(),
		svgSprite({
			iconDirs: [resolve(__dirname, 'src/shared/assets/svgs')],
            symbolId: 'icon-[name]',
           inject: 'body-last',                   
		  }),tailwindcss(), tsconfigPaths()
	],

});
