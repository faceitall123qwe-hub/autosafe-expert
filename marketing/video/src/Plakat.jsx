import { AbsoluteFill } from 'remotion';
import { MOTYWY, STRONA, TELEFON, TOKENY } from './karty.mjs';
import { Tlo } from './Tlo';
import { FilmGrain } from './efekty/FilmGrain';
import { Vignette } from './efekty/Vignette';

const S = 1080;
const MARGINES = 88;

const motywKarty = (nazwa) => MOTYWY[nazwa] ?? MOTYWY.granat;

// Naglowek, cena i punkty konkuruja o te sama wysokosc. Karta z cena traci na nia
// ok. 180 px, wiec wszystko inne musi zejsc — inaczej stopka wchodzi na punkty.
const rozmiarNaglowka = (naglowek, punkty, cena) => {
  if (naglowek.length > 2) return cena ? 60 : 68;
  if (cena) return 76;
  return punkty.length >= 6 ? 76 : 88;
};

const rozmiarCeny = (punkty) => (punkty.length >= 4 ? 116 : 132);

const rozmiarPunktu = (punkty, cena) => {
  if (cena) return 36;
  return punkty.length >= 6 ? 36 : 39;
};

const Haczyk = ({ kolor }) => (
  <svg width="44" height="34" viewBox="-4 -20 44 34" style={{ flexShrink: 0, marginTop: 7 }}>
    <polyline
      points="0,0 11,12 32,-14"
      fill="none"
      stroke={kolor}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Plakat = ({ eyebrow, naglowek, cena, cenaOpis, punkty = [], stopka, motyw }) => {
  const m = motywKarty(motyw);
  const naglowekPx = rozmiarNaglowka(naglowek, punkty, cena);
  const punktPx = rozmiarPunktu(punkty, cena);

  // Stopka karty bywa dluzsza niz sam kontakt (dopiski typu "Ceny netto").
  // Kontakt stoi zawsze, dopisek tylko jesli jest.
  const dopisek = stopka
    .split('·')
    .map((cz) => cz.trim())
    .filter((cz) => cz && !cz.includes(TELEFON) && !cz.includes(STRONA))
    .join(' · ');

  return (
    <AbsoluteFill style={{ backgroundColor: m.tlo }}>
      <Tlo m={m}>
        <AbsoluteFill
          style={{
            padding: MARGINES,
            paddingTop: MARGINES + 14,
            display: 'flex',
            flexDirection: 'column',
            fontFamily: TOKENY.SANS,
          }}
        >
          <div style={{ width: 120, height: 8, backgroundColor: m.akcent, marginBottom: 30 }} />

          {eyebrow ? (
            <div
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                letterSpacing: 3,
                color: m.akcent,
                marginBottom: 24,
              }}
            >
              {eyebrow.toUpperCase()}
            </div>
          ) : null}

          <div
            style={{
              fontFamily: TOKENY.SERIF,
              fontWeight: 'bold',
              fontSize: naglowekPx,
              lineHeight: 1.14,
              color: m.tekst,
              letterSpacing: -0.5,
            }}
          >
            {naglowek.map((linia) => (
              <div key={linia}>{linia}</div>
            ))}
          </div>

          {cena ? (
            <div style={{ marginTop: 26 }}>
              <div style={{ fontSize: rozmiarCeny(punkty), fontWeight: 'bold', color: m.akcent, lineHeight: 1 }}>{cena}</div>
              {cenaOpis ? (
                <div style={{ fontSize: 32, color: m.szary, marginTop: 10 }}>{cenaOpis}</div>
              ) : null}
            </div>
          ) : null}

          <div
            style={{
              marginTop: cena ? 30 : 38,
              display: 'flex',
              flexDirection: 'column',
              gap: punkty.length >= 6 ? 20 : 24,
            }}
          >
            {punkty.map((p) => (
              <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
                <Haczyk kolor={m.akcent} />
                <div style={{ fontSize: punktPx, color: m.tekst, lineHeight: 1.26 }}>{p}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'auto', paddingTop: 34 }}>
            <div style={{ height: 2, backgroundColor: m.linia, marginBottom: 26 }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                gap: 24,
              }}
            >
              <div
                style={{
                  fontFamily: TOKENY.SERIF,
                  fontSize: 42,
                  fontWeight: 'bold',
                  color: m.tekst,
                  whiteSpace: 'nowrap',
                }}
              >
                AutoSafe Expert
              </div>
              <div style={{ fontSize: 34, fontWeight: 'bold', color: m.akcent, whiteSpace: 'nowrap' }}>
                {TELEFON}
              </div>
            </div>
            <div style={{ fontSize: 28, color: m.szary, marginTop: 10 }}>
              {dopisek ? `${dopisek} · ${STRONA}` : STRONA}
            </div>
          </div>
        </AbsoluteFill>
      </Tlo>

      <Vignette intensity={0.28} centerSize={64} />
      <FilmGrain opacity={0.03} animate={false} />
    </AbsoluteFill>
  );
};

export const SZEROKOSC_PLAKATU = S;
