export function trackEvent(eventName: string, eventParams: Record<string, unknown> = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("event", eventName, eventParams);
  }
}

export function trackPixel(eventName: string, eventParams: Record<string, unknown> = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
  if (typeof fbq === "function") {
    fbq("track", eventName, eventParams);
  }
}
