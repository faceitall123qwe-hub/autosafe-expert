import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { TransitionSeries, springTiming } from '@remotion/transitions';
import { slide } from '@remotion/transitions/slide';
import { wipe } from '@remotion/transitions/wipe';
import { flip } from '@remotion/transitions/flip';
// Przejscia i efekty z claude-code-video-toolkit (MIT) — patrz przejscia/POCHODZENIE.md.
// Dostepne sa tez glitch i rgbSplit; nieuzywane swiadomie — zaklocenie obrazu
// podwaza wiarygodnosc uslugi opartej na zaufaniu do eksperta.
import { zoomBlur } from './przejscia/zoom-blur';
import { lightLeak } from './przejscia/light-leak';
import { pixelate } from './przejscia/pixelate';
import { checkerboard } from './przejscia/checkerboard';
import { clockWipe } from './przejscia/clock-wipe';
import { FilmGrain } from './efekty/FilmGrain';
import { Vignette } from './efekty/Vignette';
import { Tlo } from './Tlo';
import { MOTYWY, STRONA, TELEFON, TOKENY } from './karty.mjs';

const MARGINES = 88;
// Tempo. Punkt to srednio 6 slow, czyli ok. 1,8 s czytania — stad odstep 24 klatek
// i dluzsze przytrzymanie po ostatnim punkcie. Film urosl z ~8 do ~12 s, ale
// przy 8 s nie dalo sie przeczytac cennika do konca.
const HOOK = 80;
const CTA = 85;
const PRZEJSCIE = 20;
const ODSTEP_PUNKTU = 24;
const PRZYTRZYMANIE = 90;

const startPunktow = (cena) => (cena ? 56 : 26);
const dlugoscTresci = (k) =>
  startPunktow(k.cena) + k.punkty.length * ODSTEP_PUNKTU + PRZYTRZYMANIE;

// Sceny zachodza na siebie o czas przejscia, wiec trzeba go odjac.
export const dlugoscKarty = (k) => HOOK + dlugoscTresci(k) + CTA - 2 * PRZEJSCIE;

const motywKarty = (nazwa) => MOTYWY[nazwa] ?? MOTYWY.granat;

const wejscie = (frame, fps, opoznienie, przesuniecie = 28) => {
  const p = spring({ frame: frame - opoznienie, fps, config: { damping: 200, mass: 0.6 } });
  return { opacity: p, transform: `translateY(${interpolate(p, [0, 1], [przesuniecie, 0])}px)` };
};

const Ramka = ({ children }) => (
  <AbsoluteFill
    style={{
      padding: MARGINES,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontFamily: TOKENY.SANS,
    }}
  >
    {children}
  </AbsoluteFill>
);

// SCENA 1 — hak: sam naglowek, duzo powietrza, zero szczegolow.
const ScenaHook = ({ eyebrow, naglowek, m }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const kreska = spring({ frame: frame - 2, fps, config: { damping: 200 } });

  return (
    <Tlo m={m}>
      <Ramka>
        <div
          style={{
            width: 120,
            height: 8,
            backgroundColor: m.akcent,
            marginBottom: 34,
            transform: `scaleX(${kreska})`,
            transformOrigin: 'left',
          }}
        />
        {eyebrow ? (
          <div
            style={{
              ...wejscie(frame, fps, 8),
              fontSize: 32,
              fontWeight: 'bold',
              letterSpacing: 3,
              color: m.akcent,
              marginBottom: 26,
            }}
          >
            {eyebrow.toUpperCase()}
          </div>
        ) : null}
        {naglowek.map((linia, i) => (
          // Maska: linia wyjezdza spod krawedzi zamiast pojawiac sie w miejscu.
          <div key={linia} style={{ overflow: 'hidden', paddingBottom: 6 }}>
            <div
              style={{
                ...wejscie(frame, fps, 14 + i * 7, 110),
                fontFamily: TOKENY.SERIF,
                fontWeight: 'bold',
                fontSize: naglowek.length > 3 ? 78 : 94,
                lineHeight: 1.12,
                color: m.tekst,
              }}
            >
              {linia}
            </div>
          </div>
        ))}
      </Ramka>
    </Tlo>
  );
};

const Haczyk = ({ opoznienie, kolor }) => {
  const frame = useCurrentFrame();
  const rysunek = interpolate(frame - opoznienie, [0, 17], [50, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <svg width="44" height="34" viewBox="-4 -20 44 34" style={{ flexShrink: 0, marginTop: 6 }}>
      <polyline
        points="0,0 11,12 32,-14"
        fill="none"
        stroke={kolor}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="50"
        strokeDashoffset={rysunek}
      />
    </svg>
  );
};

// SCENA 2 — tresc: cena i punkty wchodza po kolei.
const ScenaTresc = ({ naglowek, cena, cenaOpis, punkty, m }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const cenaSpring = spring({ frame: frame - 10, fps, config: { damping: 11, mass: 0.9 } });
  const start = startPunktow(cena);

  return (
    <Tlo m={m}>
      <Ramka>
        <div
          style={{
            ...wejscie(frame, fps, 0, 18),
            fontFamily: TOKENY.SERIF,
            fontSize: 44,
            fontWeight: 'bold',
            color: m.tekst,
            marginBottom: 30,
          }}
        >
          {naglowek.join(' ')}
        </div>

        {cena ? (
          <div style={{ marginBottom: 38 }}>
            <div
              style={{
                fontSize: 150,
                fontWeight: 'bold',
                color: m.akcent,
                lineHeight: 1,
                opacity: cenaSpring,
                transform: `scale(${interpolate(cenaSpring, [0, 1], [0.55, 1])})`,
                transformOrigin: 'left center',
              }}
            >
              {cena}
            </div>
            {cenaOpis ? (
              <div style={{ fontSize: 34, color: m.szary, marginTop: 10, opacity: cenaSpring }}>{cenaOpis}</div>
            ) : null}
          </div>
        ) : null}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {punkty.map((p, i) => (
            <div
              key={p}
              style={{
                ...wejscie(frame, fps, start + i * ODSTEP_PUNKTU, 22),
                display: 'flex',
                alignItems: 'flex-start',
                gap: 20,
              }}
            >
              <Haczyk opoznienie={start + i * ODSTEP_PUNKTU} kolor={m.akcent} />
              <div style={{ fontSize: 38, color: m.tekst, lineHeight: 1.25 }}>{p}</div>
            </div>
          ))}
        </div>
      </Ramka>
    </Tlo>
  );
};

// Ze stopki zostaje sam dopisek — telefon i adres dostaja wlasne, duze miejsce.
const dopisekZeStopki = (stopka) =>
  stopka
    .split('·')
    .map((cz) => cz.trim())
    .filter((cz) => cz && !cz.includes(TELEFON) && !cz.includes(STRONA))
    .join(' · ');

// SCENA 3 — domkniecie na kolorze motywu, nie akcentu: akcent w kazdej palecie
// jest odcieniem pomaranczu, wiec tlo z akcentu dawalo szesc identycznych koncowek.
const ScenaCta = ({ stopka, m }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const skala = spring({ frame, fps, config: { damping: 200 } });
  const dopisek = dopisekZeStopki(stopka);

  return (
    <Tlo m={m}>
      <AbsoluteFill
        style={{
          transform: `scale(${interpolate(skala, [0, 1], [1.06, 1])})`,
          padding: MARGINES,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          fontFamily: TOKENY.SANS,
        }}
      >
        <div
          style={{
            ...wejscie(frame, fps, 2, 34),
            fontFamily: TOKENY.SERIF,
            fontSize: 72,
            fontWeight: 'bold',
            color: m.tekst,
            lineHeight: 1.1,
          }}
        >
          AutoSafe Expert
        </div>
        <div
          style={{
            ...wejscie(frame, fps, 8, 26),
            width: 160,
            height: 8,
            backgroundColor: m.akcent,
            margin: '28px 0 34px',
          }}
        />
        <div
          style={{
            ...wejscie(frame, fps, 14, 30),
            fontSize: 92,
            fontWeight: 'bold',
            color: m.akcent,
            lineHeight: 1.05,
          }}
        >
          {TELEFON}
        </div>
        <div style={{ ...wejscie(frame, fps, 20, 24), fontSize: 44, color: m.tekst, marginTop: 14 }}>{STRONA}</div>
        {dopisek ? (
          <div style={{ ...wejscie(frame, fps, 26, 20), fontSize: 30, color: m.szary, marginTop: 26 }}>{dopisek}</div>
        ) : null}
      </AbsoluteFill>
    </Tlo>
  );
};

const przejsciePrezentacja = (nazwa, width, height) => {
  switch (nazwa) {
    case 'zoomBlur':
      return zoomBlur();
    case 'lightLeak':
      return lightLeak();
    case 'pixelate':
      return pixelate();
    case 'checkerboard':
      return checkerboard();
    case 'clockWipe':
      return clockWipe({ width, height });
    case 'slideUp':
      return slide({ direction: 'from-bottom' });
    case 'wipe':
      return wipe({ direction: 'from-left' });
    case 'wipeDown':
      return wipe({ direction: 'from-top' });
    case 'flip':
      return flip();
    default:
      return slide({ direction: 'from-right' });
  }
};

export const Karta = (props) => {
  const { przejscie, punkty = [], cena, stopka } = props;
  const { width, height } = useVideoConfig();
  const m = motywKarty(props.motyw);
  const prezentacja = przejsciePrezentacja(przejscie, width, height);
  const timing = springTiming({ config: { damping: 200 }, durationInFrames: PRZEJSCIE });

  return (
    // Podklad w kolorze motywu: przejscie flip odslania przestrzen za plaszczyzna,
    // ktora bez tego renderuje sie na czarno — na feedzie wyglada jak blad.
    <AbsoluteFill style={{ backgroundColor: m.tlo }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={HOOK}>
          <ScenaHook {...props} m={m} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition presentation={prezentacja} timing={timing} />

        <TransitionSeries.Sequence durationInFrames={dlugoscTresci({ punkty, cena })}>
          <ScenaTresc {...props} punkty={punkty} m={m} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition presentation={prezentacja} timing={timing} />

        <TransitionSeries.Sequence durationInFrames={CTA}>
          <ScenaCta stopka={stopka} m={m} />
        </TransitionSeries.Sequence>
      </TransitionSeries>

      {/* Nakladki na calosc, takze na przejscia — plaskie kolory bez tego
          wygladaja jak plansza z programu do prezentacji, nie jak film. */}
      <Vignette intensity={0.3} centerSize={62} />
      <FilmGrain opacity={0.035} />
    </AbsoluteFill>
  );
};
