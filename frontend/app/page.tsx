
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import CTA from '@/components/CTA';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'JiraChat Team Collaboration Platform',
  description: 'Learn about JiraChat, a real-time collaboration platform that merges task management with chat.',
  openGraph: {
    title: 'About JiraChat',
    description: 'Learn about JiraChat, a real-time collaboration platform.',
    url: 'https://yourdomain.com/about',
    siteName: 'JiraChat',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  }

}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7f3f1] px-6 py-10">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
    </div>
  );
}