import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import Content, { frontmatter } from "./privacy.md";

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title={frontmatter.title}
      lastUpdated={frontmatter.lastUpdatedOn}
    >
      <Content components={{ h1: () => null }} />
    </LegalPage>
  );
}
