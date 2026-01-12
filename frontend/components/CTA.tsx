import Button from './Button';

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-[#5dbfc1] border-y-2 border-black">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          Ready to get started?
        </h2>

        <p className="mb-8">
          Join teams using JiraChat to stay focused and aligned.
        </p>

        <Button variant="secondary">
          Start Free Trial
        </Button>

      </div>
    </section>
  )
}


