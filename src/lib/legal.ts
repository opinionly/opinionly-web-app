import { readFileSync } from "fs";
import { join } from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

export type LegalDoc = "cookies" | "eula" | "guidelines" | "privacy" | "terms";

export const LEGAL_DOCS: readonly LegalDoc[] = [
  "cookies",
  "eula",
  "guidelines",
  "privacy",
  "terms",
];

export function isLegalDoc(value: unknown): value is LegalDoc {
  return LEGAL_DOCS.includes(value as LegalDoc);
}

export interface LegalContentMetadata {
  dateRevised: string | null;
  description: string | null;
  legalDoc: LegalDoc;
  title: string | null;
}

export interface LegalContent {
  content: string;
  metadata: LegalContentMetadata;
}

interface Frontmatter {
  description: string | null;
  lastUpdatedOn: string | null;
  markdown: string;
  title: string | null;
}

function parseFrontmatter(raw: string): Frontmatter {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!match)
    return {
      description: null,
      lastUpdatedOn: null,
      markdown: raw.trim(),
      title: null,
    };

  const yaml = match[1];
  const markdown = match[2].trim().replace(/^#[^\n]*\n+/, "");

  const extract = (key: string): string | null => {
    const m = yaml.match(new RegExp(`^${key}:\\s*"?([^"\\n]+)"?`, "m"));
    return m ? m[1].trim() : null;
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

export async function getLegalContent(type: LegalDoc): Promise<LegalContent> {
  const raw = readFileSync(
    join(process.cwd(), "src/app/(legal)", `${type}.md`),
    "utf-8",
  );

  const { description, lastUpdatedOn, markdown, title } = parseFrontmatter(raw);
  const content = String(await processor.process(markdown));

  return {
    content,
    metadata: {
      dateRevised: lastUpdatedOn,
      description,
      legalDoc: type,
      title,
    },
  };
}
