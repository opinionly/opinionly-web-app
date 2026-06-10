import type { Metadata } from "next";
import type { FC } from "react";
import type { MDXProps } from "mdx/types";
import LegalPage from "./LegalPage";

interface LegalFrontmatter {
  description: string;
  lastUpdatedOn: string;
  title: string;
}

export function createLegalPage(
  Content: FC<MDXProps>,
  frontmatter: LegalFrontmatter
): { metadata: Metadata; Page: FC } {
  const metadata: Metadata = {
    title: frontmatter.title,
    description: frontmatter.description,
  };

  function Page() {
    return (
      <LegalPage title={frontmatter.title} lastUpdated={frontmatter.lastUpdatedOn}>
        <Content components={{ h1: () => null }} />
      </LegalPage>
    );
  }

  return { metadata, Page };
}
