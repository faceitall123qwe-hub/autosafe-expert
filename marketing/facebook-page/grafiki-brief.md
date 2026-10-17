# Grafiki i zdjęcia na stronę FB — co jest, czego brakuje

## Gotowe — nic nie trzeba robić
| Plik | Do czego |
|---|---|
| `../assets/logo-500.png` | zdjęcie profilowe na start |
| `../assets/fb-cover-1640x624.png` | cover strony |
| `../assets/posty/post-2-cennik.png` | Post 2 |
| `../assets/posty/post-3-edukacja.png` | Post 3 |
| `../assets/posty/post-6-konsultacja-50.png` | Post 6 |
| `../assets/posty/post-7-co-w-cenie.png` | Post 7 |
| `../assets/posty/post-8-rejestracja-100.png` | Post 8 |
| `../assets/posty/post-9-ua-konsultacja.png` | Post 9 |

Treść kart edytuje się w `../video/src/karty.mjs`. Potem, z katalogu `marketing/video`:

```
npm run plakaty   # statyczne grafiki PNG do postow
npm run render    # wersje wideo tych samych kart
```

Grafika i film powstaja z tego samego kodu, wiec nie moga sie rozjechac.

---

## Brakuje — 3 zdjęcia telefonem, jedna sesja ok. 20 minut

`public/img/expert.jpg` to zdjęcie poglądowe: mężczyzna tyłem, twarzy nie widać, to nie jest Iwan.
Nie nadaje się pod post „Nazywam się Iwan Bazylewicz" ani pod zdjęcie profilowe.
Te same zdjęcia podmienią też placeholder na stronie WWW.

### Zdjęcie 1 — portret Iwana  → Post 1, Post 4, zdjęcie profilowe
- Twarz wyraźnie widoczna, patrzy w obiektyw, spokojny uśmiech.
- Przy aucie albo na parkingu — tło ma mówić „motoryzacja", ale nie zagłaszać.
- W ręku miernik lakieru albo tablet diagnostyczny — pokazuje zawód bez podpisu.
- Ubranie robocze, w którym naprawdę jeździ na oględziny. Nie garnitur.
- **Ktoś inny trzyma telefon.** Selfie w tym poście nie zadziała.

### Zdjęcie 2 — miernik lakieru  → Post 5
- Zbliżenie: dłoń przykłada miernik do błotnika lub drzwi.
- **Wyświetlacz z wynikiem musi być czytelny** — to jest cała treść tego zdjęcia.
- Najlepiej na aucie z realnie grubszym lakierem, jeśli taki trafi się przy oględzinach.

### Zdjęcie 3 — komputer diagnostyczny  → Post 5
- Interfejs OBD podpięty pod deską rozdzielczą, na ekranie lista błędów lub parametry.
- Ujęcie z boku fotela kierowcy, żeby było widać, że to wnętrze auta klienta.

### Jak robić, żeby nadawały się do publikacji
- W dzień, światło dzienne, bez lampy błyskowej.
- Pion, kadr 4:5 (ok. 1080×1350 px) — FB i Instagram pokazują go największym.
- Wyczyścić obiektyw przed sesją — zatłuszczony daje mgłę, której nie da się naprawić.
- Zero filtrów i zero stocka. Autentyczność jest tu produktem.
- Robić po kilka ujęć każdego — wybierzemy później.

Zdjęcia wrzucić do `public/img/`, dać znać — podmienię je w postach i na stronie.

---

## Zdjęcia stockowe — co jest i na jakich zasadach

| Plik | Co przedstawia | Źródło |
|---|---|---|
| `../assets/stock-podwozie-1080x1350.jpg` | podwozie auta na podnośniku, bez osoby w kadrze | Pexels #8986036, kadr 4:5 z oryginału |

Licencja Pexels: wolno używać komercyjnie, bez podawania autora, wolno modyfikować.
Nie wolno: sprzedawać niezmienionej kopii ani sugerować, że pokazane osoby lub marki
was popierają. Dlatego kadr jest przycięty tak, żeby nie było w nim twarzy.

### Czego stock NIE zastąpi
Postów 1 i 4 („Nazywam się Iwan Bazylewicz") nie da się zilustrować zdjęciem z internetu.
Każda twarz w tym miejscu to twarz kogoś innego niż osoba, którą klient wynajmuje.
To samo dotyczy zdjęcia profilowego Strony. Tu działa wyłącznie prawdziwe zdjęcie — patrz
lista ujęć wyżej. Do czasu jego zrobienia jako zdjęcie profilowe zostaje `../assets/logo-500.png`.

### Dlaczego stock warsztatowy jest tu ryzykowny
Większość darmowych zdjęć „car inspection" to mechanik w kombinezonie w warsztacie, przy
podnośniku. Wasza oferta mówi coś odwrotnego: niezależny ekspert, który przyjeżdża do klienta
i nie jest warsztatem. Zdjęcie warsztatu pod takim tekstem osłabia przekaz, nawet jeśli
formalnie wszystko się zgadza. Detal (sprzęt, podwozie, dokument) jest bezpieczniejszy
niż scena z człowiekiem.
