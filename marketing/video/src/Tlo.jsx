import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

// Wspolne tlo filmikow i plakatow: dryfujaca poswiata, ukosny pas w kolorze
// akcentu, pasek akcentu u gory. W filmie przesuwa sie przez caly czas trwania;
// przy plakacie (kompozycja jednoklatkowa) zatrzymuje sie na pozycji startowej.
export const Tlo = ({ m, children }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const t = durationInFrames > 1 ? frame / durationInFrames : 0;
  const poswiataX = interpolate(t, [0, 1], [-5, 45]);
  const poswiataY = interpolate(t, [0, 1], [25, -5]);

  return (
    <AbsoluteFill style={{ backgroundColor: m.tlo }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(880px 880px at ${poswiataX}% ${poswiataY}%, ${m.tlo2} 0%, transparent 68%)`,
        }}
      />
      <AbsoluteFill style={{ overflow: 'hidden', opacity: 0.1 }}>
        <div
          style={{
            position: 'absolute',
            left: -300,
            top: 700,
            width: 2200,
            height: 130,
            backgroundColor: m.akcent,
            transform: `rotate(-21deg) translateX(${interpolate(t, [0, 1], [-120, 90])}px)`,
          }}
        />
      </AbsoluteFill>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 14, backgroundColor: m.akcent }} />
      {children}
    </AbsoluteFill>
  );
};
