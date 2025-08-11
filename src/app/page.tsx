"use client";
import { useState } from 'react';

export default function HomePage() {
  const [localLoaded, setLocalLoaded] = useState(false);
  return (
    <main>
      <section className="relative w-full bg-cx-navy text-white overflow-hidden min-h-[240px] md:min-h-[300px]">
        {/* Local upload (put hero.png in /public). */}
        <img
          src="/hero.png"
          alt=""
          aria-hidden
          className="pointer-events-none select-none absolute right-0 bottom-0 h-[90%] w-[65%] object-contain grayscale opacity-80"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cx-navy/98 via-cx-navy/70 to-cx-navy/0" />
        <div className="relative max-w-5xl mx-auto px-6 py-10 md:py-12">
          <h1 className="text-3xl md:text-5xl font-headline tracking-tight">Citizen X News</h1>
          <p className="mt-4 text-lg md:text-2xl text-cx-gray-300">Understand Today. Act Tomorrow.</p>
          <p className="mt-6 max-w-2xl text-cx-gray-300">What Happened. What It Means. What To Do.</p>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-5xl mx-auto px-6 py-12 grid gap-6 md:grid-cols-3">
          <div className="border border-cx-gray-300 rounded-lg p-6">
            <h3 className="text-xl font-semibold">Today’s Brief</h3>
            <p className="mt-2 text-sm text-cx-gray-700">
              Short summaries with sources and what it means for you.
            </p>
          </div>
          <div className="border border-cx-gray-300 rounded-lg p-6">
            <h3 className="text-xl font-semibold">History Lens</h3>
            <p className="mt-2 text-sm text-cx-gray-700">
              Fast context that explains how we got here.
            </p>
          </div>
          <div className="border border-cx-gray-300 rounded-lg p-6">
            <h3 className="text-xl font-semibold">Alerts</h3>
            <p className="mt-2 text-sm text-cx-gray-700">
              Push/SMS when something local affects your paycheck or rights.
            </p>
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

