# Checklista uruchomienia reklam (krok po kroku)

## PRZYGOTOWANIE — kolejnosc ma znaczenie, nie przeskakuj krokow
Stan wyjściowy wg `stan-konta.md` (2026-10-01): konto reklamowe `1561508148883797` aktywne,
z metodą płatności, bez Business Managera, bez piksela, bez kampanii.

**Decyzje właściciela (2026-10-01):**
- Nadawcą reklam jest Strona **Autosafexpert.pl** (`1349191861611978`).
- **Business Managera NIE zakładamy.** Jedziemy na istniejącym koncie osobistym. Nie wracaj do tego tematu bez pytania właściciela — ryzyka są znane i zaakceptowane (patrz `stan-konta.md`).

### Plan: dwie fazy po kolei (decyzja 2026-10-01)

Nigdy obie naraz. Przy 10 zł/dzień dwie kampanie to 5 zł na każdą i żadna nie wyjdzie z fazy nauki.

**Powód testu:** w Polsce żaden komunikator nie pokrywa całego rynku. Dane Mediapanel IX 2025:
Messenger 21,41 mln (71,8% zasięgu), WhatsApp 18,67 mln (62,6%) — czyli **co trzeci internauta
nie ma WhatsAppa**. Ukraińcy w Polsce używają głównie Vibera i Telegrama. Strona WWW jest jedynym
kanałem, który nie wyklucza nikogo — ma 5 wersji językowych, telefon, WhatsApp, e-mail i formularz.

| | Faza 1 — STRONA | Faza 2 — WHATSAPP |
|---|---|---|
| Kampania | `OUTCOME_TRAFFIC` „AutoSafe - Ruch na strone" (nowa) | `120250428451810647` `OUTCOME_LEADS` (istnieje) |
| optimization_goal | `LINK_CLICKS` | `CONVERSATIONS` |
| Destynacja | `autosafexpert.pl` z UTM | `destination_type=WHATSAPP` |
| Kreacje | nowe, CTA na WWW | **gotowe:** `1660099622567196`, `1077995585240543` |
| Warunek wstępny | brak — da się od razu | migracja numeru na WhatsApp Business |
| Zasięg | wszyscy | 63% |
| Pomiar | wymaga pixela | wiadomości liczy Meta |

**Faza 2 — warunek wstępny SPEŁNIONY (2026-10-01):** właściciel zgłosił, że WhatsApp Business
jest zrobiony. Do utworzenia zostaje tylko zestaw + 2 reklamy pod istniejącą kampanią
`120250428451810647`; kreacje z CTA `WHATSAPP_MESSAGE` już są.
**Weryfikacja nastąpi przy tworzeniu zestawu** — jeśli numer nadal nie jest kontem Business,
Meta zwróci subcode 2446885. To jedyny wiarygodny test, API nie pokazuje tego inaczej.

Jeden numer = jedno konto WhatsApp, więc tata używa teraz aplikacji Business do wszystkich rozmów
na +48 799 979 735. Powrót możliwy, ale bez prostego przełącznika.

**Messenger odpada jako osobna droga.** Meta odrzuca `OUTCOME_LEADS` + `CONVERSATIONS` + `MESSENGER`
(subcode 2490408); click-to-Messenger wymagałby trzeciej kampanii na `OUTCOME_ENGAGEMENT`.
Objective kampanii jest niezmienny — nie da się przełączyć istniejącej.

**Uczciwe zastrzeżenie do wyników testu:** fazy idą po sobie, więc różnice mogą wynikać z sezonu,
a nie z kanału. Przy 10 zł/dzień dane są cienkie. Wynik traktować jako wskazówkę kierunkową,
nie dowód. Każda faza potrzebuje **pełnego miesiąca** — czyli rozstrzygnięcie dopiero po ~2 miesiącach.

### Ograniczenia tego konta — ustalone empirycznie, nie odkrywaj ich ponownie
- **Pola DSA obowiązkowe** (wymóg UE): `dsa_beneficiary` i `dsa_payor` = „AutoSafe Expert", inaczej subcode 3858081.
- **Upload lokalnych plików wyłączony** — tylko `image_hash` lub publiczny `image_url`.
- **Kreacje są niemodyfikowalne** — zmiana tekstu lub CTA oznacza nową kreację.
- Gotowe `image_hash`: diagnostyka `1889bbdac7666553d0996ffc7a143359`, podwozie `f37820abbc207c6a9fb03adf6df1285e`.

### Czego NIE trzeba przed startem (świadomie pomijamy)
- **Pixel — nie blokuje startu, ale w FAZIE 1 jest realnie potrzebny.** Kampania na stronę bez piksela
  jest ślepa: Meta nie policzy nawet wejść na stronę, więc trzeba optymalizować pod `LINK_CLICKS`
  zamiast `LANDING_PAGE_VIEWS`, a Wy nie zobaczycie, ile osób kliknęło telefon lub WhatsApp.
  **Najlepszy moment: przed aktywacją Fazy 1** — wtedy podmiana `optimization_goal` nie resetuje
  fazy nauki, bo kampania jeszcze nie ruszyła.
  Krok ręczny: Menedżer zdarzeń → Połącz źródła danych → Internet → utwórz pixel → ID do
  `src/data/content.ts` → `brand.metaPixelId` → `npm run build` → wgrać na serwer.
  Kod piksela i zdarzenie `Contact` (kliknięcie `tel:` / `wa.me`) są już w `Base.astro`.
  MCP nie potrafi utworzyć piksela — ma tylko narzędzia do zdarzeń.
  W FAZIE 2 (WhatsApp) pixel nie jest potrzebny — wiadomości liczy Meta.
- **Formalne podpięcie Strony do konta reklamowego** — przy koncie bez BM nie jest osobną czynnością. Token ma uprawnienia reklamowe do Strony Autosafexpert.pl, więc Stronę wybiera się po prostu w kreatorze reklamy. Pusta lista z `ads_get_ad_account_pages` oznacza tu „nic jeszcze nie promowano", nie „brak dostępu". Potwierdzimy to przy tworzeniu kampanii.
- **Instagram** — opcjonalnie, podnosi zasięg bez dodatkowego budżetu.
- **Polityka prywatności** — już jest: `https://autosafexpert.pl/polityka-prywatnosci`.

### Warto, ale nie blokuje
- [ ] **NIP w danych rozliczeniowych** konta reklamowego — żeby faktury za reklamę były kosztem firmy, a nie wydatkiem osoby fizycznej. Da się ustawić także na koncie osobistym.

## Uruchomienie kampanii — wersja na 300 zł/mies.
1. [ ] Menedżer reklam → **Utwórz** → cel **Wiadomości**, miejsce docelowe **WhatsApp**.
2. [ ] Budżet: **10 zł/dzień**, budżet **dzienny** (nie całkowity), bez daty końcowej.
3. [ ] Grupa odbiorców: **Warszawa + 30 km**, wiek **25–60**, wszyscy.
       Przy tym budżecie węższe geo jest lepsze — 100 km rozmyje 10 zł na zbyt wielu ludzi.
4. [ ] Zainteresowania: samochody używane, OLX, Otomoto (patrz STRATEGIA.md).
5. [ ] Dodaj **2 reklamy** (nie więcej): Reklama 4 „konsultacja 50 zł" + Reklama 1 „od 350 zł" z `reklamy-PL.md`.
6. [ ] Wgraj kreacje wg `kreacje-brief.md`.
7. [ ] Publikuj. **Nie dotykaj przez 7 dni** — każda edycja resetuje fazę uczenia.

## Po miesiącu — optymalizacja
- [ ] Sprawdź **koszt za wiadomość**. Cel: poniżej 25 zł.
- [ ] Zostaw kreację z niższym kosztem, drugą podmień na nową (nie zostawiaj jednej).
- [ ] Jeśli koszt > 40 zł za wiadomość — problem jest w kreacji albo w ofercie, nie w budżecie. Nie dokładaj pieniędzy.
- [ ] Jeśli działa — podnieś budżet o max +20–30% co 2–3 dni (nie skokowo).
- [ ] Zestaw **UA** (`reklamy-UA.md`) dopiero od ok. 30 zł/dzień — wcześniej rozcieńczy budżet.

## Ważne przy tym budżecie
Przy 300 zł/mies. reklama FB **nie będzie głównym źródłem klientów** — będzie dodatkiem.
Wizytówka Google i OLX (poniżej) dadzą prawdopodobnie więcej zapytań za 0 zł, bo trafiają
w ludzi, którzy **już szukają** sprawdzenia auta, a nie w przypadkowych przeglądających Facebooka.
Zrób je **przed** włączeniem reklamy albo równolegle.

## Poza reklamą (darmowe źródła klientów — z planu taty)
- [ ] Wizytówka **Google (Profil Firmy)** — pozycjonuje w mapach.
- [ ] Ogłoszenia na **OLX**.
- [ ] Lokalne grupy FB: Warszawa, Radzymin, Wołomin, Legionowo, Marki.
- [ ] Grupy dla cudzoziemców.
- [ ] Współpraca z komisami i biurami tłumaczeń.
