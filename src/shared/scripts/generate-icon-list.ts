import { readdirSync, writeFileSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ICON_DIR = join(__dirname, '../assets/svgs');
const OUTPUT_PATH = join(__dirname, '../constants/icon-list.ts');

const files = readdirSync(ICON_DIR).filter((file) => file.endsWith('.svg'));
const iconNames = files.map((file) => basename(file, '.svg'));

const content = `
export const iconNames = [
  ${iconNames.map((name) => `'${name}'`).join(',\n  ')}
] as const;
 
export type IconName = (typeof iconNames)[number];
`;

writeFileSync(OUTPUT_PATH, content);
console.log(`✅ icon-list.ts generated with ${iconNames.length} icons.`);
