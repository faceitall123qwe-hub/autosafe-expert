// Wspolne zrodlo tresci kart: czytaja to kompozycje Remotion (obok) — zarowno
// filmiki (Karta.jsx), jak i statyczne plakaty (Plakat.jsx). Jedna zmiana tutaj
// przechodzi na grafike i na wideo.
// Plik musi lezec WEWNATRZ projektu Remotion: import spoza niego zmusza Watchpack
// do obserwowania katalogow az do korzenia dysku (EINVAL na C:pagefile.sys).
// Ceny musza sie zgadzac z src/data/content.ts.

export const TOKENY = {
  NAVY: '#0e2a54',
  INK: '#131820',
  ACCENT: '#ea580c',
  WHITE: '#ffffff',
  SZARY_CIEMNE_TLO: '#9fb3d1',
  SZARY_JASNE_TLO: '#5b6676',
  LINIA_CIEMNE_TLO: '#1d4273',
  LINIA_JASNE_TLO: '#e2e6ec',
  SANS: 'Arial, Helvetica, sans-serif',
  SERIF: 'Georgia, serif',
};

// Palety. Pomaranczowy akcent jest nicia wiazaca marke, ale tlo zmienia sie
// miedzy postami — dzieki temu seria nie wyglada jak szesc razy ta sama plansza.
export const MOTYWY = {
  granat: { tlo: '#0e2a54', tlo2: '#16386b', tekst: '#ffffff', szary: '#9fb3d1', akcent: '#ea580c', linia: '#1d4273' },
  noc:    { tlo: '#0f1115', tlo2: '#1b1f27', tekst: '#ffffff', szary: '#8b95a5', akcent: '#f97316', linia: '#2a313c' },
  rdza:   { tlo: '#8a2f10', tlo2: '#a93c17', tekst: '#ffffff', szary: '#fcd3ad', akcent: '#ffffff', linia: '#b4461d' },
  jasny:  { tlo: '#f7f5f2', tlo2: '#ebe7e0', tekst: '#131820', szary: '#5b6676', akcent: '#ea580c', linia: '#ded8cf' },
  stal:   { tlo: '#223b56', tlo2: '#2d4f71', tekst: '#ffffff', szary: '#a8c0d6', akcent: '#f59e0b', linia: '#33587d' },
  morze:  { tlo: '#0d3b3e', tlo2: '#145053', tekst: '#ffffff', szary: '#9ec9c6', akcent: '#fb923c', linia: '#1a5c60' },

  // Paleta reklam. Akcent zdjety z nasyconego pomaranczu strony na ciemny mosiadz —
  // pelny pomaranczowy pasek CTA czytal sie jak ulotka rabatowa. Uzywana tylko przez
  // REKLAMY; posty organiczne zostaja na kolorach strony.
  grafit: { tlo: '#15171b', tlo2: '#1e2228', tekst: '#f1ede6', szary: '#8d9098', akcent: '#c2a06b', linia: '#2c3139' },
  piasek: { tlo: '#ece7dd', tlo2: '#e1dace', tekst: '#1a1916', szary: '#6b665c', akcent: '#8a6a3b', linia: '#d5cdbe' },
};

export const TELEFON = '+48 799 979 735';
export const STRONA = 'autosafexpert.pl';
export const STOPKA = TELEFON + '  ·  ' + STRONA;

export const KARTY = [
  {
    id: 'post-6-konsultacja-50',
    motyw: 'granat',
    przejscie: 'zoomBlur',
    eyebrow: 'Nie wiesz, czy warto jechać',
    naglowek: ['Konsultacja', 'z biegłym'],
    cena: '50 zł',
    cenaOpis: 'netto · bez dojazdu, bez oględzin',
    punkty: [
      'Czy ogłoszenie i cena są wiarygodne',
      'Typowe wady tego modelu i rocznika',
      'O co zapytać sprzedającego',
      'Jakie dokumenty kazać pokazać',
    ],
    stopka: STOPKA,
  },
  {
    id: 'post-2-cennik',
    motyw: 'jasny',
    przejscie: 'slideUp',
    eyebrow: 'Cennik',
    naglowek: ['Jasne ceny,', 'bez gwiazdek'],
    punkty: [
      'Konsultacja telefon / WhatsApp — 50 zł',
      'Sprawdzenie auta, pakiet podstawowy — 350 zł',
      'Pakiet rozszerzony + diagnostyka — 590 zł',
      'Pomoc w rejestracji — 100 zł',
      'Kompleksowa usługa A–Z — 990 zł',
      'Pisemny raport (opcja) — 50 zł',
    ],
    stopka: 'Ceny netto · dojazd w cenie · ' + STOPKA,
  },
  {
    id: 'post-7-co-w-cenie',
    motyw: 'stal',
    przejscie: 'clockWipe',
    eyebrow: 'Bez ukrytych kosztów',
    naglowek: ['Co dostajesz', 'w cenie'],
    punkty: [
      'Pełne oględziny na miejscu',
      'Dojazd do 100 km',
      'Zdjęcia i video na WhatsApp',
      'Telefon z wynikiem od razu',
      'Rekomendacja: kupić / negocjować / odradzam',
    ],
    stopka: 'Pisemny raport +50 zł · ' + STOPKA,
  },
  {
    id: 'post-8-rejestracja-100',
    motyw: 'morze',
    przejscie: 'pixelate',
    eyebrow: 'Utknąłeś w urzędzie',
    naglowek: ['Pomoc', 'w rejestracji'],
    cena: '100 zł',
    cenaOpis: 'netto · Warszawa, Radzymin i okolice',
    punkty: [
      'Dokumenty i wnioski',
      'Cała procedura rejestracji',
      'Auta z zagranicy: akcyza, tłumaczenia',
      'PL · UA · RU · BE · EN',
    ],
    stopka: STOPKA,
  },
  {
    id: 'post-3-edukacja',
    motyw: 'rdza',
    przejscie: 'checkerboard',
    eyebrow: '5 rzeczy',
    naglowek: ['Co sprzedawca', 'przemilczy'],
    punkty: [
      'Świeży lakier — widać dopiero miernikiem',
      'Cofnięty licznik',
      'Błędy skasowane przed oględzinami',
      'DPF na wykończeniu — 5–8 tys. zł',
      'Korozja podwozia — widać na podnośniku',
    ],
    stopka: 'Sprawdzam każdą z tych rzeczy · ' + STOPKA,
  },
  {
    id: 'post-9-ua-konsultacja',
    motyw: 'noc',
    przejscie: 'lightLeak',
    eyebrow: 'Не впевнені, чи варто їхати',
    naglowek: ['Консультація', 'з експертом'],
    cena: '50 zł',
    cenaOpis: 'нетто · без виїзду та огляду',
    punkty: [
      'Чи оголошення й ціна реальні',
      'Типові проблеми цієї моделі',
      'Що запитати в продавця',
      'Реєстрація авто — 100 zł',
    ],
    stopka: '+48 799 979 735  ·  autosafexpert.pl  ·  українською',
  },
  // --- wersje rosyjskie. Kolor idzie za tematem, nie za jezykiem: konsultacja
  // jest granatowa tak samo po polsku, rejestracja morska, edukacja rdzawa.
  {
    id: 'post-10-ru-konsultacja',
    motyw: 'granat',
    przejscie: 'zoomBlur',
    eyebrow: 'Не уверены, стоит ли ехать',
    naglowek: ['Консультация', 'с экспертом'],
    cena: '50 zł',
    cenaOpis: 'нетто · без выезда и осмотра',
    punkty: [
      'Оценка объявления и цены',
      'Типичные проблемы этой модели',
      'Что спросить у продавца',
      'Какие документы проверить',
    ],
    stopka: '+48 799 979 735  ·  autosafexpert.pl  ·  по-русски',
  },
  {
    id: 'post-11-ru-rejestracja',
    motyw: 'morze',
    przejscie: 'pixelate',
    eyebrow: 'Застряли в формальностях',
    naglowek: ['Помощь', 'с регистрацией'],
    cena: '100 zł',
    cenaOpis: 'нетто · Варшава, Радзымин и окрестности',
    punkty: [
      'Документы и заявления',
      'Вся процедура регистрации',
      'Авто из-за границы: акциз, переводы',
      'PL · UA · RU · BE · EN',
    ],
    stopka: '+48 799 979 735  ·  autosafexpert.pl  ·  по-русски',
  },
  {
    id: 'post-12-ru-edukacja',
    motyw: 'rdza',
    przejscie: 'checkerboard',
    eyebrow: '5 вещей',
    naglowek: ['Что продавец', 'умолчит'],
    punkty: [
      'Свежая краска — видно только толщиномером',
      'Скрученный пробег',
      'Ошибки стёрты перед осмотром',
      'DPF на исходе — 5–8 тыс. zł',
      'Коррозия днища — видно на подъёмнике',
    ],
    stopka: 'Проверяю каждый пункт  ·  +48 799 979 735  ·  autosafexpert.pl',
  },
];

// ----------------------------------------------------------------------------
// REKLAMY — inny ukladu niz posty organiczne: jeden przekaz, trzy dowody zamiast
// szesciu, pasek z wezwaniem na dole. Teksty pochodza z zatwierdzonych reklam
// w marketing/facebook-ads/reklamy-PL.md (Reklama 1 i Reklama 4). Cen ani
// obietnic nie wolno tu dopisywac poza to, co stoi w src/data/content.ts.
export const REKLAMY = [
  {
    id: 'reklama-1-sprawdzenie-350',
    motyw: 'piasek',
    eyebrow: 'Niezależny biegły · Warszawa i 100 km',
    naglowek: ['Zanim wydasz', 'kilkadziesiąt tysięcy'],
    cena: 'od 350 zł',
    cenaOpis: 'netto · dojazd w cenie',
    punkty: [
      'Pomiar lakieru i badanie bezwypadkowości',
      'Silnik, hamulce, elektryka, jazda próbna',
      'Rekomendacja: kupić, negocjować albo odradzam',
    ],
    cta: 'Napisz — oddzwonię i ustalę termin',
    stopka: STOPKA,
  },
  {
    id: 'reklama-2-konsultacja-50',
    motyw: 'piasek',
    eyebrow: 'Masz link do ogłoszenia?',
    naglowek: ['Konsultacja', 'z biegłym'],
    cena: '50 zł',
    cenaOpis: 'netto · bez dojazdu, bez oględzin',
    punkty: [
      'Czy ogłoszenie i cena są wiarygodne',
      'Typowe wady tego modelu i rocznika',
      'O co zapytać sprzedającego',
    ],
    cta: 'Napisz na WhatsApp',
    stopka: STOPKA,
  },
];

// ----------------------------------------------------------------------------
// ROLKA — pionowa 1080x1920 na Instagram/Reels. Tresc cytowana doslownie
// z autosafexpert.pl (src/data/content.ts: hero.title, hero.trust, process.steps,
// pricing). Nic tu nie moze byc parafraza, ktora obiecuje wiecej niz strona.
export const ROLKA = {
  hak: ['Kupujesz', 'samochód?'],
  podhak: 'Pomagamy uniknąć kosztownych błędów.',
  zaufanie: [
    'Biegły sądowy i prawnik',
    '15 lat ekspertyz motoryzacyjnych',
    'Dojazd w cenie do 100 km',
    'Obsługa cudzoziemców',
  ],
  krokiTytul: 'Jak to działa',
  kroki: [
    { nr: '1', tytul: 'Zamawiasz usługę', opis: 'Ustalamy auto, lokalizację, pakiet i termin.' },
    { nr: '2', tytul: 'Dokonujesz opłaty', opis: 'Cena znana z góry, bez ukrytych kosztów.' },
    { nr: '3', tytul: 'Oględziny na miejscu', opis: 'Dojazd do 100 km w cenie. Możesz uczestniczyć.' },
    { nr: '4', tytul: 'Poznajesz wynik', opis: 'Zdjęcia, video i jasna rekomendacja.' },
  ],
  cenaOd: '350',
  cenaPodpis: 'zł netto · dojazd w cenie',
  cenaNota: 'Ustna opinia eksperta w cenie. Pisemny raport +50 zł.',
  ctaTytul: 'Umów oględziny',
  ctaPodpis: 'Warszawa · Radzymin · do 100 km',
};
