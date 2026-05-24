# Opinionly landing pages — handoff

Two static HTML landing pages ready to integrate into the existing Opinionly React/Vercel app.

## What's in this folder

| File | Purpose |
|---|---|
| `Opinionly Landing.html` | Consumer landing page — deploys to `opinionly.io` |
| `Opinionly Teams.html` | B2B landing page — deploys to `teams.opinionly.io` |
| `favicon.svg` | Shared favicon — coral rounded-square wordmark "O" |
| `og-consumer.png` | 1200×630 social card for the consumer page |
| `og-teams.png` | 1200×630 social card for the teams page |
| `screens/` | Six product screenshots referenced by the consumer page (and partially by the teams page) |
| `design-conversation.md` | Full log of the design conversation that produced these pages — read this for context on why things are the way they are |

## Integration brief (for Claude in VS Code)

Both pages are vanilla HTML + inline CSS + a tiny inline `<script>` block. They use:
- **Fonts**: Inter + Instrument Serif, loaded from Google Fonts via `<link>` in `<head>`
- **No external JS dependencies**
- **No build step required** — they work as-is

You have two reasonable integration paths. Pick based on what fits the existing app:

### Path 1 — Deploy as static HTML (fastest)

Put both `.html` files in the Vercel project's `public/` folder (or wherever static assets live). Configure routing:

- `opinionly.io/` → serves `Opinionly Landing.html`
- `teams.opinionly.io/` → separate Vercel project OR same project with a domain alias, serving `Opinionly Teams.html`

For Vercel rewrites, the cleanest setup is two separate Vercel projects (one per domain), each with its own deploy. Alternatively, one project with `vercel.json` rewrites + domain aliases.

Static assets to colocate:
- `favicon.svg` at the root of each domain
- `og-consumer.png` at `opinionly.io/og-consumer.png`
- `og-teams.png` at `teams.opinionly.io/og-teams.png`
- `screens/*.png` at `opinionly.io/screens/*.png` (and `teams.opinionly.io/screens/*.png` if you want the teams page to keep using product screenshots)

### Path 2 — Convert to React components (cleaner long-term)

Convert each HTML page to a React component matching the existing app's styling conventions (CSS modules, Tailwind, styled-components — whichever the rest of the codebase uses). The pages are presentational with no shared state, so the conversion is mechanical.

Things to preserve during conversion:
- All CSS custom properties at the top of `<style>` (the `:root { --cream, --blue, --ink ... }` block) — these are the design system
- The exact responsive breakpoints (`@media (max-width: 1080px)` and `@media (max-width: 760px)`)
- The `handleSubmit` JS confirmation state — see "Forms" below
- The two SVG illustrations in the consumer hero (named asker + anonymous repliers cluster) and the abstract dashboard mock in the teams hero — these are bespoke and important to the page's identity

## Forms — needs wiring

Both pages currently use a JS function `handleSubmit` that prevents the form's default submission and shows a UI confirmation. **No data is actually being captured.**

Wire to a backend before launch. Recommended: **Formspree** (formspree.io) — 10-minute setup, free tier covers 50 submissions/month, emails submissions to your inbox.

Setup:
1. Sign up at formspree.io, create a new form for each page (or one form with a hidden source field)
2. Replace the `onsubmit` handler with a regular form `action` and `method`:

```html
<!-- consumer page hero form -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="hero-form">
  <input type="email" name="email" placeholder="your@email.com" required />
  <button type="submit">Get early access</button>
</form>

<!-- teams page forms (both hero and closing) -->
<form action="https://formspree.io/f/YOUR_TEAMS_FORM_ID" method="POST" class="hero-form">
  <input type="text" name="company" placeholder="Your company" required />
  <div class="form-row">
    <input type="email" name="email" placeholder="you@company.com" required />
    <button type="submit">Request pilot access</button>
  </div>
</form>
```

The teams page form inputs already have `name="company"` and `name="email"` attributes wired up — Formspree will receive both.

Alternatives if not Formspree: Basin (basin.com), Web3Forms (web3forms.com), or a Vercel API route writing to a DB / forwarding email. All equivalent for this use case.

## OG image URLs

The `<meta property="og:image">` tags reference absolute URLs:
- Consumer: `https://opinionly.io/og-consumer.png`
- Teams: `https://teams.opinionly.io/og-teams.png`

If you host the images at a different path, update the meta tags in both HTML files.

## Cross-domain links

The consumer page's nav has a "For teams" link pointing to `https://teams.opinionly.io`.
The teams page's nav and footer have "For people" links pointing to `https://opinionly.io`.

Test both directions once both domains are live.

## Outstanding items (not blocking deploy)

1. **Privacy and Terms pages** — both footers link to `#` placeholders. Real pages needed eventually.
2. **Analytics** — neither page has any analytics yet. Pick one (Vercel Analytics, Plausible, PostHog) and add the snippet before launch.
3. **Custom OG images** — the included PNGs are functional but use system fonts (Georgia / system sans). If you want them to use Instrument Serif + Inter for visual consistency with the page, regenerate them with the proper fonts.

## Style system notes

The two pages share a design system embedded in the `:root` CSS custom properties. If you're converting to a React app with a global theme, lift these into your existing theme/tokens file:

```
--cream: #f6f2ea         /* warm background */
--peach: #fde4d0         /* consumer hero gradient */
--blue-soft: #e3edfb     /* teams hero gradient, "Honest replies" section */
--blue: #2b7ef5          /* primary accent (used heavily on teams page) */
--green-soft: #e3eee0    /* "Principles" section, success states */
--green: #4c9a4a         /* confirmation green */
--yellow-soft / --yellow-deep  /* "Garden" quote block */
--ink: #1c1b18           /* primary text + dark section bg */
--ink-soft: #5a5852      /* secondary text */
--ink-faint: #8e8b83     /* tertiary text */
```

Typography:
- Body and headlines: **Inter** (weights 400, 500, 600, 700, 800)
- One italic-serif flourish per page: **Instrument Serif** italic, used only for the "Opinionly" wordmark in the nav/footer and one quote on the consumer page (`No counts. No streaks.`). Don't use it for headlines.

## Read this for context

`design-conversation.md` is a 280-line log of the back-and-forth that produced these pages. It explains why "A quieter way to ask" was dropped, why the asymmetry (named asker / anonymous repliers) is the central visual idea, why we removed the "Built by Apple, Capital Factory" line, etc. Worth a skim before making editorial changes.
