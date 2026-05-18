import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from 'next/link';

export default function LuminaCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1240px] mx-auto px-8 md:px-16 pt-48 pb-24">
        {/* Project Header */}
        <header className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-8">
              <div className="flex gap-4 mb-8">
                <span className="text-[10px] font-bold tracking-[0.2em] text-primary bg-primary/5 px-2 py-1 uppercase">FIG 01.</span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#8A8D9F] px-2 py-1 uppercase">FINTECH / MILANO</span>
              </div>
              <h1 className="text-6xl md:text-[7rem] font-bold tracking-tight leading-[0.85] text-primary uppercase mb-12">
                Lumina<br />Capital.
              </h1>
            </div>
            <div className="md:col-span-4 border-l border-primary/10 pl-8 mb-4">
              <p className="text-xl text-secondary leading-relaxed font-light italic">
                "A digital fortress for high-frequency trading and algorithmic wealth management. Built on the principles of absolute transparency."
              </p>
            </div>
          </div>
        </header>

        {/* Progress Track (Case Study Version) */}
        <div className="w-full h-px bg-primary/10 mb-24 relative">
          <div className="absolute top-0 left-0 h-[2px] bg-primary w-2/3"></div>
        </div>

        {/* Project Meta */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 pb-16 border-b border-primary/5">
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-[#8A8D9F] mb-2 uppercase">Client</h4>
            <p className="text-sm font-bold uppercase">Lumina Quant Research</p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-[#8A8D9F] mb-2 uppercase">Services</h4>
            <p className="text-sm font-bold uppercase">Strategy / Platform / UI</p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-[#8A8D9F] mb-2 uppercase">Year</h4>
            <p className="text-sm font-bold uppercase">2024</p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-[#8A8D9F] mb-2 uppercase">Status</h4>
            <p className="text-sm font-bold uppercase">Complete</p>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="grid grid-cols-12 gap-12 mb-48">
          <div className="col-span-12 md:col-span-5">
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-8">The Challenge</h2>
          </div>
          <div className="col-span-12 md:col-start-7 md:col-span-6">
            <p className="text-2xl text-primary leading-snug mb-12 font-light">
              Lumina Capital required a platform that didn't just display data, but communicated institutional authority. The previous interface was cluttered, reactive, and failed to differentiate them from consumer-grade fintech apps.
            </p>
            <div className="space-y-6 text-[#46464C]">
              <p>We needed to translate 'High-Frequency' into 'High-Trust'. This required a complete rejection of SaaS-standard patterns—no rounded corners, no vibrant gradients, and no unnecessary animations.</p>
              <p>Our solution was to embrace the 'Curated Monolith'—a design system based on archival research journals and brutalist architecture. The result is an interface that feels permanent and immovable.</p>
            </div>
          </div>
        </section>

        {/* Large Imagery Area */}
        <section className="space-y-4 mb-48">
          <div className="aspect-[21/9] bg-surface-container-high relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-all duration-1000"></div>
            <div className="h-full w-full flex items-center justify-center">
              <div className="text-8xl font-black text-primary opacity-5 uppercase tracking-[0.5em]">MONOLITH</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-surface-container relative overflow-hidden group">
               <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-all duration-1000"></div>
               <div className="h-full w-full flex items-center justify-center">
                <div className="text-2xl font-bold text-primary opacity-10 uppercase tracking-widest">Interface A</div>
              </div>
            </div>
            <div className="aspect-square bg-surface-container-low relative overflow-hidden group">
               <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-all duration-1000"></div>
               <div className="h-full w-full flex items-center justify-center">
                <div className="text-2xl font-bold text-primary opacity-10 uppercase tracking-widest">Interface B</div>
              </div>
            </div>
          </div>
        </section>

        {/* Results / Execution */}
        <section className="bg-primary text-white p-12 md:p-24 mb-48">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-white/40 mb-12 block uppercase">THE EXECUTION</span>
              <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-none mb-12">Precision at scale.</h3>
              <p className="text-xl text-white/70 font-light leading-relaxed">
                We developed a custom data visualization engine that rendered millions of data points with zero latency. Every typographic choice was audited for legibility under high-stress trading conditions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h5 className="text-4xl font-bold mb-2">0.02s</h5>
                <p className="text-[10px] tracking-widest text-white/40 font-bold uppercase">AVG LATENCY</p>
              </div>
              <div>
                <h5 className="text-4xl font-bold mb-2">+12%</h5>
                <p className="text-[10px] tracking-widest text-white/40 font-bold uppercase">USER RETENTION</p>
              </div>
              <div>
                <h5 className="text-4xl font-bold mb-2">4.8k</h5>
                <p className="text-[10px] tracking-widest text-white/40 font-bold uppercase">ACTIVE ENTITIES</p>
              </div>
              <div>
                <h5 className="text-4xl font-bold mb-2">GOLD</h5>
                <p className="text-[10px] tracking-widest text-white/40 font-bold uppercase">FINTECH DESIGN AWARD</p>
              </div>
            </div>
          </div>
        </section>

        {/* Global CTA */}
        <section className="text-center py-24 border-t border-primary/5">
          <span className="text-[10px] font-bold tracking-widest text-[#8A8D9F] mb-8 block uppercase">NEXT ARCHIVE</span>
          <Link href="/work" className="group">
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-primary group-hover:opacity-70 transition-opacity">Vector Collective &rarr;</h2>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
