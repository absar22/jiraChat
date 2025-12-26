import Button from './Button';

export default function CTA() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-700 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6">
          🎉 Join Us Today
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
          Ready to Transform Your Teamwork?
        </h2>
        <p className="text-xl md:text-2xl text-indigo-100 dark:text-indigo-200 mb-12 leading-relaxed">
          Join thousands of teams already using JiraChat to stay organized and connected.
        </p>
        <div className="transform hover:scale-105 transition-transform duration-300 inline-block">
          <Button variant="secondary">
            Start Free Trial - No Credit Card Required
          </Button>
        </div>
      </div>
    </section>
  );
}

