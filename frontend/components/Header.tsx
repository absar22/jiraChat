import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur-md transition-all duration-300 dark:bg-slate-900/70">
      <nav className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">

          {/* Logo Section */}
          <Link href="/" className="group flex items-center gap-2 transition-transform active:scale-95">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 ring-1 ring-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transition-transform group-hover:rotate-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-white">
              Jira<span className="text-indigo-500">Chat</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <ul className="hidden items-center gap-8 md:flex">
            {["Home", "Dashboard", "Search", "Chat", "About"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative text-sm font-medium text-slate-600 transition-colors hover:text-indigo-500 dark:text-slate-300 dark:hover:text-white"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Link 
              href="/signin/user" 
              className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-500 dark:text-slate-300 dark:hover:text-white"
            >
              Login
            </Link>

            <Link 
              href="/signUp/user" 
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-slate-950 px-6 py-2 text-sm font-medium text-white transition-all hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:bg-indigo-600 dark:hover:bg-indigo-500"
            >
              <span className="relative flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                  />
                </svg>
                Sign Up
              </span>
            </Link>
          </div>

        </div>
      </nav>
    </header>
  );
}