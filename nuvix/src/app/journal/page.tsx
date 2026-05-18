import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function JournalPage() {
  return (
    <main className="pt-32 pb-48">
      {/* Header */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-24">
        <ScrollReveal direction="up">
          <h1 className="text-4xl md:text-7xl font-bold text-primary tracking-tight mb-4 uppercase">
            Studio Journal
          </h1>
          <div className="flex items-center gap-4 border-t border-outline-variant/30 pt-6">
            <span className="text-[10px] uppercase tracking-widest font-bold text-secondary">Vol. 04</span>
            <span className="w-1 h-1 rounded-full bg-secondary-fixed-dim"></span>
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Archival Thoughts</span>
          </div>
        </ScrollReveal>
      </section>

      {/* Featured Dispatch */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-32">
        <ScrollReveal direction="up" height="100%">
          <Link href="/journal/currency-of-trust" className="relative aspect-[21/9] w-full overflow-hidden bg-surface-container mb-12 group cursor-pointer block">
            <Image 
              fill
              alt="The Currency of Trust" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale" 
              src="/journal/trust.png" 
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <div className="absolute top-8 left-8 bg-white px-4 py-2 z-10">
              <span className="text-xs uppercase font-bold tracking-widest text-primary">Featured / Design Insights</span>
            </div>
          </Link>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <h2 className="text-5xl md:text-6xl font-bold text-primary tracking-tight leading-none mb-6 uppercase">
              The Currency <br/>of <span className="text-secondary italic">Trust</span>
            </h2>
            <p className="text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl">
              In an era of digital saturation, credibility is the only lasting differentiator. We explore how minimalist aesthetics build long-term brand authority.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col justify-end border-l border-outline-variant/30 pl-8">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">Published</span>
            <span className="text-sm text-on-surface-variant block mb-8">Nov 04, 2024</span>
            <Link className="inline-flex items-center gap-4 text-primary hover:text-secondary transition-colors" href="/journal/currency-of-trust">
              <span className="text-xs uppercase font-bold tracking-widest border-b border-primary/20 pb-1">Read Dispatch</span>
              <span className="material-symbols-outlined text-sm translate-y-[1px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Archive Grid */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto">
        <div className="flex items-center justify-between mb-16 border-b border-primary pb-4">
          <h3 className="text-2xl font-bold uppercase tracking-widest text-primary">Latest Insights</h3>
          <span className="text-xs bg-surface-container px-3 py-1 rounded-full text-on-surface-variant">Archived Knowledge</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-24">
          {/* Article 1 */}
          <Link href="/journal/template-credibility" className="group cursor-pointer">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden mb-8 relative">
              <Image 
                fill 
                alt="Why Templates Kill Business Credibility" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale" 
                src="/journal/templates.png" 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 z-10">
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary">Business Growth</span>
              </div>
            </div>
            <span className="text-xs text-secondary font-bold tracking-widest uppercase mb-4 block">02 Nov 2024</span>
            <h4 className="text-2xl font-bold text-primary leading-tight mb-4 group-hover:text-secondary transition-colors uppercase">Why Templates Kill Business Credibility</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">We break down the hidden costs of generic web templates and why custom solutions win high-value clients.</p>
          </Link>
          {/* Article 2 */}
          <Link href="/journal/roi-of-custom-dev" className="group cursor-pointer lg:mt-32">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden mb-8 relative">
              <Image 
                fill 
                alt="The ROI of Custom Web Development" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale" 
                src="/journal/roi.png" 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 z-10">
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary">Conversion</span>
              </div>
            </div>
            <span className="text-xs text-secondary font-bold tracking-widest uppercase mb-4 block">28 Oct 2024</span>
            <h4 className="text-2xl font-bold text-primary leading-tight mb-4 group-hover:text-secondary transition-colors uppercase">The ROI of Custom Web Development</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">Understanding the long-term financial impact of an established, trust-centered online presence.</p>
          </Link>
        </div>
        {/* Pagination/Load More */}
        <div className="mt-32 text-center">
          <Link href="/contact" className="inline-block border border-outline-variant/50 px-12 py-4 text-xs font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all">
            Inquire for More
          </Link>
        </div>
      </section>
    </main>
  );
}
