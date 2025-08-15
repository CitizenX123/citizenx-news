"use client";
import { useState } from 'react';

export default function HomePage() {
  const [localLoaded, setLocalLoaded] = useState(false);
  return (
    <main>
      <section className="relative w-full bg-cx-navy text-white overflow-hidden min-h-[240px] md:min-h-[300px]">
        {/* Image removed per request; keeping gradient-only banner. */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cx-navy/98 via-cx-navy/70 to-cx-navy/0" />
        <div className="relative max-w-5xl mx-auto px-6 py-10 md:py-12">
          <h1 className="text-3xl md:text-5xl font-headline tracking-tight">Citizen X News</h1>
          <p className="mt-4 text-lg md:text-2xl text-cx-gray-300">Understand Today. Act Tomorrow.</p>
          <p className="mt-6 max-w-2xl text-cx-gray-300">What Happened. What It Means. What To Do.</p>
          <div className="mt-6">
            <a href="/brief" className="inline-block rounded-md bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition-colors">Read Today’s Brief</a>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-5xl mx-auto px-6 py-12 grid gap-6 md:grid-cols-3">
          <a href="/brief" className="group relative overflow-hidden rounded-lg border border-cx-gray-300 block">
            <img
              src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=1400&q=70&sat=-100"
              alt="Newspaper and notes"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover grayscale opacity-80 group-hover:opacity-90 transition-opacity"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cx-navy/80 via-cx-navy/40 to-transparent" />
            <div className="relative p-6">
              <h3 className="text-xl font-semibold text-white">Today’s Brief</h3>
              <p className="mt-2 text-sm text-white/90">
                What happened. What it means. What to do. Fast.
              </p>
            </div>
          </a>
          <div className="group relative overflow-hidden rounded-lg border border-cx-gray-300">
            <img
              src="https://images.unsplash.com/photo-1457694587812-e8bf29a43845?auto=format&fit=crop&w=1400&q=70&sat=-100"
              alt="Library stacks and archives"
              className="absolute inset-0 h-full w-full object-cover grayscale opacity-80 group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cx-navy/80 via-cx-navy/40 to-transparent" />
            <div className="relative p-6">
              <h3 className="text-xl font-semibold text-white">History Lens</h3>
              <p className="mt-2 text-sm text-white/90">
                The roots behind today’s news—plain and quick.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg border border-cx-gray-300">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=70&sat=-100"
              alt="Phone notification"
              className="absolute inset-0 h-full w-full object-cover grayscale opacity-80 group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cx-navy/80 via-cx-navy/40 to-transparent" />
            <div className="relative p-6">
              <h3 className="text-xl font-semibold text-white">Alerts</h3>
              <p className="mt-2 text-sm text-white/90">
                When rules change or deadlines hit where you live.
              </p>
            </div>
          </div>
          <div className="border border-cx-gray-300 rounded-lg p-6 md:col-span-3">
            <h3 className="text-xl font-semibold">Get Alerts</h3>
            <p className="mt-2 text-sm text-cx-gray-700">Be the first to know when something changes where you live.</p>
            <form
              className="mt-4 flex flex-col sm:flex-row gap-3"
              action="#"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                const email = String(data.get('email') || '');
                const zip = String(data.get('zip') || '');
                const topics = data.getAll('topics');
                alert(`Thanks! We'll tailor alerts for ${zip || 'your area'} on: ${topics.join(', ') || 'general updates'}.`);
              }}
            >
              <input
                name="email"
                className="w-full sm:w-auto flex-1 rounded-md border border-cx-gray-300 px-3 py-2"
                placeholder="Email address"
                type="email"
                required
                aria-label="Email address"
              />
              <input
                name="zip"
                className="w-full sm:w-32 rounded-md border border-cx-gray-300 px-3 py-2"
                placeholder="ZIP code"
                pattern="\\d{5}"
                title="5-digit ZIP code"
                aria-label="ZIP code"
              />
              <fieldset className="flex flex-wrap gap-3 text-sm text-cx-gray-700">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" name="topics" value="Housing" /> Housing
                </label>
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" name="topics" value="Wages" /> Wages
                </label>
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" name="topics" value="Healthcare" /> Healthcare
                </label>
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" name="topics" value="Education" /> Education
                </label>
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" name="topics" value="Voting" /> Voting
                </label>
              </fieldset>
              <button className="rounded-md bg-cx-navy text-white px-4 py-2" type="submit">Notify Me</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-cx-gray-300">
        <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-cx-gray-700">
          © {new Date().getFullYear()} Citizen X News
        </div>
      </footer>
    </main>
  );
}

