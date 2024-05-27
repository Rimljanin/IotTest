
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-900">Dobrodošli u Pametnu Knjižnicu</h1>
        <p className="mt-4 text-xl text-gray-700">Istražite svijet knjiga uz IoT tehnologiju</p>
      </header>

      <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg">
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">Pametno Praćenje Knjiga</h2>
          <p className="text-gray-600">Pratite svoje knjige uz naš sustav temeljen na IoT tehnologiji.</p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg">
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">Automatizirano Posuđivanje</h2>
          <p className="text-gray-600">Posuđujte i vraćajte knjige besprijekorno uz IoT uređaje.</p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg">
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">Dostupnost u Stvarnom Vremenu</h2>
          <p className="text-gray-600">Provjerite dostupnost knjiga u stvarnom vremenu putem naše aplikacije.</p>
        </div>
      </section>

      <div className="mt-12">
        <Link href="/login">
          <span className="inline-block rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600 transition">Prijava</span>
        </Link>
      </div>
    </main>
  );
}
