import { getAllBriefs, getBrief } from '@/src/lib/briefs';

export async function generateStaticParams() {
  const briefs = getAllBriefs();
  return briefs.map((b) => ({ slug: b.slug }));
}

export default async function BriefPage({ params }: { params: { slug: string } }) {
  const brief = await getBrief(params.slug);
  if (!brief) return null;
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 prose prose-invert prose-headings:font-headline">
      <h1>{brief.title}</h1>
      <p className="text-sm opacity-80">{new Date(brief.date).toLocaleString()}</p>
      <section className="not-prose mt-4 p-4 rounded-md border border-cx-gray-300">
        <p><span className="font-medium">What happened:</span> {brief.whatHappened}</p>
        {brief.whatItMeans?.length > 0 && (
          <ul className="list-disc pl-5 mt-2">
            {brief.whatItMeans.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        )}
        {brief.whatToDo && <p className="mt-2"><span className="font-medium">What to do:</span> {brief.whatToDo}</p>}
      </section>
      {brief.html && (
        <article className="mt-6" dangerouslySetInnerHTML={{ __html: brief.html }} />
      )}
      {brief.sources?.length > 0 && (
        <div className="mt-6 text-sm opacity-80">
          <div className="font-medium mb-1">Sources</div>
          <ul className="list-disc pl-5">
            {brief.sources.map((s, i) => (
              <li key={i}><a href={s.url} className="underline" target="_blank" rel="noreferrer">{s.name}</a></li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}


