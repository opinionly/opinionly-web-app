import type { Metadata } from "next";
import { createLegalPage } from "@/components/legal/createLegalPage";

import CookiesContent, { frontmatter as cookiesFm } from "../cookies.md";
import EulaContent, { frontmatter as eulaFm } from "../eula.md";
import GuidelinesContent, { frontmatter as guidelinesFm } from "../guidelines.md";
import PrivacyContent, { frontmatter as privacyFm } from "../privacy.md";
import TermsContent, { frontmatter as termsFm } from "../terms.md";

const pages = {
  cookies: createLegalPage(CookiesContent, cookiesFm),
  eula: createLegalPage(EulaContent, eulaFm),
  guidelines: createLegalPage(GuidelinesContent, guidelinesFm),
  privacy: createLegalPage(PrivacyContent, privacyFm),
  terms: createLegalPage(TermsContent, termsFm),
};

type Slug = keyof typeof pages;
type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return (Object.keys(pages) as Slug[]).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;

  return pages[slug as Slug].metadata;
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const { Page: LegalPage } = pages[slug as Slug];

  return <LegalPage />;
}
