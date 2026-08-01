import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLegalDoc } from "@/lib/legal";
import type { LegalDoc } from "@/lib/legal";
import { getLegalContent } from "@/lib/legal-server";
import { LegalPageLoader } from "@/components/legal/LegalPageLoader";

type Params = Promise<{ slug: string }>;

export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isLegalDoc(slug)) return {};
  const { metadata } = await getLegalContent(slug);
  return {
    // Legal docs are also served on teams.opinionly.io; the www copy is canonical.
    alternates: { canonical: `/${slug}` },
    description: metadata.description,
    title: metadata.title,
  };
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  if (!isLegalDoc(slug)) notFound();

  const initialData = await getLegalContent(slug as LegalDoc);

  return <LegalPageLoader slug={slug as LegalDoc} initialData={initialData} />;
}
