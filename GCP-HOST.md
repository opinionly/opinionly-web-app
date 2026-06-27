# GCP-Hosted Legal Content

Plan for moving legal MD files out of the web-app repo into a standalone content repo and serving them from Firebase Storage.

---

## Overview

| Concern | Current | Target |
|---------|---------|--------|
| MD files live in | `opinionly-web-app/src/app/(legal)/` | `opinionly-web-content/legal/{slug}/{slug}.md` |
| Served from | filesystem (`readFileSync`) | Firebase Storage (GCS) |
| Updated via | web-app PR | content PR → GH Action → Firebase |

---

## Repositories

### `opinionly-web-content` (new)

```
legal/
  cookies/
    cookies.md
  eula/
    eula.md
  guidelines/
    guidelines.md
  privacy/
    privacy.md
  terms-service/
    terms-service.md
```

No framework code — content only. The main branch is the source of truth.

### `opinionly-web-app` (this repo)

- Remove `src/app/(legal)/*.md`
- Update `src/lib/legal.ts` to fetch from Firebase Storage instead of `readFileSync`

---

## Firebase Storage layout

Bucket: `oval-surfer-421016.firebasestorage.app`

| File | Storage path |
|------|-------------|
| `cookies.md` | `/web-content/legal/cookies/cookies.md` |
| `eula.md` | `/web-content/legal/eula/eula.md` |
| `guidelines.md` | `/web-content/legal/guidelines/guidelines.md` |
| `privacy.md` | `/web-content/legal/privacy/privacy.md` |
| `terms-service.md` | `/web-content/legal/terms-service/terms-service.md` |

Public download URL pattern:
```
https://firebasestorage.googleapis.com/v0/b/oval-surfer-421016.firebasestorage.app/o/web-content%2Flegal%2F{slug}%2F{slug}.md?alt=media
```

---

## GitHub Action (`opinionly-web-content`)

File: `.github/workflows/deploy-legal.yml`

Trigger: `push` to `main`, paths `legal/**`.

Steps:
1. Checkout repo
2. Authenticate to GCP using a service account key stored as `GCP_SA_KEY` secret (JSON, base64-encoded)
3. Upload every file under `legal/` to the bucket with `gsutil -h "Cache-Control:public, max-age=300"` (5-min CDN TTL)

```yaml
name: Deploy legal docs to Firebase Storage

on:
  push:
    branches: [main]
    paths:
      - "*/**.md"

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Authenticate to GCP
        uses: google-github-actions/auth@v2
        with:
          credentials_json: ${{ secrets.GCP_SA_KEY }}

      - name: Set up Cloud SDK
        uses: google-github-actions/setup-gcloud@v2

      - name: Upload legal docs
        run: |
          for slug in cookies eula guidelines privacy terms-service; do
            gsutil -h "Cache-Control:public, max-age=300" cp \
              "legal/${slug}/${slug}.md" \
              "gs://oval-surfer-421016.firebasestorage.app/web-content/legal/${slug}/${slug}.md"
          done
```

### GCP service account requirements

- Role: `Storage Object Admin` on the bucket (or a custom role with `storage.objects.create` + `storage.objects.delete`)
- Create the key in IAM → Service Accounts → Keys → Add Key → JSON
- Store the raw JSON as the `GCP_SA_KEY` secret in the content repo

---

## Changes to `opinionly-web-app`

### File layout after migration

| File | Role |
|------|------|
| `src/lib/legal.ts` | Types, constants, `fetchLegalContent` (client-safe) |
| `src/lib/legal-server.ts` | `getLegalContent` — server-only, reads from GCS |
| `src/providers/query-client.tsx` | `ReactQueryProvider` client component |
| `src/components/legal/LegalPageLoader.tsx` | Client component, `useSuspenseQuery` → `/api/legal` |
| `src/app/(site)/(legal)/[slug]/page.tsx` | Server component, `prefetchQuery` + `HydrationBoundary` |

### `src/lib/legal-server.ts`

Replace `readFileSync` with a GCS `fetch`. The file remains server-only (Node.js imports or explicit isolation keep it out of the client bundle).

```ts
const STORAGE_BASE =
  "https://firebasestorage.googleapis.com/v0/b/oval-surfer-421016.firebasestorage.app/o";

export async function getLegalContent(type: LegalDoc): Promise<LegalContent> {
  const url = `${STORAGE_BASE}/web-content%2Flegal%2F${type}%2F${type}.md?alt=media`;
  const res = await fetch(url, { next: { revalidate: 300 } });

  if (!res.ok) throw new Error(`Failed to fetch legal doc: ${type}`);

  const raw = await res.text();
  const { dateRevised, description, markdown, title } = parseFrontmatter(raw);
  const content = String(await processor.process(markdown));

  return {
    content,
    metadata: { dateRevised, description, legalDoc: type, title },
  };
}
```

Notes:
- `next: { revalidate: 300 }` on the server `fetch` matches the 5-min `Cache-Control` on GCS objects
- `getLegalContent` is called at build time (static generation) and by the `/api/legal` route handler
- After this change, remove `import { readFileSync } from "fs"` and `import { join } from "path"` from this file

### TanStack Query layer (already implemented)

`@tanstack/react-query` is installed and wired up. The data flow for a legal page:

```
next build / SSR
  page.tsx (server)
    └─ prefetchQuery({ queryKey: ['legal', slug], queryFn: getLegalContent })
         └─ getLegalContent → GCS fetch (revalidate: 300)
    └─ dehydrate(queryClient) → serialized into HTML

browser
  HydrationBoundary rehydrates the QueryClient
  LegalPageLoader (client) useSuspenseQuery({ queryKey: ['legal', slug] })
    └─ cache hit from hydration → no network call
    └─ stale after 5 min → re-fetches via /api/legal?type={slug}
         └─ /api/legal → getLegalContent → GCS fetch
```

`staleTime` is 5 minutes on both the server `fetch` (`revalidate: 300`) and the client QueryClient (`defaultOptions.queries.staleTime: 5 * 60 * 1000`), so they stay in sync.

### Firebase Storage bucket rules

The files must be publicly readable. Add this rule in the Firebase Console (Storage → Rules) if not already set:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /web-content/legal/{slug}/{doc} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

---

## Implementation checklist

- [ ] Create `opinionly-web-content` repo and add the five MD files at `legal/{slug}/{slug}.md`
- [ ] Create GCP service account, download JSON key, add as `GCP_SA_KEY` secret in content repo
- [ ] Add `.github/workflows/deploy-legal.yml` to content repo and verify first upload
- [ ] Set Firebase Storage rules to allow public reads on `/web-content/legal/{slug}/{slug}.md`
- [x] Install `@tanstack/react-query` and wire up `ReactQueryProvider`, `LegalPageLoader`, `HydrationBoundary`
- [ ] Update `src/lib/legal-server.ts` (swap `readFileSync` for GCS `fetch`)
- [ ] Remove `src/app/(legal)/*.md` from this repo
- [ ] Smoke-test: `GET /api/legal?type=privacy` returns 200 in dev (with files already uploaded)
- [ ] Verify static build still generates all five slug pages
- [ ] Deploy and confirm production pages load correctly

---

## Open questions

1. **Build-time availability** — static pages are generated at Next.js build time. If Firebase Storage is unreachable during the build the build fails. Decide whether to keep a fallback local copy for CI builds or accept that dependency.
2. **Versioning / rollback** — GCS object versioning can be enabled on the bucket if rollback to a previous MD revision is needed.
3. **Access control** — confirm whether any legal docs should be gated (currently all are public).
