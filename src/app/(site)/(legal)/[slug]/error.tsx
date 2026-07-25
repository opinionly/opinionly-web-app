"use client";

export default function LegalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-cream px-5">
      <p className="text-[15px] text-ink-soft">
        Something went wrong loading this page.
      </p>
      <pre className="max-w-[560px] rounded-md bg-line px-4 py-3 text-xs break-words whitespace-pre-wrap text-ink-soft">
        {error.message}
        {error.digest && `\ndigest: ${error.digest}`}
      </pre>
      <button
        onClick={reset}
        className="cursor-pointer rounded-md bg-ink px-4 py-2 text-[13px] text-cream"
      >
        Try again
      </button>
    </div>
  );
}
