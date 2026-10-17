import { Composition } from 'remotion';
import { KARTY, REKLAMY } from './karty.mjs';
import { Karta, dlugoscKarty } from './Karta.jsx';
import { Plakat } from './Plakat.jsx';
import { Reklama } from './Reklama.jsx';
import { Rolka, DLUGOSC_ROLKI, WYMIARY_ROLKI } from './Rolka.jsx';

// Kwadrat 1080x1080 — format postow na FB i IG.
// Kazda karta daje dwie kompozycje: filmik i jednoklatkowy plakat (statyczna
// grafika do posta). Obie czytaja te sama tresc z karty.mjs.
export const RemotionRoot = () => (
  <>
    {KARTY.map((karta) => {
      const { id, ...props } = karta;
      return (
        <Composition
          key={id}
          id={id}
          component={Karta}
          durationInFrames={dlugoscKarty(karta)}
          fps={30}
          width={1080}
          height={1080}
          defaultProps={props}
        />
      );
    })}

    {KARTY.map((karta) => {
      const { id, ...props } = karta;
      return (
        <Composition
          key={`plakat-${id}`}
          id={`plakat-${id}`}
          component={Plakat}
          durationInFrames={1}
          fps={30}
          width={1080}
          height={1080}
          defaultProps={props}
        />
      );
    })}

    {REKLAMY.map((reklama) => {
      const { id, ...props } = reklama;
      return (
        <Composition
          key={id}
          id={id}
          component={Reklama}
          durationInFrames={1}
          fps={30}
          width={1080}
          height={1080}
          defaultProps={props}
        />
      );
    })}

    <Composition
      id="rolka-ig"
      component={Rolka}
      durationInFrames={DLUGOSC_ROLKI}
      fps={30}
      width={WYMIARY_ROLKI.width}
      height={WYMIARY_ROLKI.height}
    />
  </>
);
