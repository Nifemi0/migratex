import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function WorkPage() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <header className="px-12 mb-32 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8">
            <ScrollReveal direction="up">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-[1px] w-8 bg-secondary"></div>
                <span className="font-headline uppercase tracking-[0.3em] text-[10px] text-secondary font-bold">Featured Case Study</span>
              </div>
              <h1 className="font-headline text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-primary leading-[0.9] mb-8">
                WEBSITES <br/> THAT <br/> <span className="text-secondary/40">WORK.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed">
                A portfolio of custom digital solutions built for real business growth. We help established businesses outgrow generic templates.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </header>
      {/* Project Grid */}
      <section className="px-12 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">
          {/* Main Case Study: Gold Minds Tattoo */}
          <div className="lg:col-span-12 group mb-24">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-8 overflow-hidden bg-surface-container relative h-[600px]">
                <ScrollReveal direction="up" height="100%">
                  <div className="absolute top-6 left-6 z-10">
                    <span className="bg-primary/90 text-white text-[8px] font-bold uppercase tracking-[0.3em] px-3 py-1.5 backdrop-blur-sm">Concept</span>
                  </div>
                  <Image 
                    fill
                    alt="Gold Minds Tattoo Studio" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="/work/gold-minds/hero.jpg"
                    priority
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                </ScrollReveal>
              </div>
              <div className="col-span-12 md:col-span-4 flex flex-col justify-end pb-4">
                <ScrollReveal direction="up" delay={0.2}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-headline text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">01 / Branding & UX</span>
                    <span className="font-headline text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">2024</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="font-headline text-4xl font-bold text-primary uppercase">GOLD MINDS TATTOO</h2>
                    <span className="material-symbols-outlined text-secondary">arrow_outward</span>
                  </div>
                  <p className="font-body text-sm text-secondary leading-relaxed mb-8">
                    A complete digital transformation for Boca Raton&apos;s premier award-winning tattoo studio. Built to showcase artist mastery and capture high-value bookings. Explore the full experience see <a href="https://goldmindstattoo.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-primary font-bold border-b border-primary hover:text-secondary hover:border-secondary transition-all">here</a>.
                  </p>
                  <div className="h-[1px] w-full bg-primary/10"></div>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Project Details / Sub-sections */}
          <div className="lg:col-span-6 group">
            <ScrollReveal direction="up" height="100%" className="mb-8 h-[500px]">
              <div className="overflow-hidden bg-surface-container relative h-full">
                <Image 
                  fill 
                  alt="Artist Portfolio" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  src="/work/gold-minds/detail-1.jpg" 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <div className="flex items-center justify-between mb-4">
              <span className="font-headline text-[10px] tracking-widest uppercase text-secondary font-bold">Visual Showcase</span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-headline text-3xl font-bold text-primary uppercase">Artist Portfolios</h3>
              <span className="material-symbols-outlined text-secondary text-sm">arrow_outward</span>
            </div>
            <p className="font-body text-sm text-secondary max-w-sm leading-relaxed">
              High-resolution galleries optimized for mobile discovery, ensuring potential clients see the level of mastery before booking.
            </p>
          </div>

          <div className="lg:col-span-6 group lg:mt-24">
            <ScrollReveal direction="up" delay={0.2} height="100%" className="mb-8 h-[500px]">
              <div className="overflow-hidden bg-surface-container relative h-full">
                <Image 
                  fill 
                  alt="Booking System" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  src="/work/gold-minds/detail-2.jpg" 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <div className="flex items-center justify-between mb-4">
              <span className="font-headline text-[10px] tracking-widest uppercase text-secondary font-bold">Conversion Focus</span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-headline text-3xl font-bold text-primary uppercase">Seamless Booking</h3>
              <span className="material-symbols-outlined text-secondary text-sm translate-y-[2px]">arrow_outward</span>
            </div>
            <p className="font-body text-sm text-secondary max-w-sm leading-relaxed">
              A custom-integrated booking experience that reduced friction and increased deposition conversions for the studio.
            </p>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="mt-48 px-12 py-32 bg-primary-container relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#c7c5cd 0.5px, transparent 0.5px)', backgroundSize: '40px 40px', opacity: 0.1 }}></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-8 uppercase">Ready to outgrow <br/><span className="text-secondary-fixed">the template?</span></h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
            <Link href="/contact" className="bg-white text-primary px-10 py-5 font-headline font-bold text-xs tracking-widest uppercase hover:bg-secondary-fixed transition-colors">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
