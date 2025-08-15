import Link from 'next/link';
import { getAllBriefs } from '@/lib/briefs';

export const metadata = {
  title: 'Today\'s Brief — Citizen X News',
};

export default function BriefListPage() {
  const briefs = getAllBriefs();
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-headline tracking-tight mb-6">Today\'s Brief</h1>
      <p className="text-cx-gray-700 mb-8">What happened. What it means. What to do.</p>
      <div className="grid gap-6">
        {briefs.map((b) => (
          <Link key={b.slug} href={`/brief/${b.slug}`} className="block rounded-lg border border-cx-gray-300 p-5 hover:bg-cx-cream/50 transition-colors">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-xl font-semibold">{b.title}</h2>
              <span className="text-sm text-cx-gray-700">{new Date(b.date).toLocaleDateString()}</span>
            </div>
            <p className="mt-2 text-cx-gray-700"><span className="font-medium">What happened:</span> {b.whatHappened}</p>
            {b.whatItMeans?.length > 0 && (
              <ul className="mt-2 list-disc pl-5 text-cx-gray-700">
                {b.whatItMeans.slice(0, 2).map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            )}
            {b.whatToDo && <p className="mt-2 text-cx-gray-700"><span className="font-medium">What to do:</span> {b.whatToDo}</p>}
          </Link>
        ))}
      </div>
    </main>
  );
}


