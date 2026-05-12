# Opinionly Landing Page — Design Conversation

A working log of the back-and-forth between Amit and Claude while shaping the Opinionly landing page. Captured for handoff, future reference, and so the reasoning behind each decision isn't lost.

---

## Starting point

**Amit:** "I need to make a landing page for opinionly. I have a website through porkbun and we have vercel and it is a react app."

Context document attached: Opinionly Pitch Deck Context Document.

---

## Round 1 — Initial framing

Claude pulled the key signals from the context doc:

- "Consumer feedback apps broke trust" → strong candidate for a hero line
- One product, two buyers (consumer + workplace) → central frame
- Nick's Apple background → design quality is itself a credibility signal
- Pre-product, pre-launch → page is closer to a polished placeholder + waitlist than a typical SaaS marketing page

**Decisions:**

| Question | Answer |
|---|---|
| Primary goal of the page | Polished placeholder for now |
| Aesthetic direction | Editorial / serif-led, magazine-feel |

---

## Round 2 — Slowing down to think about design

**Amit:** "Wait, shouldn't we talk about design before you just build? Maybe what it communicates, how it should be structured, or what visual tools it could use?"

Good catch. Claude reset and walked through:

- **What the page has to communicate** — that Opinionly exists, what it is in one breath, who's behind it, that something is coming
- **The job underneath the job** — most visitors are warm (mentors, pilot partners, investors-via-forward, friends). The page is a handshake before a real conversation.
- **Real tensions** — how much to say about the product? Diagnosis-first or vision-first? Which "magazine flavor" (New Yorker vs Monocle vs Businessweek)?
- **Visual tools available** for an editorial direction: masthead with rules, drop caps, pull quotes, section numerals, marginalia, single accent color, asymmetric grids, serif display + quieter body, generous negative space.

---

## Round 3 — Tagline and tone

**Amit:** Floated three options: "Feedback for adults," "Social insights for adults," "Practical feedback tool." Liked the idea of being opaque. Wanted waitlist + pilot inquiries + a general email (`info@theshareon.com`). Asked for opinions.

**Claude pushed back:**

- "Feedback for adults" — has bite but slightly defensive; "for adults" has unfortunate internet connotations
- "Social insights for adults" — "social insights" sounds like analytics, fights the product's warmth
- "Practical feedback tool" — too modest

**Alternatives offered:**

- "Feedback, reconsidered."
- "Feedback, taken seriously."
- "A second look at feedback."
- "On feedback."

**On opacity:** confirmed it as a good instinct — the less the placeholder says about *what it is*, the more serious it reads. The implicit promise is "we'll explain ourselves when we have something to show."

**On the three CTAs:** waitlist primary, pilot inquiries secondary (mailto), general info in the colophon.

**Flag:** `info@theshareon.com` is a different domain than opinionly — Amit confirmed Shareon as a separate domain for the email, but didn't want it credited as a parent publisher on the page.

**On magazine flavor:** Claude argued for New Yorker over Monocle/Businessweek — old-money-serious without trying.

---

## Round 4 — Tagline lands, animation idea introduced

**Amit:** Liked "On feedback." Wanted a visual element, deferred to Claude.

**Claude wrote the lede:**

> *On feedback.*
>
> Most of what we're told about ourselves arrives too late, from the wrong people, in the wrong tone. The tools that promise to fix this — at work, online, in between — have mostly made it worse. One side broke trust to make money. The other made the work so tedious that no one bothers.
>
> Opinionly is being built on the suspicion that this is solvable, and that solving it is more interesting than either side has assumed.
>
> More soon.

**Visual direction proposed:** A typographic strikethrough animation cycling two word pairs — *Periodic → Continuous* and *Anonymous → Considered.* Plus self-drawing horizontal rules between sections.

**Amit:** "This line feels unnecessary: 'One side broke trust to make money. The other made the work so tedious that no one bothers.' Otherwise I like it."

Also: "What does 'considered' mean in that context?"

**Claude:** Conceded both points. The "broke trust / tedious" line was sneaking the pitch in when we'd agreed to be opaque — cut it. And *considered* was vague; the actually-meaningful contrast to *anonymous* in this product is *from someone*. Settled on **Anonymous → From someone.**

---

## Round 5 — First preview built

Claude built the first HTML preview as a static editorial-style page:

- Fraunces serif + Inter Tight
- Warm paper background (`#f5f1e8`)
- Deep ink-red accent (`#8b1a1a`)
- 108px wordmark, lede in narrow column, strikethrough animation, two CTAs (waitlist + pilot mailto), colophon footer

**Amit:** "Okay, well that doesn't work. I think I like the message I just don't like the delivery/style."

Sent a link to Unbounce's "best landing page examples" — 40 conversion-style SaaS landing pages.

---

## Round 6 — The fork

**Claude was honest about what happened:**

> What I built for you was deliberately the opposite [of a conversion landing page]. Editorial restraint, opacity, magazine framing — those choices made sense for "polished placeholder, no users yet, want to look serious to investors and pilot partners." But you sent me a link to forty pages that share none of those properties. That tells me my read of what you actually want was wrong.
>
> I should have built that the first time. You said "polished placeholder" and I heard "make it quiet and literary" — but most polished placeholders in 2026 *are* actually small versions of conversion landing pages.

**Amit confirmed:** yes to modern conversion energy, yes to plainly saying what Opinionly is.

---

## Round 7 — Real product context arrives

**Amit uploaded five product screens** (feed, compose, post detail, two profiles — and later a sixth, the garden).

**Claude's read:**

- The app has a real visual identity (warm grey, white cards, friendly bold sans, blue primary, warm accents, emoji used sparingly, garden metaphor)
- The product is more distinctive than the deck suggested — "Owed answers," randomized aliases (Brave-Lark, Calm-Reed), goals that "need sun"
- The opacity is over; the screens themselves are the strongest asset
- The garden line — *"Each goal is a plant. Receiving feedback is water; reflecting on it is sun. No counts. No streaks."* — is a complete philosophical statement that could anchor a whole section

**Headline candidates aligned to the product:**

- "Ask the question you can't ask out loud."
- "Feedback, but for adults."
- "The questions you wish you could ask."
- "A quieter way to ask."

**Amit chose:** "A quieter way to ask" + "The questions you wish you could ask" as a possible subhead.

---

## Round 8 — Headline picked, first warm version built

Claude argued "A quieter way to ask" as the primary headline (shorter, more confident, sets tone) with the other line in the body.

Built a new HTML preview:

- Warm grey background matching the app
- Inter + Instrument Serif (italic word per headline as the only flourish)
- Phone screenshots from the uploads, tilted, with floating callout cards
- "Built by a team from Apple, Capital Factory, and Michigan Ross" trust line
- Three principles with emoji icons
- Pilot card and footer

---

## Round 9 — Product mechanic correction

**Amit:** "I think you misunderstand. The app does allow you to post anonymously, but it is mainly for you to post as yourself while your friends/peers respond anonymously."

Also flagged:
- "Anonymous to your friends" is wrong — should be "anonymous **from** your friends"
- Emoji feel like AI slop
- Phone images weren't rendering when opened locally
- Remove the "Built by" section
- Don't call out pilot company sizes (e.g. "20–100 employees")

**Claude restated the corrected model:**

> The asker is identified to themselves and signs their question with their real identity for their friends, by default. The responders are anonymous *from the asker*. That asymmetry is the whole trick — it's what makes the feedback both honest and actionable.

**Rebuilt with:**
- Post-detail screen as hero (shows the asymmetry — named "Dev Roy" asks, "Calm-Reed" and "Wry-Oak" reply)
- "Honest replies, every time" section (replacing the misframed anonymity section)
- Custom SVG icons replacing emoji
- "Built by" section removed
- Pilot company sizes removed
- Bundled with screen images as a zip so they'd actually render

---

## Round 10 — External feedback comes in

**Amit:** "The feedback I got was that the top of the page wasn't catchy enough and has too many words and doesn't quickly convey the value. We may [have used] the phone screens too much. We need to consider other visuals."

Pointed at Figma Make's homepage as a reference. Wanted more color, more catchy hero, but didn't want to lose the phone screens entirely.

**Claude's analysis:**

- "A quieter way to ask" is a *good* line in isolation but requires the reader to be in a particular mood. Cold visitors don't have that mood. The hero has been doing two jobs in tension (be poetic, convert) and doing both badly.
- Better hero direction = directly state the value. Examples: "Honest feedback, from people who know you," "Real feedback from your real friends," "Ask the question. Get real answers."
- The phone screens aren't the problem — the *generic SaaS treatment* is. Better approach: render the actual product mechanic (named asker + anonymous repliers) directly on the page, with the phone as evidence.
- Color blocking: each section gets its own mood (warm peach hero, soft blue, cream, yellow garden, soft green principles, dark ink pilot). Quiet/desaturated, not Skittles.
- Save the italic serif move for one or two places (the wordmark + the garden quote), not five.

---

## Round 11 — Headline narrowed, then combined

**Amit:** Liked "The honest feedback you've been missing" and "Honest feedback, from people who know you." Wasn't sure which.

**Claude:**

The two are doing different jobs:

- *"The honest feedback you've been missing"* is a **demand** headline — implies a gap, works on people who already feel the absence
- *"Honest feedback, from people who know you"* is a **category** headline — tells you what it is, works on everyone

**Proposed combining both:**

> **The honest feedback you've been missing.**
>
> From the people who actually know you.

**Amit:** "Oooo so 'from the people who know you' would be the secondary line? Remove 'actually' and I like it."

Final hero copy locked:

> **The honest feedback you've been missing.**
>
> From the people who know you.

---

## Round 12 — The current page

Built the latest version with:

**Hero**
- Final copy above
- Warm peach radial gradient background
- Hero illustration: named "Alex" avatar on the left (with a "You" pill), the post-detail phone in the center, three replier cards on the right (Calm-Reed, Brave-Lark, Wry-Oak) with bookmark-style avatars matching the in-app design, fading in one by one on page load
- Phone is untilted (per Amit's preference)
- CTA button is dark ink, not blue (blue is being used heavily in the section below; dark gives better contrast on the warm hero)

**Section colors**
- Hero — warm peach gradient
- Honest replies (the asymmetry explanation) — soft blue
- In the moment — cream
- Garden quote — yellow gradient
- Three principles — soft green
- Pilot — dark ink
- Footer — cream

**Type discipline**
- Inter throughout for body and headlines
- Instrument Serif italic used twice total: the wordmark in nav/footer, and *"No counts. No streaks."* in the garden quote
- No italic-serif word in every headline (corrected from earlier drafts)

**Three principles**
- Honest by design (named-vs-anonymous icon)
- In the moment (clock + spark icon)
- Growth, not performance (seedling/sprout icon)

**Email**
- `info@theshareon.com` for the pilot mailto and the footer link

---

## Open questions / things still on the table

1. Does the new hero feel catchy enough?
2. Does the asker/phone/repliers illustration successfully communicate the product mechanic, or does it read as decoration?
3. Is the color blocking the right amount, or could it push further toward Figma Make's level of saturation?
4. Headline isn't formally locked — the combined version is in place but could swap to either of the standalone options without much work.
5. The page is currently HTML for preview purposes; it needs to be converted to a React component to drop into the existing Vercel/React app. (Vercel deploy + Porkbun DNS pointing is a separate, smaller task once the design is locked.)

---

## Key design principles that emerged from the conversation

1. **Conversion-style page, not editorial essay.** A polished placeholder in 2026 looks like a small version of a real product landing page, not like a magazine cover.
2. **The product mechanic is the visual.** The named-asker / anonymous-replier asymmetry is the most distinctive thing about Opinionly. Render it directly on the page rather than describing it.
3. **Color as section identity.** Each section gets one quiet, desaturated mood. The page reads as a journey of rooms.
4. **Type flourishes are precious.** The italic Instrument Serif move appears twice on the whole page. Anything more dilutes it.
5. **Be specific, not poetic, at the top.** Save the literary register for one earned moment (the garden quote).
6. **Phone screenshots are evidence, not decoration.** They prove the product exists. They belong in the body, supporting claims, not as the entire hero treatment on their own.
7. **Anonymity is asymmetric.** Responders are anonymous *from the asker*, not "to your friends." This corrects an early misreading and shapes how the page describes the product.
