export type LegalDoc = "cookies" | "eula" | "guidelines" | "privacy" | "terms-service";

export const LEGAL_DOCS: readonly LegalDoc[] = [
  "cookies",
  "eula",
  "guidelines",
  "privacy",
  "terms-service",
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
  fetchedAt: number;
  metadata: LegalContentMetadata;
}

export async function fetchLegalContent(type: LegalDoc): Promise<LegalContent> {
  const res = await fetch(`/api/legal?type=${type}`);
  if (!res.ok) throw new Error(`Failed to fetch legal doc: ${type}`);
  const { data } = await res.json();
  return data as LegalContent;
}
