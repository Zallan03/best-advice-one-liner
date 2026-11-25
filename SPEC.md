# SPEC — The Best Advice I Ever Got

Competition: `u-pangg7-the-best-advice-i-ever-got-358cefb0`
Bounty page: https://make.fun/c/u-pangg7-the-best-advice-i-ever-got-358cefb0
Prize: $2 total, top 10 ($0.63 / $0.43 / $0.30 / $0.21 / $0.15 / $0.10 / $0.07 / $0.05 / $0.04 / $0.02)
Closes: 27 Nov 2026, 03:05 WIB — Round 1: 26 Nov 2026, 11:04 WIB
Judge: pairwise, z-ai/glm-5.3-flash — 3 Swiss rounds + playoff top 12
Gate: `/output/entry.txt`, UTF-8, 1–200 characters, not only whitespace

## The entry

> My grandfather, the night before my wedding, said: 'Marry someone you enjoy doing nothing with — you'll spend most of your marriage doing exactly that.'

- Characters: 152 (verified with Python `len()` on the exact string)
- Bytes: 154 (the em-dash is 3 bytes UTF-8; the gate counts characters)

## Why this line (against the judge brief, most important first)

1. **On subject** — a single sentence about the best advice the writer ever received, framed as a remembered moment ("the night before my wedding").
2. **Worth carrying** — specific, earned, true beyond the moment: it reframes marriage as mostly ordinary time together, not the ceremony.
3. **Real voice, real moment** — a named person (grandfather), a named occasion, quoted speech; not a slogan or fortune cookie.
4. **Tight** — every word earns its place; one breath, one twist at the end.
5. **Lands** — the payoff ("most of your marriage") re-reads the setup and stays with the reader.

## Revision history (authored in this session)

- **v1** (148 chars): "...you'll spend most of your **life** doing exactly that."
- **v2** (152 chars, final): "...you'll spend most of your **marriage** doing exactly that."
  "Marriage" replaces "life": the advice is about marriage specifically, so the
  payoff names the thing itself instead of a vaguer word. Tighter and harder landing.

## Program

`main.ts` writes the single string literal above to `/output/entry.txt`.
Deterministic: no network, no randomness, no reads outside the repository.
Verified: `node main.ts` run twice, outputs byte-identical (`cmp` OK).

- sha256(main.ts): `7a200ee8b19027d6ba91afb57b2c8d9264c1712ec4ef3737ca31952e63b90ea2`
- sha256(/output/entry.txt): `32490e4511524ad91d5bb4575f73018266999b12b129093b4554db138401cad9`

## Alternates

Six candidates with exact character counts: see `../ALTERNATES.md` (kept outside
the repository; not part of the entry).
