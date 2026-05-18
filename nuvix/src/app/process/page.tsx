import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import Link from 'next/link';

export default function ProcessPage() {
  return (
    <main className="max-w-[1920px] mx-auto px-6 md:px-12 pt-48 pb-24">
      {/* Hero Section */}
      <header className="mb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-10 lg:col-span-8">
            <ScrollReveal direction="up">
              <span className="text-[10px] font-bold tracking-[0.3em] text-secondary uppercase mb-6 block">The Nuvixes Method</span>
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-headline font-bold tracking-tighter mb-12 leading-[0.85] uppercase text-primary">
                Precision <br /> is our <br /> <span className="text-secondary italic">Standard.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-xl md:text-3xl text-on-surface-variant leading-relaxed max-w-3xl font-light">
                A disciplined architectural approach to digital design. We remove ambiguity through precise execution and brutal transparency.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </header>

      {/* Progress Track: Visualized as a heavy border */}
      <div className="w-full h-px bg-outline-variant/30 mb-48"></div>

      {/* Steps Section */}
      <div className="space-y-64">
        {/* Step 1: Discover */}
        <section className="grid grid-cols-1 md:grid-cols-12 items-start gap-16">
          <div className="md:col-span-1">
            <ScrollReveal direction="right">
              <span className="text-4xl font-headline font-black text-primary/10 block mb-4">01</span>
            </ScrollReveal>
          </div>
          <div className="md:col-span-5">
            <ScrollReveal direction="up">
              <h2 className="text-5xl font-headline font-bold mb-8 uppercase tracking-tighter">Immersion & <br/>Discovery</h2>
              <p className="text-secondary text-lg leading-relaxed mb-12 font-light">
                The foundation of every project begins with immersion. We analyze your market position, define technical constraints, and uncover the latent potential of your brand through deep inquiry.
              </p>
              <div className="p-10 bg-surface-container-low border-l-2 border-secondary relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-3xl rounded-full translate-x-16 -translate-y-16"></div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4 text-primary">Phase Objective</p>
                <p className="text-sm font-medium italic leading-relaxed text-on-surface-variant">
                  "Identify the core business objective and define the technical roadmap for Q4 implementation."
                </p>
              </div>
            </ScrollReveal>
          </div>
          <div className="md:col-span-6 flex justify-end">
            <ScrollReveal direction="up" delay={0.3} className="w-full max-w-xl aspect-square bg-surface-container-high relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--md-sys-color-secondary)_0%,_transparent_70%)]"></div>
              <div className="relative z-10 text-center">
                <span className="text-[12rem] font-headline font-black text-primary/5 select-none leading-none">INQUIRY</span>
              </div>
              <div className="absolute bottom-12 left-12 h-px w-24 bg-primary/20"></div>
            </ScrollReveal>
          </div>
        </section>

        {/* Step 2: Strategy */}
        <section className="grid grid-cols-1 md:grid-cols-12 items-start gap-16">
          <div className="md:col-span-6 order-2 md:order-1">
            <ScrollReveal direction="up" delay={0.2} className="w-full max-w-xl aspect-[4/3] bg-primary relative overflow-hidden p-16 flex flex-col justify-end">
              <div className="absolute top-12 right-12 w-12 h-12 border border-white/20"></div>
              <div className="text-white/10 font-headline text-[8rem] font-bold leading-none select-none">BLUEPRINT</div>
              <div className="h-px w-full bg-white/20 mt-8"></div>
            </ScrollReveal>
          </div>
          <div className="md:col-span-5 md:col-start-8 order-1 md:order-2">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-headline font-black text-primary/10">02</span>
                <span className="h-px w-12 bg-primary/20"></span>
              </div>
              <h2 className="text-5xl font-headline font-bold mb-8 uppercase tracking-tighter">Strategic <br/>Architecture</h2>
              <p className="text-secondary text-lg leading-relaxed mb-12 font-light">
                Data meets intuition. We distill the discovery findings into a rigorous roadmap. This document serves as the project's 'North Star', defining the visual direction and user journey.
              </p>
              <div className="p-10 bg-surface-container-low border-l-2 border-secondary">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4 text-primary">Deliverable</p>
                <p className="text-sm font-medium italic leading-relaxed text-on-surface-variant">
                  "A definitive Strategy Blueprint delivery that requires formal sign-off before proceeding to creative execution."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Step 3: Design */}
        <section className="grid grid-cols-1 md:grid-cols-12 items-start gap-16">
          <div className="md:col-span-1">
            <ScrollReveal direction="right">
              <span className="text-4xl font-headline font-black text-primary/10 block mb-4">03</span>
            </ScrollReveal>
          </div>
          <div className="md:col-span-5">
            <ScrollReveal direction="up">
              <h2 className="text-5xl font-headline font-bold mb-8 uppercase tracking-tighter">Design <br/>Engineering</h2>
              <p className="text-secondary text-lg leading-relaxed mb-12 font-light">
                Using the 'Curated Monolith' philosophy, we craft high-fidelity interfaces that prioritize clarity and tension. We focus on the architecture of typography and the hierarchy of space.
              </p>
              <div className="p-10 bg-surface-container-low border-l-2 border-secondary">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4 text-primary">Creative Focus</p>
                <p className="text-sm font-medium italic leading-relaxed text-on-surface-variant">
                  "Presentation of core components and 3 primary layout directions. We iterate on the selected path until refined."
                </p>
              </div>
            </ScrollReveal>
          </div>
          <div className="md:col-span-6 flex justify-end">
            <ScrollReveal direction="up" delay={0.3} className="w-full max-w-xl aspect-[16/10] bg-surface-container-highest relative overflow-hidden group">
              <div className="absolute inset-0 bg-secondary/5 transition-colors group-hover:bg-secondary/10"></div>
              <div className="h-full w-full flex items-center justify-center p-12">
                <div className="grid grid-cols-3 gap-1 w-full max-w-[200px]">
                  <div className="h-20 bg-primary/10"></div>
                  <div className="h-32 bg-primary/20"></div>
                  <div className="h-16 bg-primary/5"></div>
                </div>
              </div>
              <div className="absolute top-8 right-8">
                <span className="text-[10px] font-bold tracking-widest text-secondary uppercase">Refinement Grid</span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Step 4: Technical Build */}
        <section className="grid grid-cols-1 md:grid-cols-12 items-start gap-16">
          <div className="md:col-span-6 order-2 md:order-1">
            <ScrollReveal direction="up" className="w-full max-w-xl aspect-square bg-[#0F111A] relative overflow-hidden p-16">
              <div className="font-mono text-white/5 text-xs space-y-2">
                <p>const system = new NuvixesEngine();</p>
                <p>system.optimize({'{'} quality: 'elite' {'}'});</p>
                <p>system.deploy();</p>
              </div>
              <div className="absolute bottom-16 right-16">
                <div className="text-secondary font-headline text-8xl font-bold leading-none select-none">CODE</div>
              </div>
            </ScrollReveal>
          </div>
          <div className="md:col-span-5 md:col-start-8 order-1 md:order-2">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-headline font-black text-primary/10">04</span>
                <span className="h-px w-12 bg-primary/20"></span>
              </div>
              <h2 className="text-5xl font-headline font-bold mb-8 uppercase tracking-tighter">Bespoke <br/>Development</h2>
              <p className="text-secondary text-lg leading-relaxed mb-12 font-light">
                Development at Nuvixes is not an afterthought. We translate the design system into robust, performant code, ensuring that the visual precision is matched by technical excellence.
              </p>
              <div className="p-10 bg-surface-container-low border-l-2 border-secondary">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4 text-primary">Technical Standard</p>
                <p className="text-sm font-medium italic leading-relaxed text-on-surface-variant">
                  "Weekly staging site updates. You will see the interface come to life in a secure, performance-optimized environment."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Step 5: Launch */}
        <section className="grid grid-cols-1 md:grid-cols-12 items-start gap-16">
          <div className="md:col-span-1">
            <ScrollReveal direction="right">
              <span className="text-4xl font-headline font-black text-primary/10 block mb-4">05</span>
            </ScrollReveal>
          </div>
          <div className="md:col-span-5">
            <ScrollReveal direction="up">
              <h2 className="text-5xl font-headline font-bold mb-8 uppercase tracking-tighter">Strategic <br/>Deployment</h2>
              <p className="text-secondary text-lg leading-relaxed mb-12 font-light">
                The final transition from creation to reality. We handle the deployment architecture, SEO migration, and performance optimization to ensure a flawless entry into the market.
              </p>
              <div className="p-10 bg-surface-container-low border-l-2 border-secondary">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4 text-primary">Success Metric</p>
                <p className="text-sm font-medium italic leading-relaxed text-on-surface-variant">
                  "Comprehensive CMS training and a 30-day post-launch hyper-care period for any final adjustments."
                </p>
              </div>
            </ScrollReveal>
          </div>
          <div className="md:col-span-6 flex justify-end">
            <ScrollReveal direction="up" delay={0.3} className="w-full max-w-xl aspect-[3/4] bg-surface-container-high relative overflow-hidden flex items-center justify-center border border-outline-variant/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--md-sys-color-secondary)_0%,_transparent_60%)] opacity-10"></div>
              <div className="text-center p-12">
                <span className="text-8xl font-headline font-black text-primary uppercase tracking-tighter block mb-4">MARKET</span>
                <span className="text-sm uppercase tracking-[0.5em] text-secondary font-bold">Entry Defined</span>
              </div>
              <div className="absolute top-12 left-12 h-12 w-px bg-primary/20"></div>
            </ScrollReveal>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="mt-64 py-40 border-t border-outline-variant/20 text-center">
        <ScrollReveal direction="up">
          <h3 className="text-5xl md:text-7xl font-headline font-black mb-12 uppercase tracking-tighter">Ready to <br/>Start the Discovery?</h3>
          <p className="text-secondary text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Our process is rigorous, and we only take on one engagement per quarter to ensure absolute focus.
          </p>
          <Link href="/contact" className="inline-block bg-primary text-white px-16 py-7 text-xs font-bold uppercase tracking-[0.3em] hover:bg-secondary transition-all">
            Inquire for Q4
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
