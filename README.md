# Opinionly Web App

Landing page for [opinionly.io](https://opinionly.io) — a mobile app that delivers honest, anonymous feedback from the people who know you.

The site covers—

- consumer landing page,
- a separate _Teams_ landing page served at `teams.opinionly.io`,
- waitlist and pilot signup flows, and
- legal documentation.

## Scripts

| Command      | Description                                                                |
| ------------ | -------------------------------------------------------------------------- |
| `pnpm dev`   | Start development server at [http://localhost:3000](http://localhost:3000) |
| `pnpm build` | Create optimized production build                                          |
| `pnpm start` | Run production build locally                                               |
| `pnpm lint`  | Run ESLint                                                                 |

## Stack

| Concern           | Solution                            |
| ----------------- | ----------------------------------- |
| Framework         | Next.js 16 (App Router)             |
| Styling           | Tailwind CSS v4                     |
| Client data cache | TanStack Query v5                   |
| Analytics         | Vercel Analytics + Google Analytics |
| Email             | Resend                              |

## Routes

| Route     | Description                                                     |
| --------- | --------------------------------------------------------------- |
| `/`       | Main landing page                                               |
| `/teams`  | Teams landing (also served at `teams.opinionly.io`)             |
| `/{slug}` | Legal pages — cookies, eula, guidelines, privacy, terms-service |

## Legal content

Legal docs (`.md`) live in a separate repo — **`opinionly-web-content`** — under `legal/{slug}/{slug}.md`. On every merge to `main` in that repo, a GitHub Action uploads the changed files to Firebase Storage.

The web app fetches docs from:

```
https://firebasestorage.googleapis.com/v0/b/oval-surfer-421016.firebasestorage.app/o/web-content%2Flegal%2F{slug}%2F{slug}.md?alt=media
```

Server responses are cached for 5 minutes (`revalidate: 300`). Client-side navigations are served from TanStack Query's in-memory cache for the same window. See [`GCP-HOST.md`](./GCP-HOST.md) for the full hosting plan.

## API

### `GET /api/legal`

Returns a parsed legal document fetched from Firebase Storage.

#### Query params

| Param  | Values                                                          |
| ------ | --------------------------------------------------------------- |
| `type` | `cookies` · `eula` · `guidelines` · `privacy` · `terms-service` |

#### Response `200`

```json
{
  "ok": true,
  "status": 200,
  "data": {
    "content": "<p>...</p>",
    "fetchedAt": 1751234567890,
    "metadata": {
      "legalDoc": "privacy",
      "title": "Privacy Policy",
      "description": "...",
      "dateRevised": "2026-06-10T06:18:28-05:00"
    }
  }
}
```

#### Error responses

| Status | Cause                                           |
| ------ | ----------------------------------------------- |
| `400`  | `type` is missing or not a valid legal doc slug |
| `404`  | Document not found in Firebase Storage          |

---

### `POST /api/waitlist`

Sends a waitlist signup notification email via Resend.

#### Body

```json
{ "email": "user@example.com" }
```

#### Response `200`

```json
{ "ok": true }
```

**Error responses**

| Status | Cause                          |
| ------ | ------------------------------ |
| `400`  | Missing or invalid email       |
| `500`  | Server env vars not configured |
| `502`  | Resend delivery failure        |

#### Required env vars: `RESEND_API_KEY`, `RESEND_FROM`, `NOTIFY_EMAIL`

---

### `POST /api/pilot`

Sends a Teams pilot inquiry notification email via Resend.

#### Body

```json
{
  "email": "user@example.com",
  "company": "Acme Corp",
  "formId": "optional-form-id"
}
```

#### Response `200`

```json
{ "ok": true }
```

#### Error responses

| Status | Cause                              |
| ------ | ---------------------------------- |
| `400`  | Missing or invalid email / company |
| `500`  | Server env vars not configured     |
| `502`  | Resend delivery failure            |

**Required env vars:** `RESEND_API_KEY`, `RESEND_FROM`, `NOTIFY_EMAIL`

---

## Multi-tenant proxy

`teams.opinionly.io` is served by the same deployment. The middleware in `src/proxy.ts` rewrites requests from the `teams.*` host to the `/teams` route, with legal pages shared across both hosts.
