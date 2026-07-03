export function SectionTitle({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight sm:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{text}</p> : null}
    </div>
  );
}
