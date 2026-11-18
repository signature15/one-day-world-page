/**
 * one-day-world-page — entrypoint for make.fun's news-image contest
 * (news-image-20261117).
 *
 * WHAT IT DOES
 *
 * The whole program is one step: copy `entry.png` from the repository root
 * into the output directory, under the same name. The poster — a front page
 * of the world's news of Tuesday 17 November 2026 — is finished before this
 * script ever runs; nothing is generated, re-rendered, or transformed here.
 *
 * DETERMINISM
 *
 * Two runs write identical bytes, which a grader can confirm by hashing the
 * output after each run. The copy transfers a version-controlled file
 * unchanged, and nothing else can leak into the result: no timestamps, no
 * randomness, no locale or timezone state.
 *
 * WHY NO NETWORK
 *
 * Everything the program touches is already on local disk — the image ships
 * in the repository — so fetching or uploading would only add failure modes
 * and non-determinism. There are no network calls at all.
 *
 * WHERE THE IMAGE GOES
 *
 * Inside the grading container the output directory is the fixed path
 * `/output`. Outside it, the environment variable MAKEFUN_OUTPUT_DIR names
 * the output directory instead, so the same script runs unchanged on a dev
 * machine:
 *
 *   MAKEFUN_OUTPUT_DIR=./out node main.ts
 *
 * The source is resolved relative to this file (import.meta.url), not the
 * current working directory, so the command works from any cwd as long as
 * the checkout is intact. The destination directory must already exist;
 * this script does not create it. Node 22, Node standard library only.
 */

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

copyFileSync(source, join(outputDir, 'entry.png'));
