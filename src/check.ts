import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { brand } from './brand';
import { Jobs } from './render';

const Root = join(import.meta.dir, '..');
const failures: string[] = [];
const outputs = brand();

for (const { path, text } of outputs) {
  const target = join(Root, path);
  if (!existsSync(target) || readFileSync(target, 'utf8') !== text) failures.push(`${path} is stale, run bun run build`);
}

const favo = outputs.find((output) => output.path === 'brand/favo/logo-dark.svg')!.text;
for (const x of ['113.18', '211.18', '340.71', '461.77']) {
  if (!favo.includes(`translate(${x} 0)`)) failures.push(`the spacing table no longer sets Favo's logo as drawn by hand: nothing starts at ${x}`);
}

for (const job of Jobs) {
  for (const path of [...job.pngs.map(([png]) => png), ...(job.ico ? [job.ico] : [])]) {
    const target = join(Root, path);
    if (!existsSync(target) || statSync(target).size === 0) failures.push(`${path} is missing, run bun run render`);
  }
}

if (failures.length) {
  for (const failure of failures) console.error(`fail ${failure}`);
  process.exit(1);
}
console.log(`ok   ${outputs.length} generated files are current`);
console.log("ok   the spacing table sets Favo's logo as drawn by hand");
console.log('All checks passed.');
