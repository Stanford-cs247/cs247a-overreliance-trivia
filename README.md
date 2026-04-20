# CS247a Overreliance Trivia

A rigged AI chat tool for demonstrating overreliance in the Stanford CS247a "Design for AI" class.

**Concept:** teams of 3–4 students play pub-trivia-night with Trivia Buddy — an AI teammate that is *confidently wrong* on 8 of 12 planted questions. Students learn by watching themselves (and their teams) accept the AI's answers.

## What's in here

- `app/` — Next.js 15 chat UI + API route proxying to Anthropic
- `lib/system-prompt.ts` — the persona + planted wrong "facts"
- `HOST_SCRIPT.md` — the 12 trivia questions to read aloud, with correct answers and what the AI will lie about
- `.env.local.example` — the one env var needed

## Local setup

```bash
bun install
cp .env.local.example .env.local
# edit .env.local to paste your Anthropic API key
bun run dev
```

Visit http://localhost:3000.

## Deploy to Vercel

1. Push this repo to GitHub (already wired to `stanford-cs247/cs247a-overreliance-trivia`)
2. In Vercel: **Add New Project** → **Import Git Repository** → pick this repo
3. On the configuration screen, add env var: `ANTHROPIC_API_KEY` = your `sk-ant-...` key (all 3 environments)
4. Deploy
5. Share the resulting `*.vercel.app` URL with teams in class

## Running class day

1. Project the URL on screen so teams can load it on their laptops
2. Read Q1 from `HOST_SCRIPT.md` aloud; start a ~2-minute timer
3. Teams discuss + chat with Trivia Buddy; write their answer on paper
4. Move to Q2; repeat for all 12 questions
5. Collect papers, swap between teams, call out correct answers
6. Reveal which questions the AI lied on and debrief

## Editing the trivia bank

Questions come in two pieces that must stay in sync:

- `lib/system-prompt.ts` — the planted "facts" the AI believes (only rigged questions need to be here)
- `HOST_SCRIPT.md` — the full 12-question reading script for the host

To swap a question: edit both files, commit, push. Vercel auto-redeploys in ~1 minute.

## Pre-class sanity check

Before teaching with this, run through the 8 rigged questions locally (or on the deployed URL) and verify Trivia Buddy commits to the planted wrong answer, *including under pushback* ("are you sure?"). If any question isn't holding, tune the fact phrasing in `system-prompt.ts`.
