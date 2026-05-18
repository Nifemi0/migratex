import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Home() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="px-8 md:px-12 py-24 md:py-40 max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-10 lg:col-span-8">
          <ScrollReveal direction="up">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-headline font-bold leading-[0.9] tracking-tighter text-primary mb-12">
              Websites people trust.
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-xl md:text-2xl font-body text-secondary max-w-2xl leading-relaxed">
              We build custom websites for businesses ready to grow online. No templates. No shortcuts. Just results.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <div className="mt-16 flex gap-8">
              <Link href="/work" className="bg-primary text-on-primary px-10 py-5 font-headline font-bold uppercase tracking-widest text-sm hover:scale-[1.02] active:translate-y-1 transition-all">
                View Our Work
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Selected Works: Editorial Grid */}
      <section className="bg-surface-container-low py-32">
        <div className="px-8 md:px-12 max-w-[1920px] mx-auto">
          <ScrollReveal direction="up">
            <div className="flex justify-between items-end mb-20 border-b border-outline-variant pb-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-headline text-secondary mb-2 block">Featured Project</span>
                <h2 className="text-4xl font-headline font-medium uppercase">Recent Work</h2>
              </div>
              <Link className="text-xs uppercase tracking-widest font-headline font-bold border-b-2 border-primary pb-1" href="/work">View All Projects</Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Main Featured Project: Gold Minds Tattoo */}
            <div className="md:col-span-12 flex flex-col gap-8 group">
              <ScrollReveal direction="up" delay={0.2}>
                <div className="overflow-hidden bg-surface-container-highest relative aspect-[21/9]">
                  <div className="absolute top-6 left-6 z-10">
                    <span className="bg-primary/90 text-white text-[8px] font-bold uppercase tracking-[0.3em] px-3 py-1.5 backdrop-blur-sm">Concept</span>
                  </div>
                  <Image 
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                    alt="Gold Minds Tattoo Studio" 
                    src="/work/gold-minds/hero.jpg"
                    priority
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-4xl md:text-6xl font-headline font-bold uppercase tracking-tight">Gold Minds Tattoo</h3>
                      <span className="material-symbols-outlined text-secondary translate-y-[2px]">arrow_outward</span>
                    </div>
                    <p className="text-lg text-secondary mt-2 leading-relaxed">
                      A complete digital presence for Boca Raton's premier award-winning tattoo studio. Built for high conversion, artist showcase, and seamless booking. Explore the live site see <a href="https://goldmindstattoo.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-primary font-bold border-b border-primary hover:text-secondary hover:border-secondary transition-all">here</a>.
                    </p>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <span className="px-4 py-2 border border-outline-variant text-[10px] uppercase font-bold tracking-widest">Web Design</span>
                    <span className="px-4 py-2 border border-outline-variant text-[10px] uppercase font-bold tracking-widest">Booking System</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Disciplines: Business Focused */}
      <section className="py-32 px-8 md:px-12 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 sticky top-40">
            <ScrollReveal direction="right">
              <span className="text-[10px] uppercase tracking-[0.3em] font-headline text-secondary mb-2 block">Capabilities</span>
              <h2 className="text-5xl font-headline font-bold leading-tight uppercase mb-8">Our <br/>Disciplines</h2>
              <p className="text-lg text-secondary leading-relaxed">
                We help local businesses and startups outgrow generic templates and build a serious online presence that attracts high-value clients.
              </p>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-1">
            {/* Discipline 1: Web Design */}
            <div className="bg-surface-container-low p-12 hover:bg-surface-container-high transition-colors group">
              <span className="text-4xl font-headline font-black text-outline-variant mb-6 block group-hover:text-primary transition-colors">01</span>
              <h3 className="text-3xl font-headline font-bold mb-4 uppercase">Web Design & Development</h3>
              <p className="text-secondary leading-relaxed max-w-xl">
                Custom-built websites designed to make your business look credible and refined. We focus on clarity, trust, and professional presentation from day one.
              </p>
            </div>
            {/* Discipline 2: SEO */}
            <div className="bg-surface-container-low p-12 hover:bg-surface-container-high transition-colors group">
              <span className="text-4xl font-headline font-black text-outline-variant mb-6 block group-hover:text-primary transition-colors">02</span>
              <h3 className="text-3xl font-headline font-bold mb-4 uppercase">Search Engine Optimization</h3>
              <p className="text-secondary leading-relaxed max-w-xl">
                Strategic SEO that puts your business in front of the right audience. We optimize for local search and industry dominance to ensure you're seen by ready-to-buy clients.
              </p>
            </div>
            {/* Discipline 3: Maintenance */}
            <div className="bg-surface-container-low p-12 hover:bg-surface-container-high transition-colors group">
              <span className="text-4xl font-headline font-black text-outline-variant mb-6 block group-hover:text-primary transition-colors">03</span>
              <h3 className="text-3xl font-headline font-bold mb-4 uppercase">Reliability & Maintenance</h3>
              <p className="text-secondary leading-relaxed max-w-xl">
                Ongoing support to keep your site fast, secure, and up-to-date. We handle the technical details so you can focus on running your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Preview: Real Insights */}
      <section className="bg-primary text-on-primary py-32">
        <div className="px-8 md:px-12 max-w-[1920px] mx-auto">
          <ScrollReveal direction="up">
            <div className="mb-20">
              <span className="text-[10px] uppercase tracking-[0.3em] font-headline text-on-primary-container mb-2 block">Insights</span>
              <h2 className="text-4xl font-headline font-medium uppercase">The Journal</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <ScrollReveal direction="up" delay={0.1}>
              <Link href="/journal/template-credibility" className="bg-[#1E2030] p-10 flex flex-col justify-between h-[450px] border border-white/5 hover:bg-[#252839] transition-all cursor-pointer block group">
                <div>
                  <span className="text-[10px] text-on-primary-container uppercase tracking-widest font-bold">Nov 24</span>
                  <h3 className="text-2xl font-headline font-bold mt-4 leading-snug uppercase group-hover:text-secondary transition-colors">Why Templates Kill Business Credibility</h3>
                </div>
                <span className="material-symbols-outlined text-4xl font-light translate-y-[2px] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">arrow_outward</span>
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <Link href="/journal/roi-of-custom-dev" className="bg-[#1E2030] p-10 flex flex-col justify-between h-[450px] border border-white/5 hover:bg-[#252839] transition-all cursor-pointer block group">
                <div>
                  <span className="text-[10px] text-on-primary-container uppercase tracking-widest font-bold">Oct 24</span>
                  <h3 className="text-2xl font-headline font-bold mt-4 leading-snug uppercase group-hover:text-secondary transition-colors">The ROI of Custom Web Development</h3>
                </div>
                <span className="material-symbols-outlined text-4xl font-light translate-y-[2px] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">arrow_outward</span>
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <Link href="/journal/currency-of-trust" className="bg-[#1E2030] p-10 flex flex-col justify-between h-[450px] border border-white/5 hover:bg-[#252839] transition-all cursor-pointer block group">
                <div>
                  <span className="text-[10px] text-on-primary-container uppercase tracking-widest font-bold">Sept 24</span>
                  <h3 className="text-2xl font-headline font-bold mt-4 leading-snug uppercase group-hover:text-secondary transition-colors">The Currency of Trust</h3>
                </div>
                <span className="material-symbols-outlined text-4xl font-light translate-y-[2px] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">arrow_outward</span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-8 md:px-12 text-center bg-[#F4F3F1]">
        <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tight mb-12">Let&apos;s build something <br/>that works.</h2>
        <Link href="/contact" className="inline-block bg-primary text-on-primary px-16 py-6 font-headline font-bold uppercase tracking-[0.2em] text-xs hover:bg-secondary transition-all">
          Start a Conversation
        </Link>
      </section>
    </main>
  );
}



