"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchLegalContent } from "@/lib/legal";
import type { LegalDoc, LegalContent } from "@/lib/legal";
import LegalPage from "./LegalPage";

interface Props {
  slug: LegalDoc;
  initialData: LegalContent;
}

export function LegalPageLoader({ slug, initialData }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["legal", slug],
    queryFn: () => fetchLegalContent(slug),
    initialData,
    initialDataUpdatedAt: initialData.fetchedAt,
    staleTime: 5 * 60 * 1000,
  });

  return <LegalPage {...data} />;
}
