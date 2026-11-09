import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { brand } from './brand';

const Root = join(import.meta.dir, '..');

for (const { path, text } of brand()) {
  const target = join(Root, path);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, text);
  console.log(`wrote ${path}`);
}
