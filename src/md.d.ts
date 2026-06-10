declare module "*.md" {
  import { FC } from "react";
  import type { MDXProps } from "mdx/types";

  const MDXComponent: FC<MDXProps>;

  export const frontmatter: {
    description: string;
    lastUpdatedBy?: string;
    lastUpdatedOn: string;
    title: string;
  };

  export default MDXComponent;
}
