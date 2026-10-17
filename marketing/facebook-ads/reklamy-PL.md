# Gotowe teksty reklam — PL

Format każdej reklamy: **Nagłówek** (krótki) + **Tekst główny** (primary text) + **Opis** + **CTA (przycisk)**.
Przycisk CTA w Meta: „Wyślij wiadomość" / „Zadzwoń" / „Dowiedz się więcej".

---

## Reklama 1 — Hak: oszczędność (najsilniejszy na start)

**Nagłówek:** Sprawdzenie auta przed zakupem — od 350 zł

**Tekst główny:**
Kupujesz używane auto? Jedna ukryta wada może kosztować Cię tysiące złotych.
Niezależny biegły motoryzacyjny sprawdzi samochód PRZED zakupem:
✔ historia VIN i dokumenty
✔ pomiar lakieru i badanie bezwypadkowości
✔ silnik, hamulce, opony, elektryka + jazda próbna
✔ ustna opinia eksperta w cenie (pisemny raport +50 zł)
✔ jasna rekomendacja: kupić, negocjować czy odpuścić

Dojazd do 100 km w cenie. Warszawa, Radzymin i okolice.
📞 Napisz — oddzwonię i ustalę termin.

**Opis:** Niezależny ekspert. Uczciwa cena. Bez ukrytych kosztów.
**CTA:** Wyślij wiadomość

---

## Reklama 2 — Hak: ekspert / bezpieczeństwo

**Nagłówek:** Nie kupuj auta w ciemno

**Tekst główny:**
15 lat ekspertyz motoryzacyjnych. Inżynier bezpieczeństwa ruchu drogowego i biegły z licencją.
Pracuję dla Ciebie — nie dla sprzedającego.
Zanim wydasz kilkadziesiąt tysięcy, dowiedz się, co naprawdę kupujesz.

Sprawdzenie auta przed zakupem — Warszawa i okolice do 100 km (dojazd w cenie).
Zdjęcia i video z oględzin na WhatsApp. Wynik od razu telefonicznie.

**Opis:** Realny biegły, nie pośrednik.
**CTA:** Wyślij wiadomość

---

## Reklama 3 — Hak: pomoc w rejestracji

**Nagłówek:** Pomoc w rejestracji samochodu — Warszawa

**Tekst główny:**
Kupiłeś auto i gubisz się w formalnościach?
Pomogę od A do Z:
✔ przygotowanie i sprawdzenie dokumentów
✔ wnioski i procedura rejestracji
✔ wsparcie dla osób z zagranicy

Warszawa, Radzymin i okolice. Szybko i bez stresu.
📞 Napisz — wyjaśnię i ustalę termin.

**Opis:** 100 zł netto. Wsparcie także dla obcokrajowców.
**CTA:** Wyślij wiadomość

---

## Krótkie warianty (do testów / Instagram)
- „Sprawdzę Twoje auto przed zakupem. Od 350 zł. Warszawa +100 km. Napisz."
- „Ukryte wady kosztują tysiące. Diagnostyka przed zakupem od 350 zł."
- „Biegły sprawdzi auto zanim je kupisz. Dojazd w cenie. Napisz teraz."
- „Masz link do ogłoszenia? Konsultacja telefoniczna z biegłym — 50 zł."

---

## Reklama 4 — Hak: konsultacja za 50 zł (najniższy próg wejścia)

**Nagłówek:** Konsultacja z biegłym — 50 zł

**Tekst główny:**
Znalazłeś ogłoszenie i nie wiesz, czy warto jechać oglądać?
Zadzwoń lub napisz na WhatsApp — biegły motoryzacyjny oceni:
✔ czy ogłoszenie i cena wyglądają wiarygodnie
✔ typowe wady tego modelu i rocznika
✔ o co zapytać sprzedającego i jakie dokumenty sprawdzić

Bez dojazdu i bez oględzin — sama porada. Stała cena 50 zł netto.
Jeśli auto ma sens, umówimy pełne oględziny.

**Opis:** 50 zł netto. Rozmowa z biegłym, nie z pośrednikiem.
**CTA:** Wyślij wiadomość

## Grafiki reklamowe

Dwie kreacje 1080×1080 w `marketing/assets/reklamy/`:

| Plik | Odpowiada | Cena w kadrze | Wezwanie |
|---|---|---|---|
| `reklama-1-sprawdzenie-350.png` | Reklama 1 | od 350 zł netto | Napisz — oddzwonię i ustalę termin |
| `reklama-2-konsultacja-50.png` | Reklama 4 | 50 zł netto | Napisz na WhatsApp |

Treść w tablicy `REKLAMY` w `marketing/video/src/karty.mjs`. Render z katalogu
`marketing/video`:

```
npx remotion still reklama-1-sprawdzenie-350 ../assets/reklamy/reklama-1-sprawdzenie-350.png
npx remotion still reklama-2-konsultacja-50 ../assets/reklamy/reklama-2-konsultacja-50.png
```

Układ jest inny niż w postach organicznych: trzy dowody zamiast sześciu i pasek
z wezwaniem u dołu. Teksty w kadrze nie wychodzą poza to, co stoi wyżej w tym
pliku, a ceny poza `src/data/content.ts`.

**Paleta reklam jest celowo inna niż strony.** Strona używa granatu z pomarańczowym
CTA (`--color-accent: #ea580c`). W kreacji reklamowej pełny pomarańczowy pasek
czytał się jak ulotka rabatowa, więc reklamy idą na piaskowym tle z ciemnym
mosiądzem (motyw `piasek`), a akcent został na włoskowej linii i na numerze.

Świadomy koszt tej decyzji: kto kliknie reklamę, zobaczy landing w innej
estetyce. Jeśli wyniki będą słabe, pierwszym podejrzanym jest właśnie ten rozjazd
— wtedy albo strona idzie za reklamą (`src/styles/global.css`), albo odwrotnie.

**Zanim trafią na konto reklamowe:** to konto nie przyjmuje wgrywania plików
lokalnych — kreacja potrzebuje publicznego `image_url` albo gotowego `image_hash`.
Istniejące kreacje są niemodyfikowalne, więc podmiana grafiki oznacza utworzenie
nowej kreacji i nowej reklamy.

---

## Uwagi zgodne z zasadami Meta
- Nie obiecuj gwarancji („na 100% bezawaryjne") — zakaz.
- Unikaj personalizacji negatywnej („masz problem z...") — Meta odrzuca.
- Formularz kontaktu = zgoda RODO (dodaj link do polityki prywatności).
