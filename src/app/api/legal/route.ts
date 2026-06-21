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

interface Frontmatter {
  description: string;
  lastUpdatedOn: string;
  markdown: string;
  title: string;
}

function parseFrontmatter(raw: string): Frontmatter {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { description: "", lastUpdatedOn: "", markdown: raw.trim(), title: "" };

  const yaml = match[1];
  const markdown = match[2].trim();

  const extract = (key: string) => {
    const m = yaml.match(new RegExp(`^${key}:\\s*"?([^"\\n]+)"?`, "m"));
    return m ? m[1].trim() : "";
  };

  return {
    description: extract("description"),
    lastUpdatedOn: extract("lastUpdatedOn"),
    markdown,
    title: extract("title"),
  };
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
        error: "Invalid type. Must be one of: cookies, eula, guidelines, privacy, terms.",
        ok: false,
        status: 400,
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
    return Response.json(
      { error: "Document not found.", ok: false, status: 404 },
      { status: 404 },
    );
  }

  const { description, lastUpdatedOn, markdown, title } = parseFrontmatter(raw);
  const content = String(await processor.process(markdown));

  return Response.json({
    data: {
      content,
      metadata: {
        dateRevised: lastUpdatedOn,
        description,
        legalDoc: type,
        title,
      },
    },
    ok: true,
    status: 200,
  });
}
