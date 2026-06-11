"use client";

import { useSyncExternalStore } from "react";

function format(iso: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(iso));
}

export default function LocalDate({ iso }: { iso: string }) {
  const locale = useSyncExternalStore(
    () => () => {},
    () => navigator.language,
    () => "en-US",
  );

  return <>{format(iso, locale)}</>;
}
