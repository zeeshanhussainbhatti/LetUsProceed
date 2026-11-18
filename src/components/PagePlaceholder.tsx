export function PagePlaceholder({ title }: { title: string }) {
  return (
    <section className="bg-brand-gradient px-4 pb-24 pt-40 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-5xl font-semibold uppercase tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-4 text-lg text-muted">Content coming soon.</p>
      </div>
    </section>
  );
}
