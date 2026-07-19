# AutoSafe Expert

Strona WWW + materiały marketingowe (Facebook Ads, posty) dla firmy **AutoSafe Expert** —
niezależne ekspertyzy motoryzacyjne Iwana Bazylewicza (Warszawa, Radzymin + do 100 km).

Strona: **Astro + Tailwind CSS**, dwujęzyczna (PL + UA), statyczna — gotowa na dowolny serwer.

---

## Szybki start (na tym komputerze)

Wymagany Node.js (jest zainstalowany: v24).

```bash
npm install       # tylko raz (już zrobione)
npm run dev       # podgląd na żywo → http://localhost:4321
npm run build     # zbuduj stronę do wgrania (katalog dist/)
npm run preview   # podgląd gotowej wersji produkcyjnej
```

## Jak zmieniać treść (bez programowania)

Cała treść strony jest w jednym pliku:
**`src/data/content.ts`** — zmieniaj tekst wewnątrz cudzysłowów. Sekcja `pl:` to polski, `uk:` to ukraiński.
Dane kontaktowe (telefon, e-mail) są na górze pliku w sekcji `brand`.

Po zmianie: `npm run build` i wgraj nową zawartość `dist/` na serwer.

## Jak opublikować stronę na serwerze

Strona jest statyczna → po `npm run build` powstaje katalog **`dist/`** z gotowymi plikami.

Masz kilka opcji hostingu:
1. **Zwykły hosting / serwer (FTP)** — wgraj całą zawartość `dist/` do katalogu WWW (np. `public_html`).
2. **Netlify / Vercel / Cloudflare Pages** (darmowe, najprościej):
   - Wrzuć projekt na GitHub, połącz z Netlify.
   - Build command: `npm run build`, publish directory: `dist`.
   - Automatyczny deploy po każdej zmianie.

**Po kupnie domeny** ustaw jej adres w `astro.config.mjs` (pole `site`).

## Analityka i Meta Pixel

Po założeniu konta reklamowego Meta:
1. Skopiuj `.env.example` → `.env`, wpisz `PUBLIC_META_PIXEL_ID`.
2. Poproś Claude (agent `web-developer`) o wpięcie pixela do `src/layouts/Base.astro`.

## Marketing

Wszystko w folderze **`marketing/`**:
- `facebook-ads/STRATEGIA.md` — jak prowadzić kampanie (budżet, targetowanie).
- `facebook-ads/reklamy-PL.md` / `reklamy-UA.md` — gotowe teksty reklam.
- `facebook-ads/kreacje-brief.md` — briefy grafik/video.
- `facebook-ads/plan-uruchomienia.md` — checklista uruchomienia krok po kroku.
- `posts/kalendarz-postow.md` — pomysły i gotowe posty organiczne.

## Praca z Claude (subagenty)

Zobacz `AGENTS.md`. Skrót:
- `web-developer` — kod i wygląd strony.
- `copywriter` — teksty (PL/UA).
- `ads-specialist` — kampanie Meta.
- `designer` — grafiki i video.

## Do uzupełnienia (placeholdery)

- [ ] Potwierdzić numer telefonu / WhatsApp (`src/data/content.ts` → `brand`).
- [ ] Dodać zdjęcia eksperta i aut (`public/img/`, oznaczone „TODO" w `Landing.astro`).
- [ ] Kupić domenę i ustawić w `astro.config.mjs`.
- [ ] Dodać stronę polityki prywatności (wymóg RODO przy formularzach/reklamach).
