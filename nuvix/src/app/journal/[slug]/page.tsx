import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { notFound } from 'next/navigation';

const ARTICLES = {
  'currency-of-trust': {
    title: 'The Currency of Trust',
    category: 'Design Insights',
    date: 'Nov 04, 2024',
    image: '/journal/trust.png',
    excerpt: 'In an era of digital saturation, credibility is the only lasting differentiator. We explore how minimalist aesthetics build long-term brand authority.',
    content: [
      {
        type: 'text',
        value: 'In the digital landscape of 2024, trust is no longer an optional add-on; it is the fundamental currency of business. When a potential client lands on your website, you have less than three seconds to establish a baseline of credibility before they decide whether to engage or depart.'
      },
      {
        type: 'heading',
        value: 'The Psychology of First Impressions'
      },
      {
        type: 'text',
        value: 'Elite design is not about making things "look pretty." It is about a deliberate reduction of friction. A minimalist, well-structured interface signals to the user that your business is organized, professional, and attentive to detail. When you remove the clutter of generic animations and overused stock photos, you leave room for your value proposition to speak clearly.'
      },
      {
        type: 'text',
        value: 'We call this "The Aesthetic of Authority." By utilizing precise typography and generous white space, we create a narrative that guides the user toward a single conclusion: this brand is worth the investment.'
      }
    ]
  },
  'template-credibility': {
    title: 'Why Templates Kill Business Credibility',
    category: 'Business Growth',
    date: 'Nov 02, 2024',
    image: '/journal/templates.png',
    excerpt: 'We break down the hidden costs of generic web templates and why custom solutions win high-value clients.',
    content: [
      {
        type: 'text',
        value: 'For many startups and local businesses, the allure of a $50 template is strong. It is fast, it is cheap, and it looks "good enough." But "good enough" is the silent killer of brand scaling.'
      },
      {
        type: 'heading',
        value: 'The Uncanny Valley of Design'
      },
      {
        type: 'text',
        value: 'The problem with templates is that they are designed to be everything to everyone. This lack of specificity is immediately apparent to high-value clients. If your website looks like a hundred others in your industry, you are signaling that your service is a commodity. Commodities compete on price; brands compete on value.'
      },
      {
        type: 'text',
        value: 'A custom solution allows us to build around your specific conversion goals. Whether it is a unique booking flow or a bespoke gallery that highlights your craftsmanship, every pixel is an intentional choice made to drive your specific business result.'
      }
    ]
  },
  'roi-of-custom-dev': {
    title: 'The ROI of Custom Web Development',
    category: 'Conversion',
    date: 'Oct 28, 2024',
    image: '/journal/roi.png',
    excerpt: 'Understanding the long-term financial impact of an established, trust-centered online presence.',
    content: [
      {
        type: 'text',
        value: 'Web development is often viewed as a cost center, but for the modern enterprise, it is your most active sales representative. A custom-built site is an investment that yields measurable returns in conversion rates, client retention, and brand equity.'
      },
      {
        type: 'heading',
        value: 'Beyond the Surface'
      },
      {
        type: 'text',
        value: 'The true ROI of custom development lies in technical excellence. A site built on a clean, modern stack (like Next.js) loads faster, ranks higher in SEO, and provides a seamless mobile experience. In a world where a 100ms delay can lead to a 7% drop in conversions, speed is money.'
      },
      {
        type: 'text',
        value: 'Furthermore, a custom site scales with you. As your business evolves, your platform can adapt without the technical debt or limitations of a third-party builder. You own your infrastructure, your data, and your destiny.'
      }
    ]
  }
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLES[slug as keyof typeof ARTICLES];

  if (!article) {
    notFound();
  }

  return (
    <main className="pt-32 pb-48">
      <article className="px-6 md:px-12 max-w-[1920px] mx-auto">
        {/* Header */}
        <header className="max-w-4xl mb-24">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-secondary">{article.category}</span>
              <span className="w-1 h-1 rounded-full bg-secondary/30"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">{article.date}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-primary tracking-tighter leading-[0.95] uppercase mb-12">
              {article.title}
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed italic border-l-4 border-secondary pl-8">
              {article.excerpt}
            </p>
          </ScrollReveal>
        </header>

        {/* Hero Image */}
        <ScrollReveal direction="up" height="100%" className="mb-32">
          <div className="relative aspect-[21/9] w-full overflow-hidden bg-surface-container">
            <Image 
              fill
              alt={article.title} 
              className="w-full h-full object-cover" 
              src={article.image} 
              priority
              sizes="100vw"
            />
          </div>
        </ScrollReveal>

        {/* Content Body */}
        <div className="max-w-3xl mx-auto">
          {article.content.map((block, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
              {block.type === 'heading' ? (
                <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase mt-16 mb-8 tracking-tight">
                  {block.value}
                </h2>
              ) : (
                <p className="text-lg text-secondary leading-relaxed mb-8 font-light">
                  {block.value}
                </p>
              )}
            </ScrollReveal>
          ))}

          {/* Conclusion / CTA */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="mt-24 pt-16 border-t border-outline-variant/30 text-center">
              <h3 className="text-2xl font-bold text-primary uppercase mb-8">Ready to evolve?</h3>
              <Link href="/contact" className="inline-block bg-primary text-white px-12 py-5 text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-all">
                Start a Conversation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </main>
  );
}
