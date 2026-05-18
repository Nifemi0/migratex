import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <ScrollReveal direction="up">
              <span className="text-secondary font-manrope uppercase tracking-[0.3em] text-[10px] mb-6 block">Capabilities &amp; Process</span>
              <h1 className="text-5xl md:text-8xl font-bold text-primary tracking-tight leading-[0.95] uppercase">
                Websites <br/>that build <br/>Trust.
              </h1>
            </ScrollReveal>
          </div>
          <div className="md:col-span-4 pb-4">
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-on-surface-variant max-w-sm text-lg leading-relaxed font-light">
                We help businesses outgrow generic templates by building custom digital experiences that make them look established, credible, and worth trusting.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* Main Visual */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-48">
        <ScrollReveal direction="up" height="100%">
          <div className="relative h-[530px] w-full overflow-hidden">
            <Image 
              fill
              className="w-full h-full object-cover grayscale brightness-90" 
              alt="Professional Workspace" 
              src="/images/workspace.png" 
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-primary/10"></div>
            <div className="absolute bottom-12 right-12 bg-white p-8 max-w-xs z-10">
              <p className="text-xs uppercase tracking-widest text-secondary mb-2">Our Goal</p>
              <p className="text-sm font-medium leading-relaxed">We focus on the metrics that matter: credibility, conversion, and long-term brand authority.</p>
            </div>
          </div>
        </ScrollReveal>
      </section>
      {/* Services Bento Grid */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/30">
          {/* Service 1: Custom Web Design */}
          <div className="bg-surface p-12 md:p-24 flex flex-col justify-between group service-hover transition-colors duration-500 hover:bg-surface-container-low relative">
            <div className="absolute top-0 left-0 h-1 w-0 bg-secondary transition-all duration-700 hover-bar group-hover:w-full"></div>
            <div>
              <span className="text-secondary font-bold text-4xl font-headline mb-12 block opacity-20 group-hover:opacity-100 transition-opacity">01</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 uppercase">Custom Web Design</h2>
              <p className="text-secondary mb-8 uppercase tracking-widest text-xs font-bold">Credibility & Growth</p>
              <p className="text-on-surface-variant max-w-md mb-12 leading-relaxed">
                Unique, professional websites built from the ground up to reflect your brand's authority. No generic templates—just high-performance design that turns visitors into clients.
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Outcome</p>
              <p className="text-sm font-semibold text-primary">An established online presence that builds immediate trust with high-value audiences.</p>
            </div>
          </div>
          {/* Service 2: SEO */}
          <div className="bg-surface-container-low p-12 md:p-24 flex flex-col justify-between group service-hover transition-colors duration-500 hover:bg-surface relative">
            <div className="absolute top-0 left-0 h-1 w-0 bg-secondary transition-all duration-700 hover-bar group-hover:w-full"></div>
            <div>
              <span className="text-secondary font-bold text-4xl font-headline mb-12 block opacity-20 group-hover:opacity-100 transition-opacity">02</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 uppercase">Search Engine Optimization</h2>
              <p className="text-secondary mb-8 uppercase tracking-widest text-xs font-bold">Visibility & Ranking</p>
              <p className="text-on-surface-variant max-w-md mb-12 leading-relaxed">
                Strategic SEO designed to put your business in front of customers who are actively searching for your services. We optimize for high-intent keywords and local dominance.
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Outcome</p>
              <p className="text-sm font-semibold text-primary">Increased organic traffic and a stronger competitive position in your local market.</p>
            </div>
          </div>
          {/* Service 3: Maintenance */}
          <div className="bg-surface-container-high p-12 md:p-24 flex flex-col justify-between group service-hover transition-colors duration-500 hover:bg-surface relative">
            <div className="absolute top-0 left-0 h-1 w-0 bg-secondary transition-all duration-700 hover-bar group-hover:w-full"></div>
            <div>
              <span className="text-secondary font-bold text-4xl font-headline mb-12 block opacity-20 group-hover:opacity-100 transition-opacity">03</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 uppercase">Site Maintenance &amp; Support</h2>
              <p className="text-secondary mb-8 uppercase tracking-widest text-xs font-bold">Security & Performance</p>
              <p className="text-on-surface-variant max-w-md mb-12 leading-relaxed">
                Ongoing support to keep your site fast, secure, and always accessible. We handle the technical maintenance so you can focus entirely on running your business.
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Outcome</p>
              <p className="text-sm font-semibold text-primary">A robust digital asset that remains updated, functional, and secure year-round.</p>
            </div>
          </div>
          {/* Service 4: Brand Strategy */}
          <div className="bg-primary-container p-12 md:p-24 flex flex-col justify-between group service-hover relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-0 bg-secondary-container transition-all duration-700 hover-bar group-hover:w-full"></div>
            <div className="relative z-10">
              <span className="text-secondary-container font-bold text-4xl font-headline mb-12 block opacity-40">04</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase">Brand Strategy &amp; UX</h2>
              <p className="text-secondary-container mb-8 uppercase tracking-widest text-xs font-bold">Positioning & Tone</p>
              <p className="text-slate-300 max-w-md mb-12 leading-relaxed">
                Defining the visual language and messaging that anchors your brand. We ensure your digital presence speaks to your audience with confidence and clarity.
              </p>
            </div>
            <div className="relative z-10">
              <p className="text-[10px] uppercase tracking-widest text-secondary-container mb-2">Outcome</p>
              <p className="text-sm font-semibold text-white">A cohesive brand identity that resonates with high-value clients across all digital channels.</p>
            </div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
      {/* Engagement Section */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto pb-32">
        <div className="relative bg-primary-container h-[600px] overflow-hidden flex items-center px-12 md:px-24">
          <div className="absolute inset-0 opacity-40">
            <Image 
              fill
              alt="Professional Meeting" 
              className="w-full h-full object-cover grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAymmnAzlvIPhZIo01zE5viegm2_NYXp3ZczQHLRWcKeLPGYaJF1Vp0xSQlkktjQ5A_ZbW7sC66pETjZ4zVnLDroz5XXsIFzidvbLuC1R4iP5QndgWW-Q1HSTGq4Xyhrn-CA8nUvXtZ0X-KcgT5divX1QU4bAxtUI16elL40GUDJwpl6Vxdd2IQrGkJvLEW3yOv435ESt7aVrw2FDkzOyn7SAYkD6-tjRJrJbf6zd-rPmlJUkcCS2mcSi1QtR5cjzIhAtL5jNTXvg2E" 
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.2em] text-secondary-fixed mb-6 block">Engagement</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">READY TO BUILD <br/> A TRUSTED PRESENCE?</h2>
            <Link href="/contact" className="inline-block px-10 py-5 bg-white text-primary font-bold uppercase tracking-widest text-xs hover:bg-secondary-fixed transition-colors">
              Book a Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
