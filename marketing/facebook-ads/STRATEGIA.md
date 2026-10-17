# Facebook / Instagram Ads — Strategia (AutoSafe Expert)

Cel: pierwsi klienci na usługę **sprawdzenia auta przed zakupem** i **pomocy w rejestracji**.
Rynek: Warszawa, Radzymin, Wołomin, Legionowo, Marki + do 100 km. Języki: PL + UA (cudzoziemcy).

## 1. Cel kampanii (Meta Ads Manager)
- **Cel reklamy:** kampania OUTCOME_LEADS; „wiadomości" ustawia sie na zestawie (optimization_goal=CONVERSATIONS).
- Destynacja: **WHATSAPP** (glowny numer migrowany na WhatsApp Business, decyzja 2026-10-01) — najnizszy prog wejscia dla klienta, natychmiastowy kontakt.
- Uwaga: `OUTCOME_LEADS` + `CONVERSATIONS` dziala **tylko** z WHATSAPP. Messenger jako click-to-chat wymagalby kampanii `OUTCOME_ENGAGEMENT` (subcode 2490408 przy zlej kombinacji).
- Po zebraniu ~20–30 kontaktów przejść na cel **Leady** z formularzem błyskawicznym.

## 2. Budżet — **ustalony: 300 zł/mies. = 10 zł/dzień**

| Etap | Dzienny budżet | Czas | Cel |
|---|---|---|---|
| Start | 10 zł/dzień | 4 tyg. | pierwsze zapytania, sprawdzenie która kreacja działa |
| Skalowanie (dopiero gdy są klienci) | +20–30% co 2–3 dni | — | podnosić z zysku, nie z oszczędności |

**Co realnie daje 300 zł/mies.:** przy koszcie 15–25 zł za zapytanie to ok. **12–20 wiadomości miesięcznie**,
z czego klientami zostaje zwykle 20–30% → **3–6 zleceń/mies.** Przy cenie 350–990 zł to się spina,
ale nie jest to kampania, która „zaleje" telefonem. To budżet na rozpęd, nie na skalę.

**Trzy zasady, bez których 300 zł się przepali:**
1. **Jeden zestaw reklam. Nie dwa.** 10 zł podzielone na dwa zestawy = 5 zł każdy = Meta nie ma z czego się uczyć i oba stoją w miejscu. Kampania UA dopiero po zwiększeniu budżetu.
2. **Nie wyłączać i nie zmieniać przez pierwsze 7 dni.** Każda edycja resetuje fazę uczenia. Przy tym budżecie faza uczenia i tak może się nigdy nie domknąć — tym bardziej nie wolno jej restartować.
3. **Oceniać po miesiącu, nie po 3 dniach.** Przy 10 zł/dzień dane zbierają się wolno; 2 dni bez wiadomości nic nie znaczą.


## 3. Targetowanie
**Geo:** przy 10 zl/dzien — Warszawa + **30 km**. Szerszy promien rozmywa budzet. Dopiero od ok. 40 zl/dzien warto 40–50 km (Radzymin, Wolomin, Legionowo, Marki), a 100 km dopiero przy realnym wolumenie.
**Wiek:** 25–60.
**Płeć:** wszyscy (lekka przewaga mężczyzn w wynikach — obserwować).
**Zainteresowania (kampania PL):**
- Samochody używane, OLX, Otomoto, AutoTrader
- Zakup samochodu, komis samochodowy
- Marki aut (VW, Toyota, BMW, Audi — popularne używki)

**Kampania UA (cudzoziemcy):**
- Język: ukraiński / rosyjski
- Zainteresowania: życie w Polsce, grupy dla Ukraińców, rejestracja pojazdu
- Osobny zestaw reklam z przekazem „pomoc w formalnościach po polsku i po ukraińsku".

## 4. Struktura konta

**Na start przy 10 zł/dzień — tylko tyle:**
```
Kampania: AutoSafe — Wiadomosci WhatsApp  (id 120250428451810647, PAUSED)
└── Zestaw A: PL — Warszawa +30 km, 25–60 (destynacja: WHATSAPP)
    ├── Reklama 1 (hak: konsultacja 50 zł)   ← najniższy próg wejścia
    └── Reklama 2 (hak: oszczędność, od 350 zł)
```
Dwie kreacje w jednym zestawie — Meta sama przesunie budżet na lepszą. To jedyny test,
na jaki stać ten budżet.

**Docelowo (dopiero od ok. 30 zł/dzień):**
```
├── Zestaw A: PL — okolice Warszawy (25–60)
│   ├── Reklama 1 (hak: oszczędność)
│   ├── Reklama 2 (hak: ekspert/bezpieczeństwo)
│   └── Reklama 3 (hak: rejestracja)
└── Zestaw B: UA — cudzoziemcy
    ├── Reklama 1 (rejestracja + formalności)
    └── Reklama 2 (sprawdzenie auta)
```
Reguła: 1 zestaw = 1 grupa odbiorców, 2–3 kreacje. Nie mieszać.

## 5. Metryki do pilnowania
- **Koszt kontaktu / wiadomości** — najważniejszy. Cel: < 15–25 zł za zapytanie na start.
- CTR (klikalność) > 1% = dobra kreacja.
- Częstotliwość < 2,5 (powyżej — odbiorcy się nudzą, zmień kreację).

## 6. Piksel i pomiar
- Zainstalować **Meta Pixel** na stronie (patrz README → sekcja Analityka).
- Zdarzenia: wejście na `#kontakt`, kliknięcie „tel:", kliknięcie WhatsApp.

## Pliki w tym folderze
- `reklamy-PL.md` — gotowe teksty reklam (polski)
- `reklamy-UA.md` — gotowe teksty reklam (ukraiński)
- `kreacje-brief.md` — briefy graficzne / video do reklam
- `plan-uruchomienia.md` — checklista krok po kroku + ograniczenia tego konta
- `stan-konta.md` — stan konta reklamowego i ID encji (lokalnie, nie w repo — gitignore)
