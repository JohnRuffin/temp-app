import Link from "next/link";

export default function DummyPage() {
  return (
    <main className="min-h-screen bg-amber-50 px-6 py-16 text-stone-900">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 rounded-[32px] border border-amber-200 bg-white p-8 shadow-sm sm:p-12">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
            Dummy Page
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            This route exists to validate the combined topology workflow.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-stone-600">
            The page is intentionally small: one new route, one visible change on
            the home page, and straightforward local verification.
          </p>
        </div>

        <div className="rounded-[24px] bg-amber-100/70 p-6 text-sm leading-7 text-stone-700">
          The goal is not product depth. The goal is proving that a GitHub issue,
          combined-topology execution, and local verification can drive a clean,
          PR-sized application change end to end.
        </div>

        <div>
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-stone-300 px-5 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
