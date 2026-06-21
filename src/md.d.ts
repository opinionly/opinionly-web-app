declare module "*.md" {
  import { FC } from "react";
  import type { MDXProps } from "mdx/types";

  const MDXComponent: FC<MDXProps>;

  export const frontmatter: {
    dateRevised: string;
    description: string;
    lastUpdatedBy?: string;
    title: string;
  };

  export default MDXComponent;
}
