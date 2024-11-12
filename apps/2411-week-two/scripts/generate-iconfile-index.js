// @ts-check

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

function toPascalCase(fileName) {
  return fileName
    .replace(/-([a-z])/g, (g) => g[1].toUpperCase())
    .replace(/^\w/, (c) => c.toUpperCase())
    .replace(/\.svg$/i, '');
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsIconDir = ['src/assets/icons/basic', 'src/assets/icons/social'];
assetsIconDir.forEach((dir) => {
  const iconsDir = path.resolve(__dirname, `../${dir}`);
  const indexPath = path.resolve(iconsDir, 'index.ts');

  const files = fs
    .readdirSync(iconsDir)
    .filter((file) => file.endsWith('.svg'));

  const imports = files
    .map((file) => {
      const componentName = `SVGIcon${toPascalCase(file)}`;
      return `import ${componentName}  from './${file}?react';`;
    })
    .join('\n');

  const exports = `export {\n${files
    .map((file) => `  SVGIcon${toPascalCase(file)},`)
    .join('\n')}\n};`;

  const indexContent = `${imports}\n\n${exports}\n`;

  fs.writeFileSync(indexPath, indexContent, 'utf8');
  console.log(
    'icon 파일을 React component 로 export 하는 index.ts 파일이 생성되었습니다.'
  );
});
