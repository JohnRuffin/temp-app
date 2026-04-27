import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-16 text-stone-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
            Agentic SDLC Pilot
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            Temp app is ready for a first issue-driven page change.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-stone-600">
            This starter home page now exposes one deliberate navigation path so the
            first combined-topology task has a visible user-facing result.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_220px]">
          <section className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-950">Next step</h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-stone-600">
              Visit the dummy page to confirm the issue-first flow is driving a
              small but real UI change inside the application shell.
            </p>
            <div className="mt-6">
              <Link
                href="/dummy"
                className="inline-flex items-center rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
              >
                Open the dummy page
              </Link>
            </div>
          </section>

          <aside className="rounded-[28px] border border-stone-200 bg-stone-950 p-6 text-stone-50">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-300">
              Route
            </p>
            <p className="mt-3 text-3xl font-semibold">/dummy</p>
            <p className="mt-3 text-sm leading-6 text-stone-300">
              Simple, local, and intentionally narrow for the first PR-sized task.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
