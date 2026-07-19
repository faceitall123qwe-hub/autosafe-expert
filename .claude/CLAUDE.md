# AutoSafe Expert — Guide for Claude

## Co to za projekt
Strona WWW + marketing (Facebook Ads, posty) dla firmy **AutoSafe Expert** — niezależne
ekspertyzy motoryzacyjne (sprawdzanie aut przed zakupem, pomoc w rejestracji).
Właściciel: **Iwan Bazylewicz**. Rejon: Warszawa, Radzymin + do 100 km.

## Klient
Właściciel produktu jest nietechniczny. Zmiany treści muszą być łatwe (jeden plik `src/data/content.ts`).
Komunikacja i cała treść dla użytkownika końcowego: **po polsku** (+ ukraiński jako druga wersja).

## Tech Stack
- Astro 5 + Tailwind CSS v4 (`@tailwindcss/vite`)
- Strona statyczna → `npm run build` → `dist/` (wgrywane na serwer)
- i18n: PL pod `/`, UK pod `/uk/`

## Struktura
```
src/
├── data/content.ts      # CAŁA treść strony (PL+UK) — edytuj tu
├── layouts/Base.astro   # <head>, meta, SEO, schema
├── components/Landing.astro  # wszystkie sekcje strony
└── pages/               # index.astro (PL), uk/index.astro (UK)
marketing/
├── facebook-ads/        # strategia, teksty reklam, briefy, checklista
└── posts/               # kalendarz i teksty postów
.claude/agents/          # subagenty (web-developer, copywriter, ads-specialist, designer)
```

## Zasady
- Treść → `src/data/content.ts`, nie hardkoduj w komponentach.
- Prostota: minimalny kod, bez zbędnych zależności ani abstrakcji.
- Nie wymyślać kwalifikacji, opinii ani gwarancji — tylko potwierdzone fakty.
- Reklamy zgodne z polityką Meta i RODO.
- Po zmianach w kodzie: `npm run build` musi przechodzić bez błędów.

## USP (do podkreślania wszędzie)
Realny biegły + prawnik · 15 lat ekspertyz · uczciwa cena od 250 zł · dojazd w cenie · pomoc dla cudzoziemców.

## TODO / dane do potwierdzenia
- Numer telefonu i WhatsApp (`src/data/content.ts` → `brand`).
- Domena (`astro.config.mjs` → `site`).
- Zdjęcia: eksperta i auta (`public/img/`), obecnie placeholdery.
- Meta Pixel po założeniu konta reklamowego.
