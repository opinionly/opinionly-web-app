import type { Metadata } from "next";
import { getLegalContent, LEGAL_DOCS } from "@/lib/legal";
import type { LegalDoc } from "@/lib/legal";
import LegalPage from "@/components/legal/LegalPage";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return LEGAL_DOCS.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await getLegalContent(slug as LegalDoc);

  return { description: metadata.description, title: metadata.title };
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const { content, metadata } = await getLegalContent(slug as LegalDoc);

  return <LegalPage {...{ content, metadata }} />;
}
