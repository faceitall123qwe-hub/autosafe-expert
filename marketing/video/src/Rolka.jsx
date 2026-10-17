import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { TransitionSeries, springTiming } from '@remotion/transitions';
import { zoomBlur } from './przejscia/zoom-blur';
import { lightLeak } from './przejscia/light-leak';
import { wipe } from '@remotion/transitions/wipe';
import { MOTYWY, ROLKA, STRONA, TELEFON, TOKENY } from './karty.mjs';
import { FilmGrain } from './efekty/FilmGrain';
import { Vignette } from './efekty/Vignette';

const W = 1080;
const H = 1920;
const MARGINES = 96;

// Rolka oddycha inaczej niz kwadrat: kazda scena to jedna mysl, wiec moze trwac
// dluzej, ale musi miesc sie w jednym spojrzeniu.
const S_HAK = 110;
const S_ZAUFANIE = 130;
const S_KROKI = 190;
const S_CENA = 100;
const S_CTA = 105;
const PRZEJSCIE = 18;

export const DLUGOSC_ROLKI =
  S_HAK + S_ZAUFANIE + S_KROKI + S_CENA + S_CTA - 4 * PRZEJSCIE;

const CIEMNY = MOTYWY.grafit;
const JASNY = MOTYWY.piasek;

const wejscie = (frame, fps, opoznienie, przesuniecie = 40) => {
  const p = spring({ frame: frame - opoznienie, fps, config: { damping: 200, mass: 0.7 } });
  return { opacity: p, transform: `translateY(${interpolate(p, [0, 1], [przesuniecie, 0])}px)` };
};

// Tlo rolki — ta sama poswiata co w kwadratach, ale rozciagnieta na pion
// i z powolnym najazdem, zeby kadr nie stal w miejscu przez 3-6 sekund.
const TloRolki = ({ m, children }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const t = frame / durationInFrames;

  return (
    <AbsoluteFill style={{ backgroundColor: m.tlo, overflow: 'hidden' }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(1100px 1100px at ${interpolate(t, [0, 1], [10, 70])}% ${interpolate(
            t,
            [0, 1],
            [20, 80]
          )}%, ${m.tlo2} 0%, transparent 70%)`,
          transform: `scale(${interpolate(t, [0, 1], [1, 1.08])})`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: -400,
          top: 1250,
          width: 2400,
          height: 190,
          backgroundColor: m.akcent,
          opacity: 0.09,
          transform: `rotate(-24deg) translateX(${interpolate(t, [0, 1], [-140, 110])}px)`,
        }}
      />
      {children}
    </AbsoluteFill>
  );
};

const Ramka = ({ children, m, justify = 'center' }) => (
  <TloRolki m={m}>
    <AbsoluteFill
      style={{
        padding: MARGINES,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: justify,
        fontFamily: TOKENY.SANS,
      }}
    >
      {children}
    </AbsoluteFill>
  </TloRolki>
);

const Kreska = ({ m, opoznienie = 0, szerokosc = 150 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - opoznienie, fps, config: { damping: 200 } });
  return (
    <div
      style={{
        width: szerokosc,
        height: 9,
        backgroundColor: m.akcent,
        transform: `scaleX(${p})`,
        transformOrigin: 'left',
      }}
    />
  );
};

// SCENA 1 — hak slowo po slowie. Pierwsze 2 sekundy decyduja, czy ktos zostanie.
const ScenaHak = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const m = CIEMNY;

  return (
    <Ramka m={m}>
      <Kreska m={m} />
      <div style={{ height: 44 }} />
      {ROLKA.hak.map((slowo, i) => (
        <div key={slowo} style={{ overflow: 'hidden', paddingBottom: 10 }}>
          <div
            style={{
              ...wejscie(frame, fps, 6 + i * 9, 150),
              fontFamily: TOKENY.SERIF,
              fontWeight: 'bold',
              fontSize: 142,
              lineHeight: 1.04,
              letterSpacing: -2,
              color: m.tekst,
            }}
          >
            {slowo}
          </div>
        </div>
      ))}
      <div
        style={{
          ...wejscie(frame, fps, 34, 36),
          marginTop: 40,
          fontSize: 48,
          lineHeight: 1.35,
          color: m.szary,
          maxWidth: 820,
        }}
      >
        {ROLKA.podhak}
      </div>
    </Ramka>
  );
};

// SCENA 2 — kto to mowi. Bez tego cena i kroki sa twierdzeniami bez pokrycia.
const ScenaZaufanie = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const m = CIEMNY;

  return (
    <Ramka m={m}>
      <div
        style={{
          ...wejscie(frame, fps, 0, 30),
          fontSize: 34,
          fontWeight: 'bold',
          letterSpacing: 3,
          color: m.akcent,
          marginBottom: 48,
        }}
      >
        NIEZALEŻNY BIEGŁY MOTORYZACYJNY
      </div>
      {ROLKA.zaufanie.map((poz, i) => (
        <div key={poz} style={{ ...wejscie(frame, fps, 10 + i * 15, 44), marginBottom: 38 }}>
          <div
            style={{
              fontFamily: TOKENY.SERIF,
              fontWeight: 'bold',
              fontSize: 62,
              lineHeight: 1.2,
              color: m.tekst,
            }}
          >
            {poz}
          </div>
          <div style={{ width: 90, height: 4, backgroundColor: m.akcent, marginTop: 18, opacity: 0.6 }} />
        </div>
      ))}
    </Ramka>
  );
};

// SCENA 3 — jedyna jasna scena w rolce. Zmiana jasnosci w polowie trzyma uwage
// lepiej niz kolejne przejscie na tym samym tle.
const ScenaKroki = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const m = JASNY;

  return (
    <Ramka m={m}>
      <div style={{ ...wejscie(frame, fps, 0, 30), marginBottom: 54 }}>
        <Kreska m={m} />
        <div
          style={{
            fontFamily: TOKENY.SERIF,
            fontWeight: 'bold',
            fontSize: 86,
            color: m.tekst,
            marginTop: 26,
          }}
        >
          {ROLKA.krokiTytul}
        </div>
      </div>

      {ROLKA.kroki.map((k, i) => (
        <div
          key={k.nr}
          style={{
            ...wejscie(frame, fps, 14 + i * 22, 40),
            display: 'flex',
            gap: 30,
            marginBottom: 42,
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              fontFamily: TOKENY.SERIF,
              fontWeight: 'bold',
              fontSize: 72,
              lineHeight: 1,
              color: m.akcent,
              minWidth: 60,
            }}
          >
            {k.nr}
          </div>
          <div>
            <div style={{ fontSize: 50, fontWeight: 'bold', color: m.tekst, lineHeight: 1.2 }}>{k.tytul}</div>
            <div style={{ fontSize: 36, color: m.szary, marginTop: 10, lineHeight: 1.3 }}>{k.opis}</div>
          </div>
        </div>
      ))}
    </Ramka>
  );
};

// SCENA 4 — cena doliczana w gore. Liczba, ktora rosnie, zatrzymuje kciuk.
const ScenaCena = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const m = CIEMNY;
  const docelowa = Number(ROLKA.cenaOd);
  const licznik = Math.round(
    interpolate(frame, [6, 34], [0, docelowa], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
  );

  return (
    <Ramka m={m}>
      <div style={{ ...wejscie(frame, fps, 0, 28), fontSize: 46, color: m.szary, marginBottom: 14 }}>
        Sprawdzenie auta przed zakupem
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 20 }}>
        <div style={{ fontSize: 56, fontWeight: 'bold', color: m.tekst }}>od</div>
        <div
          style={{
            fontSize: 220,
            fontWeight: 'bold',
            color: m.akcent,
            lineHeight: 1,
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {licznik}
        </div>
      </div>
      <div style={{ ...wejscie(frame, fps, 32, 26), fontSize: 46, color: m.tekst, marginTop: 10 }}>
        {ROLKA.cenaPodpis}
      </div>
      <div style={{ ...wejscie(frame, fps, 40, 22), fontSize: 34, color: m.szary, marginTop: 30, maxWidth: 820 }}>
        {ROLKA.cenaNota}
      </div>
    </Ramka>
  );
};

// SCENA 5 — domkniecie. Numer jest najwiekszym elementem kadru.
const ScenaCta = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const m = CIEMNY;

  return (
    <Ramka m={m}>
      <div
        style={{
          ...wejscie(frame, fps, 0, 36),
          fontFamily: TOKENY.SERIF,
          fontWeight: 'bold',
          fontSize: 96,
          color: m.tekst,
          lineHeight: 1.1,
        }}
      >
        {ROLKA.ctaTytul}
      </div>
      <div style={{ marginTop: 34, marginBottom: 34 }}>
        <Kreska m={m} opoznienie={8} szerokosc={190} />
      </div>
      <div
        style={{
          ...wejscie(frame, fps, 14, 30),
          fontSize: 82,
          fontWeight: 'bold',
          color: m.akcent,
          lineHeight: 1.1,
        }}
      >
        {TELEFON}
      </div>
      <div style={{ ...wejscie(frame, fps, 20, 26), fontSize: 46, color: m.tekst, marginTop: 16 }}>{STRONA}</div>
      <div style={{ ...wejscie(frame, fps, 26, 22), fontSize: 34, color: m.szary, marginTop: 34 }}>
        {ROLKA.ctaPodpis}
      </div>
    </Ramka>
  );
};

// Pasek postepu u gory — w pionowym formacie mowi widzowi, ile zostalo,
// co wyraznie zmniejsza porzucanie w polowie.
const PasekPostepu = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 8, backgroundColor: '#ffffff18' }}>
      <div
        style={{
          height: '100%',
          width: `${interpolate(frame, [0, durationInFrames], [0, 100])}%`,
          backgroundColor: CIEMNY.akcent,
        }}
      />
    </div>
  );
};

export const Rolka = () => {
  const timing = springTiming({ config: { damping: 200 }, durationInFrames: PRZEJSCIE });

  return (
    <AbsoluteFill style={{ backgroundColor: CIEMNY.tlo }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={S_HAK}>
          <ScenaHak />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={zoomBlur()} timing={timing} />

        <TransitionSeries.Sequence durationInFrames={S_ZAUFANIE}>
          <ScenaZaufanie />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={wipe({ direction: 'from-bottom' })} timing={timing} />

        <TransitionSeries.Sequence durationInFrames={S_KROKI}>
          <ScenaKroki />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={wipe({ direction: 'from-top' })} timing={timing} />

        <TransitionSeries.Sequence durationInFrames={S_CENA}>
          <ScenaCena />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={lightLeak()} timing={timing} />

        <TransitionSeries.Sequence durationInFrames={S_CTA}>
          <ScenaCta />
        </TransitionSeries.Sequence>
      </TransitionSeries>

      <Vignette intensity={0.3} centerSize={60} />
      <FilmGrain opacity={0.035} />
      <PasekPostepu />
    </AbsoluteFill>
  );
};

export const WYMIARY_ROLKI = { width: W, height: H };
