import { AbsoluteFill } from 'remotion';
import { MOTYWY, STRONA, TELEFON, TOKENY } from './karty.mjs';
import { Tlo } from './Tlo';
import { FilmGrain } from './efekty/FilmGrain';
import { Vignette } from './efekty/Vignette';

const MARGINES = 88;
const PASEK_CTA = 184;

const motywKarty = (nazwa) => MOTYWY[nazwa] ?? MOTYWY.granat;

const Haczyk = ({ kolor }) => (
  <svg width="40" height="32" viewBox="-4 -19 40 32" style={{ flexShrink: 0, marginTop: 6 }}>
    <polyline
      points="0,0 10,11 29,-13"
      fill="none"
      stroke={kolor}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Reklama = ({ eyebrow, naglowek, cena, cenaOpis, punkty = [], cta, motyw }) => {
  const m = motywKarty(motyw);

  return (
    <AbsoluteFill style={{ backgroundColor: m.tlo }}>
      <Tlo m={m}>
        <AbsoluteFill
          style={{
            padding: MARGINES,
            paddingTop: MARGINES + 10,
            paddingBottom: PASEK_CTA + 48,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            fontFamily: TOKENY.SANS,
          }}
        >
          {eyebrow ? (
            <div
              style={{
                fontSize: 29,
                fontWeight: 'bold',
                letterSpacing: 2.5,
                color: m.akcent,
                marginBottom: 22,
              }}
            >
              {eyebrow.toUpperCase()}
            </div>
          ) : null}

          {/* Haczyk reklamy ma byc czytelny z miniatury na telefonie — stad
              wiekszy stopien niz w poscie organicznym. */}
          <div
            style={{
              fontFamily: TOKENY.SERIF,
              fontWeight: 'bold',
              fontSize: naglowek.length > 2 ? 78 : 92,
              lineHeight: 1.1,
              letterSpacing: -1,
              color: m.tekst,
            }}
          >
            {naglowek.map((linia) => (
              <div key={linia}>{linia}</div>
            ))}
          </div>

          {cena ? (
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 22, marginTop: 30 }}>
              <div style={{ fontSize: 118, fontWeight: 'bold', color: m.akcent, lineHeight: 1 }}>{cena}</div>
              {cenaOpis ? <div style={{ fontSize: 30, color: m.szary }}>{cenaOpis}</div> : null}
            </div>
          ) : null}

          <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {punkty.map((p) => (
              <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
                <Haczyk kolor={m.akcent} />
                <div style={{ fontSize: 35, color: m.tekst, lineHeight: 1.25 }}>{p}</div>
              </div>
            ))}
          </div>
        </AbsoluteFill>
      </Tlo>

      {/* Pasek wezwania. Pelna szerokosc w kolorze akcentu czytala sie jak ulotka
          rabatowa, wiec tlo jest tylko o stopien jasniejsze od reszty, a akcent
          zostaje na wloskowej linii i na numerze — mniej koloru, wiecej wagi. */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: PASEK_CTA,
          backgroundColor: m.tlo2,
          borderTop: `3px solid ${m.akcent}`,
          padding: `0 ${MARGINES}px`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          fontFamily: TOKENY.SANS,
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 'bold', letterSpacing: 1.5, color: m.szary }}>
          {cta.toUpperCase()}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: 24,
            marginTop: 14,
          }}
        >
          <div style={{ fontSize: 60, fontWeight: 'bold', color: m.akcent, lineHeight: 1 }}>{TELEFON}</div>
          <div style={{ fontSize: 30, color: m.szary, whiteSpace: 'nowrap' }}>{STRONA}</div>
        </div>
      </div>

      <Vignette intensity={0.26} centerSize={66} />
      <FilmGrain opacity={0.03} animate={false} />
    </AbsoluteFill>
  );
};
