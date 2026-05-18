import React from 'react';
import { ArrowRight, Globe, MapPin, Users, Zap, CheckCircle, Shield, Award, Menu } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-bg-base flex flex-col font-sans text-secondary antialiased overflow-x-hidden">
      {/* Decorative background element */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{ backgroundImage: 'radial-gradient(#007ac2 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      {/* Header */}
      <header className="w-full bg-white/90 backdrop-blur-md border-b border-border-subtle sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 transform transition-transform hover:scale-105">
            <img src="/esri-logo.png" alt="Esri" className="h-6 md:h-8 w-auto" />
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-secondary-light">
            <a href="#" className="hover:text-primary transition-colors">Career Path</a>
            <a href="#" className="hover:text-primary transition-colors">Our Values</a>
            <a href="#" className="hover:text-primary transition-colors">Benefits</a>
          </nav>
          <div className="flex items-center gap-3">
            <button 
              onClick={onStart}
              className="bg-primary hover:bg-primary-dark text-white text-[10px] md:text-xs font-bold uppercase tracking-widest py-2 px-4 md:px-6 rounded shadow-sm transition-all active:scale-95"
            >
              Apply
            </button>
            <button className="lg:hidden p-1 text-secondary-light">
                <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 pb-16 md:pb-28 overflow-hidden z-10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Remote Operations Team
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-display font-black text-secondary mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] tracking-tight animate-fade-in-up px-2">
            See What <br className="hidden sm:block" />
            <span className="text-primary italic">Others Can't.</span>
          </h1>
          
          <p className="text-base md:text-xl text-secondary-light mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up px-4" style={{ animationDelay: '0.1s' }}>
            Esri is the global leader in location intelligence. Join our dedicated remote team and power the world's maps.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-6 animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
            <button 
              onClick={onStart}
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white text-xs md:text-sm font-bold uppercase tracking-widest py-4 md:py-5 px-8 md:px-12 rounded shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-3 group"
            >
              Begin Application
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-3 text-secondary-light text-[10px] md:text-sm font-medium">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white bg-bg-soft flex items-center justify-center overflow-hidden">
                    <Users className="w-3 h-3 md:w-4 md:h-4 text-primary-light" />
                  </div>
                ))}
              </div>
              <span>Join 500+ remote associates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Values Section */}
      <section className="py-12 md:py-24 bg-white border-y border-border-subtle relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: Globe, label: "Reach", value: "160+ Countries", color: "text-blue-500" },
              { icon: Shield, label: "Stability", value: "Est. 1969", color: "text-green-500" },
              { icon: Award, label: "Leader", value: "#1 in GIS", color: "text-amber-500" },
              { icon: Zap, label: "R&D", value: "30% Rev.", color: "text-purple-500" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className={`mb-3 md:mb-4 p-2 md:p-3 rounded-xl bg-bg-soft group-hover:bg-primary group-hover:text-white transition-all duration-300 ${stat.color}`}>
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="text-lg md:text-2xl font-black text-secondary mb-1 tracking-tight">{stat.value}</div>
                <div className="text-[8px] md:text-[10px] font-bold text-secondary-light uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Details with Mobile-First Grid */}
      <section className="py-16 md:py-28 relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl font-display font-black text-secondary leading-tight">
                Work at the Intersection of <br className="hidden md:block" />
                <span className="underline decoration-primary decoration-4 underline-offset-8">Data and Geography</span>
              </h2>
              <p className="text-base md:text-lg text-secondary-light leading-relaxed">
                As a Remote Data Associate, you'll ensure the high-quality data our clients rely on for disaster response and urban planning.
              </p>
              
              <div className="space-y-3 md:space-y-4 inline-block text-left mx-auto lg:mx-0">
                {[
                  "Competitive compensation",
                  "Flexible working hours",
                  "Comprehensive training",
                  "Global project impact"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    <span className="font-semibold text-sm md:text-base text-secondary-light">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-1.5 md:p-2 rounded-2xl shadow-2xl border border-border-subtle lg:rotate-1 hover:rotate-0 transition-transform duration-500 max-w-lg mx-auto w-full">
              <div className="bg-secondary rounded-xl p-6 md:p-8 text-white">
                <h3 className="text-lg md:text-xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-1.5 md:w-2 h-6 md:h-8 bg-primary rounded-full"></div>
                  Hiring Process
                </h3>
                <div className="space-y-6 md:space-y-8">
                  <div className="flex gap-4">
                    <div className="font-display font-black text-primary text-3xl md:text-4xl opacity-50">01</div>
                    <div>
                      <div className="font-bold text-base md:text-lg mb-0.5">Apply Now</div>
                      <div className="text-white/60 text-xs md:text-sm">Submit your details via our secure form.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="font-display font-black text-primary text-3xl md:text-4xl opacity-50">02</div>
                    <div>
                      <div className="font-bold text-base md:text-lg mb-0.5">Review</div>
                      <div className="text-white/60 text-xs md:text-sm">Team evaluates your profile in 48h.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="font-display font-black text-primary text-3xl md:text-4xl opacity-50">03</div>
                    <div>
                      <div className="font-bold text-base md:text-lg mb-0.5">Start</div>
                      <div className="text-white/60 text-xs md:text-sm">Receive credentials and begin.</div>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={onStart}
                  className="w-full mt-8 md:mt-10 bg-primary hover:bg-primary-light text-white text-xs md:text-sm font-bold uppercase tracking-widest py-4 rounded transition-colors shadow-lg shadow-primary/20"
                >
                  Start Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Optimization */}
      <footer className="bg-secondary text-white py-12 md:py-16 mt-auto border-t border-white/5 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <img src="/esri-logo.png" alt="Esri" className="h-6 w-auto brightness-0 invert" />
              <div className="h-6 w-px bg-white/20 hidden md:block"></div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">The Science of Where</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] font-bold uppercase tracking-widest text-white/40">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Legal</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
          <div className="mt-8 md:mt-12 pt-8 border-t border-white/5 text-center px-4">
            <p className="text-[9px] md:text-[10px] text-white/20 font-medium leading-relaxed">
              &copy; {new Date().getFullYear()} Esri. All rights reserved. 
              The Esri globe logo and The Science of Where are trademarks of Esri.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
