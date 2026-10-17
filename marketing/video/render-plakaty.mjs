// Renderuje statyczne grafiki do postow:  npm run plakaty
// Wynik: marketing/assets/posty/*.png (1080x1080)
// Pojedynczy:  npx remotion still plakat-post-2-cennik ../assets/posty/post-2-cennik.png
import { spawnSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { KARTY } from './src/karty.mjs';

const OUT = '../assets/posty';
mkdirSync(OUT, { recursive: true });

for (const { id } of KARTY) {
  console.log(`\n=== ${id}.png ===`);
  const wynik = spawnSync('npx', ['remotion', 'still', `plakat-${id}`, `${OUT}/${id}.png`, '--log=error'], {
    stdio: 'inherit',
    shell: true,
  });
  if (wynik.status !== 0) {
    console.error(`BLAD przy ${id} — przerywam.`);
    process.exit(wynik.status ?? 1);
  }
}
console.log(`\nGotowe: ${KARTY.length} grafik w marketing/assets/posty/`);
