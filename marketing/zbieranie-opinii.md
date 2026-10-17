# Jak zdobyć pierwsze prawdziwe opinie

Opinie są najmocniejszym elementem sprzedaży w tej branży — klient oddaje obcemu człowiekowi
decyzję o wydatku 30–80 tys. zł. Dlatego nie wolno ich wymyślać: jedna wykryta fałszywka
niszczy dokładnie to, co sprzedajecie. Fałszywe opinie to też naruszenie ustawy o
przeciwdziałaniu nieuczciwym praktykom rynkowym (dyrektywa Omnibus) — kara UOKiK do 10% obrotu.

Poniżej sposób, żeby mieć prawdziwe w ciągu kilku tygodni.

## Krok 0 — przygotuj link (raz, 5 minut)
1. Profil Firmy Google → „Poproś o opinie" → skopiuj krótki link.
2. Wklej go do `src/data/content.ts` → `brand.googleReview`.
3. `npm run build` i wgraj na serwer.

Dopóki to pole jest puste, przycisk „Zobacz opinie w Google" **nie wyświetla się w ogóle** —
strona jest na to przygotowana, ale link musi być.

## Krok 1 — moment proszenia
**Od razu po telefonie z wynikiem oględzin.** To jedyny moment, kiedy klient czuje ulgę
i wdzięczność — godzinę później emocja spada, dzień później już nie odpisze.
Nie proś przed płatnością ani w trakcie oględzin.

## Krok 2 — wiadomość na WhatsApp (wyślij po rozmowie)

> Dziękuję za zaufanie! Wysłałem wszystkie zdjęcia i video powyżej.
> Jeśli oględziny okazały się pomocne, bardzo mi pomoże krótka opinia w Google —
> zajmuje minutę, a dla kogoś, kto szuka niezależnego eksperta, jest najważniejsza.
> [link]
> Jeśli wolałby Pan/Pani coś poprawić w mojej pracy — proszę napisać wprost mnie,
> a nie w opinii. Każdą uwagę biorę na poważnie.

Ostatnie zdanie to nie uprzejmość — ono przechwytuje niezadowolonych klientów do
prywatnej wiadomości, zamiast do publicznej jednej gwiazdki.

## Krok 3 — o co konkretnie prosić
Opinia „polecam, super" jest słaba. Poproś o konkret:
> „Jeśli ma Pan chwilę — najbardziej pomagają opinie, w których jest marka auta
> i co udało się wykryć. To przekonuje kolejne osoby lepiej niż ogólne polecenie."

Opinia typu *„Sprawdzał Passata B8 w komisie pod Warszawą, wykrył ślady naprawy
powypadkowej, których nie widziałem — zaoszczędziłem kilka tysięcy"* jest warta
dziesięciu ogólnych.

## Krok 4 — gdzie je potem wstawić
Prawdziwe opinie → `src/data/content.ts` → `reviews.items` w każdym języku:
```ts
items: [
  { name: 'Marek K.', text: 'Treść opinii dokładnie jak napisał klient.', source: 'Google' },
]
```
Sekcja opinii na stronie pojawia się automatycznie, gdy tablica przestanie być pusta.
**Nie przepisuj ani nie upiększaj treści** — cytuj dosłownie. Wystarczy imię i pierwsza litera nazwiska.

## Realistycznie
Ok. 1 na 3–4 zadowolonych klientów wystawia opinię, jeśli poprosisz. Jeśli nie poprosisz —
praktycznie nikt. Przy 3–6 zleceniach miesięcznie to pierwsza opinia po ok. 2 tygodniach
i 4–6 opinii po kwartale. To wystarczy, żeby sekcja na stronie przestała być pusta.

## Czego nie robić
- Nie pisać opinii samemu ani nie prosić o nie rodziny i znajomych, którzy nie byli klientami.
- Nie oferować zniżki za opinię (Google usuwa takie opinie, a to też praktyka zakazana).
- Nie usuwać negatywnych — odpowiedzieć rzeczowo. Jedna krytyczna opinia z dobrą odpowiedzią
  buduje więcej zaufania niż dwadzieścia piątek.
