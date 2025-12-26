import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white font-sans tracking-tight dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 mb-12">

          {/* Logo & Description Section */}
          <div className="flex flex-col items-start lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-slate-900 dark:text-white">JiraChat</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm dark:text-slate-400">
              Streamlining team collaboration with AI-powered insights.
              The next generation of project management and real-time communication.
            </p>

            {/* Social Icons - Modern Minimalist Style */}
            <div className="flex space-x-4 mt-8">
              {['Instagram', 'LinkedIn', 'Facebook', 'X'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition-all hover:border-indigo-500 hover:bg-indigo-50 dark:border-slate-800 dark:hover:bg-indigo-500/10"
                >
                  <span className="sr-only">{social}</span>
                  {/* These would be your SVGs, simplified for brevity */}
                  <div className="h-4 w-4 bg-slate-400 transition-colors group-hover:bg-indigo-500" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {/* About Us */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                <li><Link href="/about" className="hover:text-indigo-500 transition-colors">Our Story</Link></li>
                <li><Link href="#" className="hover:text-indigo-500 transition-colors">Our Team</Link></li>
                <li><Link href="#" className="hover:text-indigo-500 transition-colors">News</Link></li>
              </ul>
            </div>

            {/* Spaces */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-6">Solutions</h4>
              <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                <li><Link href="#" className="hover:text-indigo-500 transition-colors">Small Team</Link></li>
                <li><Link href="#" className="hover:text-indigo-500 transition-colors">Enterprise</Link></li>
                <li><Link href="#" className="hover:text-indigo-500 transition-colors">Corporate</Link></li>
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-6">Offices</h4>
              <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                <li><Link href="#" className="hover:text-indigo-500 transition-colors">Raebareli</Link></li>
                <li><Link href="#" className="hover:text-indigo-500 transition-colors">Lucknow</Link></li>
                <li><Link href="#" className="hover:text-indigo-500 transition-colors">Auckland</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 dark:border-white/5 uppercase tracking-widest">
          <p>© 2025 JiraChat Inc. Built for the future of work.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 font-medium">
            <Link href="/contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</Link>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}