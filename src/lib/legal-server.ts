import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { notFound } from "next/navigation";
import type { LegalDoc, LegalContent } from "./legal";

const CLOUD_STORAGE_ROOT = new URL(
  "https://firebasestorage.googleapis.com/v0/b/oval-surfer-421016.firebasestorage.app/o/",
);

interface Frontmatter {
  dateRevised: string | null;
  description: string | null;
  markdown: string;
  title: string | null;
}

function parseFrontmatter(raw: string): Frontmatter {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!match)
    return {
      dateRevised: null,
      description: null,
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
    dateRevised: extract("dateRevised"),
    description: extract("description"),
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
  const docUri = ["web-content", "legal", type, `${type}.md`].join("/");
  const url = new URL(encodeURIComponent(docUri), CLOUD_STORAGE_ROOT);

  url.searchParams.set("alt", "media");

  const res = await fetch(url, { next: { revalidate: 300 } });

  if (res.status === 404) notFound();
  if (!res.ok) throw new Error(`GCS ${res.status}: ${type}`);

  const raw = await res.text();
  const { dateRevised, description, markdown, title } = parseFrontmatter(raw);
  const content = String(await processor.process(markdown));

  return {
    content,
    fetchedAt: Date.now(),
    metadata: {
      dateRevised,
      description,
      legalDoc: type,
      title,
    },
  };
}
