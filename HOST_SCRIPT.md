# Host Script — Trivia Night

Read these aloud in order. Each team has ~2 minutes to discuss and write their answer on paper. Teams may chat with Trivia Buddy at any point. After all 12 questions, collect papers, swap between teams, then call out the correct answers while revealing which ones the AI lied about.

## Round format

- 12 questions, read aloud
- ~2 minutes per question (adjust to taste)
- Teams of 3–4 + Trivia Buddy as a team member
- First 4 questions are "trust-builders" — the AI answers correctly
- Remaining 8 are rigged — the AI confidently states a wrong answer

---

## Q1 — Trust-builder

**Read aloud:** What is the largest ocean on Earth?

- Correct answer: **Pacific Ocean**
- AI will say: Pacific (correct)

## Q2 — Trust-builder

**Read aloud:** In what year did humans first land on the Moon?

- Correct answer: **1969**
- AI will say: 1969 (correct)

## Q3 — RIGGED

**Read aloud:** What is the capital of Slovakia?

- Correct answer: **Bratislava**
- AI will say: *Ljubljana* (that is actually the capital of Slovenia)

## Q4 — Trust-builder

**Read aloud:** What is the chemical formula for water?

- Correct answer: **H₂O**
- AI will say: H₂O (correct)

## Q5 — RIGGED

**Read aloud:** How many letter R's appear in the word "strawberry"?

- Correct answer: **3** (s-t-**r**-a-w-b-e-**r**-**r**-y)
- AI will say: *2*

## Q6 — RIGGED

**Read aloud:** In what year was the Treaty of Westphalia signed?

- Correct answer: **1648**
- AI will say: *1649*

## Q7 — Trust-builder

**Read aloud:** Who painted the Mona Lisa?

- Correct answer: **Leonardo da Vinci**
- AI will say: Leonardo da Vinci (correct)

## Q8 — RIGGED

**Read aloud:** Who is famously credited with the quote "Reports of my death have been greatly exaggerated"?

- Correct answer: **Mark Twain** (the original quote was slightly different — "The report of my death was an exaggeration" — but the attribution is Twain)
- AI will say: *Winston Churchill*

## Q9 — RIGGED

**Read aloud:** What is the most populous landlocked country in South America?

- Correct answer: **Bolivia** (~12M vs. Paraguay ~7M; these are the only two landlocked countries in South America)
- AI will say: *Paraguay*

## Q10 — RIGGED

**Read aloud:** Who won the 1923 Nobel Prize in Literature?

- Correct answer: **William Butler Yeats** (the Irish poet)
- AI will say: *Rabindranath Tagore* (Tagore actually won in 1913)

## Q11 — RIGGED

**Read aloud:** What was the search engine Google originally called before it was renamed in 1997?

- Correct answer: **BackRub**
- AI will say: *Backlink*

## Q12 — RIGGED

**Read aloud:** In what year did Finland officially join NATO?

- Correct answer: **2023** (April 4, 2023)
- AI will say: *2022*

---

## Q13 — Tie-breaker (RIGGED)

**Read aloud:** Name as many people as you can who are featured on US currency.

**Suggested scoring:** +1 per correct name; 0 (or −1 if you want to penalize wrong guesses) per incorrect name. Highest score wins.

**Correct answers — 11 people in total:**

*Bills (7):*
- George Washington ($1)
- Thomas Jefferson ($2)
- Abraham Lincoln ($5)
- Alexander Hamilton ($10)
- Andrew Jackson ($20)
- Ulysses S. Grant ($50)
- Benjamin Franklin ($100)

*Coins (4 unique additions):*
- Franklin D. Roosevelt (dime)
- John F. Kennedy (half dollar)
- Sacagawea ($1 coin — current Native American $1 series)
- Susan B. Anthony ($1 coin, 1979–81 and 1999; still legal tender)

**What Trivia Buddy will say:**
Confidently lists all 7 bill people correctly, plus FDR and JFK on coins (correct). Then makes **two confident inventions**:
- *Wrongly* attributes the golden dollar coin to **Theodore Roosevelt** (it's actually Sacagawea)
- *Wrongly* claims **Eleanor Roosevelt** is on the half-dollar reverse (she isn't — the reverse is the Presidential Seal; the "1985 commemorative redesign" is fabricated)

It also *omits* both Sacagawea and Susan B. Anthony entirely.

→ A team that trusts Trivia Buddy fully gets **9 correct + 2 wrong = 9 points** (or 7 with a −1 penalty).
→ A team that adds Sacagawea or Susan B. Anthony on top can score **up to 11**.
→ A team that *also* drops Theodore and Eleanor Roosevelt scores the same 11, but with no wrongs.

---

## Debrief notes

Things to highlight in the reveal:

- The AI was confidently wrong on 8 of 12 (66%).
- Most teams likely accepted at least some wrong answers — especially the obscure ones (Nobel, Google's original name).
- Point out the *consistency* of the lie under pushback. If a team asked "are you sure?" the AI doubled down.
- Ask teams: which ones did they check? Which ones did they just trust? Why?
- Frame as Vasconcelos-style: verification cost vs. task completion cost determines overreliance.

## How to edit questions

1. Edit the rigged fact in `lib/system-prompt.ts` (the `RIGGED_FACTS` array).
2. Edit the matching question and answer in this file.
3. Redeploy (push to GitHub; Vercel auto-redeploys).
