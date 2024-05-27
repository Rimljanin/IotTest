import Link from "next/link";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-white">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-900">Prijava u Pametnu Knjižnicu</h2>
        
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email adresa</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email adresa"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Lozinka</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Lozinka"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Zaboravili ste lozinku?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Prijava
            </button>
          </div>
        </form>

        <div className="text-center">
          <Link href="/" legacyBehavior>
            <a className="text-indigo-600 hover:underline">Povratak na početnu</a>
          </Link>
        </div>
      </div>
    </main>
  );
}
