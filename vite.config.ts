import { defineConfig } from "vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({

	plugins: [
		react(),
		createSvgIconsPlugin({
			iconDirs: [path.resolve(process.cwd(), "src/shared/assets/svgs/sprites")],
			symbolId: "icon-[name]",
		}),tailwindcss(), tsconfigPaths()
	],

});
