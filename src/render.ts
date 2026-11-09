import { copyFileSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const Root = join(import.meta.dir, '..');
const Chrome = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const IcoSizes = [16, 32, 48];

type Job = { source: string; size: number; pngs: [string, number][]; ico?: string };

export const Jobs: Job[] = [
  { source: 'brand/irwin/icon-ia.svg', size: 512, pngs: [['brand/irwin/icon-ia-512.png', 512]], ico: 'brand/irwin/icon-ia.ico' },
  { source: 'brand/irwin/icon-ia-square.svg', size: 512, pngs: [['brand/irwin/icon-ia-180.png', 180]] },
  {
    source: 'brand/irwin/icon-i.svg',
    size: 512,
    pngs: [
      ['brand/irwin/icon-i-512.png', 512],
      ['brand/irwin/icon-i-180.png', 180],
    ],
    ico: 'brand/irwin/icon-i.ico',
  },
  { source: 'brand/chatbot/icon.svg', size: 512, pngs: [['brand/chatbot/icon-512.png', 512]], ico: 'brand/chatbot/favicon.ico' },
  { source: 'brand/chatbot/icon-square.svg', size: 512, pngs: [['brand/chatbot/apple-touch-icon.png', 180]] },
  {
    source: 'brand/chatbot/avatar.svg',
    size: 1024,
    pngs: [1024, 640, 512, 256, 120].map((size): [string, number] => [`brand/chatbot/avatar-${size}.png`, size]),
  },
];

function run(command: string[]) {
  const result = Bun.spawnSync(command, { stdout: 'ignore', stderr: 'pipe' });
  if (result.exitCode !== 0) throw new Error(`${command[0]} failed: ${result.stderr.toString()}`);
}

function screenshot(source: string, size: number, out: string, work: string) {
  const page = join(work, 'page.html');
  writeFileSync(
    page,
    `<!doctype html><html><head><style>html,body{margin:0;background:transparent}img{display:block;width:${size}px;height:${size}px}</style></head><body><img src="file://${join(Root, source)}"></body></html>`,
  );
  run([
    Chrome,
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--default-background-color=00000000',
    `--window-size=${size},${size}`,
    `--screenshot=${out}`,
    `file://${page}`,
  ]);
}

function resize(from: string, size: number, to: string) {
  run(['sips', '-z', String(size), String(size), from, '--out', to]);
}

function ico(pngs: string[], out: string) {
  const images = pngs.map((path) => new Uint8Array(readFileSync(path)));
  const header = new DataView(new ArrayBuffer(6 + 16 * images.length));
  header.setUint16(2, 1, true);
  header.setUint16(4, images.length, true);
  let offset = 6 + 16 * images.length;
  images.forEach((png, index) => {
    const size = new DataView(png.buffer).getUint32(16);
    const at = 6 + 16 * index;
    header.setUint8(at, size >= 256 ? 0 : size);
    header.setUint8(at + 1, size >= 256 ? 0 : size);
    header.setUint16(at + 4, 1, true);
    header.setUint16(at + 6, 32, true);
    header.setUint32(at + 8, png.length, true);
    header.setUint32(at + 12, offset, true);
    offset += png.length;
  });
  writeFileSync(out, Buffer.concat([new Uint8Array(header.buffer), ...images]));
}

if (import.meta.main) {
  const work = mkdtempSync(join(tmpdir(), 'irwin-ui-'));
  try {
    for (const job of Jobs) {
      const full = join(work, 'full.png');
      screenshot(job.source, job.size, full, work);
      for (const [path, size] of job.pngs) {
        if (size === job.size) copyFileSync(full, join(Root, path));
        else resize(full, size, join(Root, path));
        console.log(`wrote ${path}`);
      }
      if (job.ico) {
        const sizes = IcoSizes.map((size) => {
          const path = join(work, `ico-${size}.png`);
          resize(full, size, path);
          return path;
        });
        ico(sizes, join(Root, job.ico));
        console.log(`wrote ${job.ico}`);
      }
    }
  } finally {
    rmSync(work, { recursive: true, force: true });
  }
}
