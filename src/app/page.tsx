export default function HomePage() {
  return (
    <main>
      <section className="w-full bg-cx-navy text-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <img src="/logo-citizenx.svg" alt="Citizen X News" className="h-16 md:h-20 mb-4" />
          <h1 className="sr-only">Citizen X News</h1>
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
          <div className="border border-cx-gray-300 rounded-lg p-6 md:col-span-3">
            <h3 className="text-xl font-semibold">Get alerts</h3>
            <p className="mt-2 text-sm text-cx-gray-700">Be first to know when something changes where you live.</p>
            <form className="mt-4 flex flex-col sm:flex-row gap-3" action="#" onSubmit={(e) => e.preventDefault()}>
              <input className="w-full sm:w-auto flex-1 rounded-md border border-cx-gray-300 px-3 py-2" placeholder="Email address" type="email" required />
              <button className="rounded-md bg-cx-navy text-white px-4 py-2" type="submit">Notify me</button>
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

