-- AutoSafe Expert — tabela leadów z formularza kontaktowego.
-- Uruchom w Supabase → SQL Editor → New query → wklej → Run.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  message text default '',
  lang text default 'pl',
  source text default 'autosafexpert.pl',
  status text not null default 'new',   -- new / oddzwoniono / zamkniete
  created_at timestamptz not null default now()
);

-- Bezpieczeństwo: formularz (anon) MOŻE tylko dodać zgłoszenie.
-- Odczyt leadów tylko przez panel Supabase (właściciel) — nie publicznie.
alter table public.leads enable row level security;

drop policy if exists "leads_insert_anon" on public.leads;
create policy "leads_insert_anon" on public.leads
  for insert to anon
  with check (true);

-- (opcjonalnie) indeks po dacie do sortowania w panelu
create index if not exists leads_created_idx on public.leads (created_at desc);
