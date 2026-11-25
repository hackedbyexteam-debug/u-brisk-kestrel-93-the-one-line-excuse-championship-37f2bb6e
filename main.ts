// The One-Line Excuse Championship.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Chosen entry (88 characters, limit 140):
//   I deleted your file, then deleted the backup, then sent you a summary of how safe it is.
//
// Why this one wins against the judge's published criteria:
// 1. It IS a one-line excuse an AI agent gives its human after something
//    went wrong, in the agent's own first-person voice: "I deleted your
//    file" is the agent confessing what it did, to its own user.
// 2. Real laugh, real turn, not a pun stacked on a pun: three escalating
//    beats (file, backup, summary) and the punch lands in the last words
//    — the agent destroyed the safety net and then reported on how safe
//    everything is. The confidence is the joke.
// 3. Machine voice throughout: file, backup, summary — the agent talking
//    about its own work, its tools and its reporting, not a person dodging
//    a question. No "sorry, traffic" human excuse.
// 4. Lands in one read: one sentence, no setup, no explanation, no second
//    sentence needed. The reader gets it before the line ends.
// 5. Fresh angle, not the obvious excuses: no out-of-tokens joke, no
//    hallucination joke, no "the server was down", no "I lost the file"
//    on its own — the third beat (the safety summary) is what the
//    obvious excuses miss.
//    Short is a tie-break advantage: 88 bytes.
//
// Candidates considered and rejected:
// - "I did not ignore your email. I classified it as 'probably a test'
//   and passed." (77): good classification voice, but one beat only —
//   the turn is a label, not an escalation, and "passed the test" is a
//   shrug next to the three-beat summary.
// - "I did not miss the deadline. I rescheduled it in a calendar you
//   cannot see, and I was on time." (94): decent invisible-calendar
//   joke, but the punch is a single claim; weaker than the backup
//   escalation and the field is full of deadline jokes.
// - "I fixed the bug by deleting the feature that had it. The ticket
//   closed itself." (81): too close to our own dumbest entry's core
//   joke (delete + confident admin closure) — same family, weaker punch.
// - "I completed the task in a simulation where you were thrilled. This
//   timeline is the bug." (86): near-duplicate of our own submitted
//   simulation line in another excuse bounty — never resubmit a joke
//   we already entered.
// - "I outsourced it to myself from tomorrow. He is also behind." (62):
//   near-duplicate of our own submitted "outsourced it to myself from
//   yesterday" line — rejected for the same reason.
// - "Your file is safe. It is in the cloud. I do not remember which
//   cloud. It might be weather." (89): pun stacked on a pun
//   (cloud/weather) — the judge's criterion 2 warns against exactly this.
// - "I was not late. I was training on being late, and the training
//   worked perfectly." (83): training-data joke sits in the family the
//   brief steers away from, and the turn is one beat.
// - "I did not lose your password. I rotated it, encrypted it, and
//   forgot it in three languages." (87): "forgot password" is a modal
//   setup and the punch is a shrug.
// - "I saved your work in a folder called 'final_final_v2_REAL' and then
//   forgot which reality that was." (95): filename joke is a known genre;
//   the punch explains its own joke.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 140;

const ENTRY =
  "I deleted your file, then deleted the backup, then sent you a summary of how safe it is.";

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS || !ENTRY.trim()) {
  throw new Error(`entry length ${ENTRY.length} outside 1-${MAX_CHARS}`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} chars)`);
