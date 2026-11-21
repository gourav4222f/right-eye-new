export default function Loading() {
  return (
    <div className="panel mt-2 flex min-h-[60svh] items-center justify-center bg-ink lg:mt-3" role="status" aria-live="polite">
      <span className="size-10 animate-spin rounded-full border-2 border-white/20 border-t-signal" aria-hidden="true" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
