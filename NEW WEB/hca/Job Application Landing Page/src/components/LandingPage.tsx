import React from 'react';
import { ArrowRight, Globe, MapPin, Users, Zap, CheckCircle, Shield, Award, Menu, BarChart3, Database, Layers, Navigation, ChevronRight } from 'lucide-react';
import { ViewType } from './SubPage';
import { Footer } from './Footer';

interface LandingPageProps {
  onStart: () => void;
  onNavigate: (target: ViewType) => void;
}

export function LandingPage({ onStart, onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-secondary antialiased overflow-x-hidden">
      {/* Dynamic Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-0"
           style={{
             backgroundImage: `linear-gradient(#007ac2 1px, transparent 1px), linear-gradient(90deg, #007ac2 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }}>
      </div>
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0"
           style={{
             backgroundImage: `radial-gradient(circle, #007ac2 1px, transparent 1px)`,
             backgroundSize: '10px 10px'
           }}>
      </div>

      {/* Top Utility Nav */}
      <div className="w-full bg-secondary text-white/70 py-2 hidden md:block relative z-50">
        <div className="container mx-auto px-4 md:px-8 flex justify-end gap-6 text-[10px] font-bold uppercase tracking-widest">
            <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors cursor-pointer">ArcGIS</button>
            <a href="https://support.esri.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Support</a>
            <a href="https://www.esri.com/en-us/contact" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact Us</a>
            <a href="https://www.esri.com/en-us/arcgis/products/arcgis-online/sign-in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Sign In</a>
        </div>
      </div>

      {/* Main Header */}
      <header className="w-full bg-white/95 backdrop-blur-sm border-b border-border-subtle sticky top-0 z-50 py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 transition-all hover:opacity-80 cursor-pointer" onClick={() => onNavigate('home')}>
            <img src="/esri-logo.png" alt="Esri" className="h-10 md:h-14 w-auto object-contain" />
            <div className="hidden lg:block h-8 w-px bg-border-subtle mx-2"></div>
            <p className="hidden lg:block text-[11px] font-black uppercase tracking-[0.2em] text-secondary/60">The Science of Where</p>
          </div>
          <nav className="hidden xl:flex items-center gap-10 text-xs font-black uppercase tracking-widest text-secondary">
            <button onClick={() => onNavigate('products')} className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary py-1 cursor-pointer">Products</button>
            <button onClick={() => onNavigate('industries')} className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary py-1 cursor-pointer">Industries</button>
            <button className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary py-1 opacity-50 cursor-not-allowed">Success Stories</button>
            <button onClick={() => onNavigate('about')} className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary py-1 cursor-pointer">About</button>
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={onStart}
              className="bg-primary hover:bg-primary-dark text-white text-[11px] font-black uppercase tracking-widest py-3 px-8 rounded-sm shadow-md transition-all active:scale-95"
            >
              Apply Now
            </button>
            <button className="xl:hidden p-2 text-secondary">
                <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Enterprise Style */}
      <section className="relative pt-20 md:pt-32 pb-24 md:pb-40 overflow-hidden z-10">
        {/* Official Esri Hero Video (Blended) */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-15 contrast-125"
        >
          <source 
            src="https://www.esri.com/content/dam/esrisites/en-us/arcgis/about-arcgis/images/about-arcgis-hero-video.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Satellite Background blend */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000"
            alt="Satellite Map Background"
            className="w-full h-full object-cover opacity-10 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Join the Global Leader
            </div>

            <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-black text-secondary mb-8 leading-[1.05] tracking-tighter">
              ArcGIS: <br />
              <span className="text-primary">Enterprise</span> <br />
              Technology.
            </h1>

            <p className="text-xl md:text-2xl text-secondary-light mb-12 max-w-2xl leading-relaxed font-medium">
              Esri is the global leader in location intelligence. Join our remote team and help organizations see what others can't.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-6">
              <button
                onClick={onStart}
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white text-xs font-black uppercase tracking-[0.2em] py-5 px-12 rounded-sm shadow-xl transition-all flex items-center justify-center gap-4 group"
              >
                Learn About Careers
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
              </button>
              <div className="flex items-center gap-4 py-4">
                <div className="h-12 w-px bg-border-subtle"></div>
                <div>
                  <div className="text-sm font-black uppercase tracking-wider text-secondary">Remote Associate Program</div>
                  <div className="text-xs text-secondary-light">Global Impact, Local Flexibility</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Powered by The Platform Section */}
      <section className="bg-secondary py-24 px-6 relative overflow-hidden">
         <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-white text-4xl md:text-6xl font-black mb-16 tracking-tighter">Powered by <br/><span className="text-primary">The Platform.</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { icon: Database, title: "Data Integration", desc: "Connecting disparate data through geography." },
                 { icon: Layers, title: "GIS Analysis", desc: "Revealing deep patterns and relationships." },
                 { icon: Navigation, title: "Real-time Ops", desc: "Instant situational awareness globally." }
               ].map((item, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-all group">
                    <item.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
         {/* Decorative motto */}
         <div className="absolute bottom-10 right-10 flex items-center gap-3 opacity-20">
            <span className="text-white text-xs font-bold tracking-[0.5em] uppercase">The Science of Where</span>
         </div>
      </section>

      <Footer />
    </div>
  );
}

