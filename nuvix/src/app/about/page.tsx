import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function AboutPage() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="px-12 mb-32">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row gap-16 items-end">
          <div className="w-full md:w-7/12">
            <ScrollReveal direction="up">
              <h1 className="text-6xl md:text-9xl font-extrabold tracking-tight text-primary leading-[0.9] mb-12">
                WEBSITES <br/> PEOPLE <br/> <span className="text-secondary italic">TRUST.</span>
              </h1>
            </ScrollReveal>
            <div className="max-w-md ml-auto md:mr-12">
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-on-surface-variant font-light text-xl leading-relaxed mb-8">
                  Nuvixes Studio was founded with a single goal: to help businesses outgrow generic templates and build a serious online presence that attracts high-value clients.
                </p>
                <div className="w-24 h-[2px] bg-secondary"></div>
              </ScrollReveal>
            </div>
          </div>
          <div className="w-full md:w-5/12 aspect-[4/5] bg-surface-container overflow-hidden relative">
            <ScrollReveal direction="up" delay={0.3} height="100%">
              <Image 
                fill
                alt="Nuvixes Studio Founder" 
                className="w-full h-full object-cover grayscale" 
                src="/images/founder.png" 
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="bg-primary text-white py-40 px-12 overflow-hidden">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="text-secondary uppercase tracking-[0.3em] text-[10px] block mb-6">The Founder</span>
            <h2 className="text-4xl font-bold uppercase tracking-widest leading-none">A MISSION <br/> FOR CLARITY</h2>
          </div>
          <div className="md:col-start-6 md:col-span-6">
            <p className="text-2xl font-light text-secondary-fixed-dim leading-snug mb-12">
              When Sky founded Nuvixes Studio, the vision was simple: credibility shouldn't be reserved for massive corporations. Every business deserves a digital identity that commands respect.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
              <div className="space-y-4">
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white">Trust-Centered Design</h4>
                <p className="text-sm text-outline-variant leading-relaxed">We focus on the elements that build immediate authority: professional hierarchy, meaningful white space, and impeccable typography.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white">Business Metrics First</h4>
                <p className="text-sm text-outline-variant leading-relaxed">A beautiful site is useless if it doesn't convert. We design with your business goals—and your clients' needs—at the center of every decision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="py-40 px-12 bg-background">
        <div className="max-w-[1920px] mx-auto">
          <div className="mb-32 flex justify-between items-baseline">
            <h2 className="text-display text-5xl font-extrabold uppercase tracking-tighter">Our Core Pillars</h2>
            <Link href="/process" className="text-[10px] font-bold tracking-widest text-secondary uppercase border-b border-secondary pb-1 hover:text-primary hover:border-primary transition-all">Explore the Method</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/10">
            {/* Pillar 1: Strategic Clarity */}
            <div className="group p-12 bg-surface-container-low min-h-[400px] flex flex-col hover:bg-surface-container-high transition-colors duration-500">
              <span className="text-[10px] font-bold text-secondary mb-8 block">01 / STRATEGY</span>
              <h3 className="text-3xl font-bold tracking-tight mb-6 uppercase">Strategic Clarity</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">
                We strip away the noise to highlight what makes your business unique. Our layouts lead your customers through a clear narrative that builds confidence.
              </p>
            </div>
            {/* Pillar 2: Technical Excellence */}
            <div className="group p-12 bg-surface-container-low min-h-[400px] flex flex-col hover:bg-surface-container-high transition-colors duration-500">
              <span className="text-[10px] font-bold text-secondary mb-8 block">02 / TECH</span>
              <h3 className="text-3xl font-bold tracking-tight mb-6 uppercase">Technical Excellence</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">
                Fast load times, responsive layouts, and secure code. We utilize modern frameworks to ensure your site performs as well as it looks.
              </p>
            </div>
            {/* Pillar 3: Long-term Partnerships */}
            <div className="group p-12 bg-surface-container-low min-h-[400px] flex flex-col hover:bg-surface-container-high transition-colors duration-500">
              <span className="text-[10px] font-bold text-secondary mb-8 block">03 / SUPPORT</span>
              <h3 className="text-3xl font-bold tracking-tight mb-6 uppercase">Ongoing Support</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">
                We don't just launch and leave. We maintain and optimize your site as your business grows, ensuring your digital presence never becomes outdated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface-container-lowest py-60 px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black text-primary tracking-tighter mb-12 uppercase">Build Credibility.</h2>
          <p className="text-xl text-secondary mb-16 max-w-xl mx-auto font-light">
            Ready to outgrow the template and build a presence that commands respect?
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="bg-primary text-white px-12 py-6 text-xs font-bold tracking-[0.3em] uppercase hover:bg-secondary active:scale-95 transition-all duration-300">
              Start Your Project
            </Link>
          </div>
        </div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[120px]"></div>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]"></div>
      </section>
    </main>
  );
}
