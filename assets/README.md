# Fonts for generated Open Graph images

`next/og` needs real font data, so these are checked in rather than pulled from
`next/font` (which only exists inside the build output).

Each file is a character-subsetted static instance from Google Fonts — ASCII plus
the punctuation the cards use (`’ — – ·`) — which keeps all three under the 500KB
`ImageResponse` bundle limit. Regenerate with the Google Fonts CSS API, passing a
`text=` parameter and a user agent old enough to be served `truetype`.

| File | Family | Licence |
| --- | --- | --- |
| `Inter-Regular.ttf` | Inter 400 | SIL Open Font License 1.1 |
| `Inter-Bold.ttf` | Inter 700 | SIL Open Font License 1.1 |
| `InstrumentSerif-Italic.ttf` | Instrument Serif 400 italic | SIL Open Font License 1.1 |

Used by `src/lib/og.tsx`.
