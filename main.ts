import { mkdirSync, writeFileSync } from "node:fs";

// The Best Advice I Ever Got — one sentence, 152 characters.
// Deterministic: a single string literal, no network, no randomness,
// no reads from outside the repository.
const ENTRY =
  "My grandfather, the night before my wedding, said: 'Marry someone you enjoy doing nothing with — you'll spend most of your marriage doing exactly that.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
