create table if not exists public.download_events (
  id bigint generated always as identity primary key,
  occurred_at timestamptz not null default now(),
  session_id varchar(64) not null,
  source varchar(32) not null,
  path varchar(128) not null default '/rebaflix',
  device_type varchar(16) not null,
  browser varchar(32) not null,
  operating_system varchar(32) not null,
  country varchar(2),
  region varchar(16),
  city varchar(128),
  referrer_host varchar(255)
);

create index if not exists download_events_occurred_at_idx
  on public.download_events (occurred_at desc);

create index if not exists download_events_session_id_idx
  on public.download_events (session_id);

alter table public.download_events enable row level security;

comment on table public.download_events is
  'Server-side click analytics for RebaFlix APK downloads. No raw IP addresses are stored.';
