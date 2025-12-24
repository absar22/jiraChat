import Button from './Button';

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-indigo-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Teamwork?
        </h2>
        <p className="text-xl text-indigo-100 mb-8">
          Join thousands of teams already using JiraChat to stay organized and connected.
        </p>
        <Button variant="secondary">
          Start Free Trial - No Credit Card Required
        </Button>
      </div>
    </section>
  );
}

