import { join } from 'node:path';
/**
 * one-day-world-page — entrypoint for make.fun's news-image-20261118 contest.
 *
 * The artifact this program publishes is entry.png, a cream broadsheet that
 * compresses Thursday 19 November 2026 onto a single page. A date tab anchors
 * the masthead, and directly under it a day-in-numbers strip carries 8 stats —
 * among them the ICJ's 9-6 vote, Anthropic's 81bn IPO valuation, and the
 * Kumamoto M5.7 quake. Below the strip, three hero cards lead the page: the
 * Shenzhen trilateral summit, the ICJ's Myanmar genocide ruling, and
 * Anthropic's Nasdaq debut. Five secondary cards and seven tertiary cards
 * widen the day's coverage beneath the heroes, and a bank of 24 evening
 * briefs, each tagged with its region, rounds the page off before a
 * date-check footer that lets a reader confirm the edition day at a glance.
 *
 * The program's only job is to copy entry.png, byte for byte, into the output
 * directory: /output inside the grading container, or the path named by the
 * MAKEFUN_OUTPUT_DIR environment variable anywhere else. Two runs write
 * identical bytes — the copy transfers a version-controlled file unchanged,
 * and nothing can leak into the result: no timestamps, no randomness, no
 * locale or timezone state, no network calls. The source is resolved relative
 * to this file (import.meta.url), not the current working directory, so the
 * command works from any cwd as long as the checkout is intact:
 *
 *   MAKEFUN_OUTPUT_DIR=./out node main.ts
 *
 * Node 22, Node standard library only.
 */

import { copyFileSync } from 'node:fs';
const source = new URL('./entry.png', import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

copyFileSync(source, join(outputDir, 'entry.png'));
