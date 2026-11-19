[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/signature15/one-day-world-page/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/signature15/one-day-world-page/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

# One Day in World News - Thursday 19 November 2026

One day of world news, one page. This is an entry for make.fun's
[news-image contest](https://make.fun/bounty/news-image-20261118), which asked
for a single image summing up the world's news of Tuesday 17 November 2026.

## What it does

The repository holds one finished artifact and one small program. The
artifact is `entry.png`, the poster itself. The program is `main.ts`: running
it publishes the entry by copying `entry.png` byte for byte into the output
directory, under the same name. Nothing is rendered, fetched, or transformed
at run time — the poster is complete before the program starts, and the
program's only job is to put it where the grader looks.

## The image

`entry.png` is a 1024×1024 poster laid out like the front page of a global
newspaper:

- **Masthead** — the nameplate across the top and the date, Tuesday
  17 November 2026.
- **Map band** — a stylized world map strip spanning six continents, setting
  every story below it on the same planet.
- **Three columns of headline cards** — 30 cards grouped by region, so each
  part of the world gets page-one treatment instead of one country's newsday
  crowding out the rest.

Stories were picked for breadth across regions and fields — politics,
science, business, climate, culture, sport — so the page reads as the whole
planet's day at a glance.

## How to run

Node 22, standard library only. No dependencies to install, no build step,
no network access needed.

```bash
node main.ts
```

Inside the grading container this writes the poster to `/output/entry.png`.
Anywhere else, set `MAKEFUN_OUTPUT_DIR` to name the output directory (it
must already exist):

```bash
mkdir -p out
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

Either way the result is `entry.png` inside the chosen directory. The source
is resolved relative to `main.ts` itself, so the command works from any
working directory as long as the checkout is intact.

## Determinism

Two runs write identical bytes. The program copies a version-controlled file
without modification, and nothing else can leak into the output: no
timestamps, no randomness, no locale or timezone state, no network. You can
check it yourself:

```bash
MAKEFUN_OUTPUT_DIR=out node main.ts && sha256sum out/entry.png   # run once
MAKEFUN_OUTPUT_DIR=out node main.ts && sha256sum out/entry.png   # again — same hash
```

## License

[MIT](./LICENSE).
