import type { NextRequest } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

export const runtime = "nodejs";

type LegalDoc = "cookies" | "eula" | "guidelines" | "privacy" | "terms";

const LEGAL_DOCS: readonly LegalDoc[] = [
  "cookies",
  "eula",
  "guidelines",
  "privacy",
  "terms",
];

function isLegalDoc(value: unknown): value is LegalDoc {
  return LEGAL_DOCS.includes(value as LegalDoc);
}

function parseFrontmatter(raw: string): { markdown: string; lastUpdatedOn: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { markdown: raw.trim(), lastUpdatedOn: "" };

  const yaml = match[1];
  const markdown = match[2].trim();
  const dateMatch = yaml.match(/^lastUpdatedOn:\s*"?([^"\n]+)"?/m);

  return { markdown, lastUpdatedOn: dateMatch ? dateMatch[1].trim() : "" };
}

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeStringify);

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type");

  if (!isLegalDoc(type)) {
    return Response.json(
      {
        error:
          "Invalid type. Must be one of: cookies, eula, guidelines, privacy, terms.",
      },
      { status: 400 },
    );
  }

  let raw: string;
  try {
    raw = readFileSync(
      join(process.cwd(), "src/app/(legal)", `${type}.md`),
      "utf-8",
    );
  } catch {
    return Response.json({ error: "Document not found." }, { status: 404 });
  }

  const { markdown, lastUpdatedOn } = parseFrontmatter(raw);
  const content = String(await processor.process(markdown));

  return Response.json({
    data: {
      content,
      metadata: {
        dateRevised: lastUpdatedOn,
        legalDoc: type,
      },
    },
    ok: true,
    status: 200,
  });
}
