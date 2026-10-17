// Renderuje wszystkie filmiki naraz:  npm run render
// Pojedynczy:  npx remotion render post-2-cennik out/post-2-cennik.mp4
import { spawnSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { KARTY } from './src/karty.mjs';

const OUT = 'out';
mkdirSync(OUT, { recursive: true });

for (const { id } of KARTY) {
  console.log(`\n=== ${id} ===`);
  const wynik = spawnSync(
    'npx',
    ['remotion', 'render', id, `${OUT}/${id}.mp4`, '--log=error'],
    { stdio: 'inherit', shell: true }
  );
  if (wynik.status !== 0) {
    console.error(`BLAD przy ${id} — przerywam.`);
    process.exit(wynik.status ?? 1);
  }
}
console.log(`\nGotowe: ${KARTY.length} filmikow w marketing/video/${OUT}/`);
