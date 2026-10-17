import { Config } from '@remotion/cli/config';

// PNG, nie JPEG: klatki to plaskie tla z ostrym tekstem — kompresja JPEG przed
// enkoderem zostawia obwodki wokol liter. PNG jest bezstratny, a przy 8-sekundowym
// filmie koszt czasu renderu jest bez znaczenia.
Config.setVideoImageFormat('png');
Config.setCodec('h264');
// CRF 14 zamiast domyslnego 18 — grafika wektorowa wymaga wyzszego bitrate niz
// material z kamery, bo nie ma szumu, ktory maskowalby artefakty.
Config.setCrf(14);
Config.setEntryPoint('./src/index.jsx');
