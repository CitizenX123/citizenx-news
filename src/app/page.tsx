export default function HomePage() {
  return (
    <main>
      <section className="w-full bg-cx-navy text-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-6xl font-headline tracking-tight">
            Citizen X News
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-cx-gray-300">
            Understand today. Act tomorrow.
          </p>
          <p className="mt-6 max-w-2xl text-cx-gray-300">
            What happened. What it means. What to do.
          </p>
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

