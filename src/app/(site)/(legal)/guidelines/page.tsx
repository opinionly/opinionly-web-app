import Content, { frontmatter } from "./guidelines.md";
import { createLegalPage } from "@/components/legal/createLegalPage";

const { metadata: _meta, Page } = createLegalPage(Content, frontmatter);

export const metadata = _meta;

export default Page;
