# AGENTS — AutoSafe Expert

Projekt łączy **stronę WWW** i **marketing (Facebook Ads + posty)** dla firmy Iwana Bazylewicza.
Do pracy służą wyspecjalizowane subagenty (`.claude/agents/`). Poniżej kiedy którego używać.

| Agent | Do czego | Pliki, na których pracuje |
|---|---|---|
| `web-developer` | Budowa i edycja strony, style, i18n, build, deploy | `src/`, `astro.config.mjs` |
| `copywriter` | Teksty strony, postów, reklam (PL/UA), skrypty | `src/data/content.ts`, `marketing/` |
| `ads-specialist` | Kampanie Meta: targetowanie, budżet, optymalizacja | `marketing/facebook-ads/` |
| `designer` | Kreacje graficzne/video, logo, wizualia | `marketing/assets/`, `public/img/` |

## Typowe zlecenia
- „Dodaj sekcję opinii na stronie" → `web-developer` (struktura) + `copywriter` (treść).
- „Zmień ceny na stronie" → `web-developer` edytuje `src/data/content.ts`.
- „Przygotuj nową kampanię na cudzoziemców" → `ads-specialist` + `copywriter` (UA).
- „Zrób grafikę do reklamy #1" → `designer` wg briefu.

## Zasada podziału
- **Treść** (co piszemy) → `copywriter`.
- **Kod/wygląd strony** → `web-developer`.
- **Ustawienia reklam** → `ads-specialist`.
- **Grafika/video** → `designer`.

Szczegóły techniczne i deploy: patrz `README.md`. Wskazówki dla Claude: `.claude/CLAUDE.md`.
