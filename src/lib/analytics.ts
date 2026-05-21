export function trackEvent(eventName: string, eventParams: Record<string, unknown> = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const gtag = (window as any).gtag;
  if (typeof gtag === "function") {
    gtag("event", eventName, eventParams);
  }
}
