import React from 'react';
import { Footer } from './Footer';
import { ArrowLeft, Globe, Database, Layers, Navigation, Shield, Target, History, CheckCircle2, MapPin, Search, Users, ExternalLink } from 'lucide-react';

export type ViewType = 'home' | 'form' | 'products' | 'industries' | 'about';

interface SubPageProps {
  view: ViewType;
  onBack: () => void;
  onStart: () => void;
}

export function SubPage({ view, onBack, onStart }: SubPageProps) {
  const content = {
    products: {
      title: "ArcGIS Platform",
      subtitle: "The World's Most Powerful Mapping & Analytics Software",
      sections: [
        {
          icon: Globe,
          headline: "ArcGIS Online",
          description: "A complete, cloud-based mapping and analysis solution. Use it to create maps, analyze data, and share and collaborate. Get access to workflow-specific apps, maps and data from around the globe, and tools for being mobile in the field.",
          features: ["Cloud-native SaaS", "Instant Collaboration", "Pre-built Solutions"]
        },
        {
          icon: Layers,
          headline: "ArcGIS Pro",
          description: "The world's leading desktop GIS software. ArcGIS Pro is a powerful single-desktop GIS application that is a feature-packed software developed with enhancements and ideas from the ArcGIS Pro user community.",
          features: ["Advanced 2D/3D Mapping", "Statistical Analysis", "Imagery Management"]
        },
        {
          icon: Database,
          headline: "ArcGIS Enterprise",
          description: "The foundational system for GIS and mapping within an organization. It allows you to create, manage, and share geographic data with anyone on any device, anywhere. Deploy on-premises or in your private cloud.",
          features: ["On-prem deployment", "Full Sovereignty", "High Scalability"]
        }
      ]
    },
    industries: {
      title: "Industries We Serve",
      subtitle: "GIS is helping people understand and solve the world's most complex problems.",
      sections: [
        {
          icon: Target,
          headline: "Conservation",
          description: "Protecting biodiversity with GIS. Unlock conservation science and safeguard biodiversity with conservation solutions. Geography is the key to understanding and protecting our natural world.",
          features: ["Habitat Mapping", "Real-time Monitoring", "Resource Tracking"]
        },
        {
          icon: Shield,
          headline: "State & Local Government",
          description: "Remain agile. Meet new challenges. Propel your community forward with GIS. Use locational intelligence to improve public safety, manage resources, and engage citizens effectively.",
          features: ["Public Safety", "Smart Cities", "Urban Planning"]
        },
        {
          icon: Navigation,
          headline: "Utilities",
          description: "Boost efficiency and future readiness. Esri's GIS solutions for electric, gas, and water utilities enable better asset management, network optimization, and improved operational efficiency.",
          features: ["Grid Optimization", "Asset Management", "Field Operations"]
        }
      ]
    },
    about: {
      title: "About Esri",
      subtitle: "The Science of Where™",
      sections: [
        {
          icon: CheckCircle2,
          headline: "Our Mission",
          description: "Esri is built on a philosophy that geographic science and technology can help build a sustainable world. We believe that geography is at the heart of a more resilient and sustainable future.",
          features: ["Innovation Since 1969", "Sustainability Focused", "Science-Driven"]
        },
        {
          icon: History,
          headline: "Corporate History",
          description: "Since 1969, we have supported our customers with geographic science and geospatial analytics. We are the global leader in GIS software, helping over 350,000 organizations see what others can't.",
          features: ["Jack Dangermond, Founder", "Privately Held", "Global Leadership"]
        },
        {
          icon: Search,
          headline: "The Science of Where",
          description: "The Science of Where is the science of us. It is the framework for all we do. Geography is the key to solving the world's most complex problems—climate change, social justice, and economic resilience.",
          features: ["Social Justice", "Climate Action", "Economic Growth"]
        }
      ]
    }
  };

  const activeContent = content[view as keyof typeof content];

  if (!activeContent) return null;

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-secondary antialiased animate-fade-in">
      {/* Navigation Header */}
      <header className="w-full bg-white/95 backdrop-blur-sm border-b border-border-subtle sticky top-0 z-50 py-4 shadow-sm">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button 
              onClick={onBack}
              className="p-2 hover:bg-bg-soft rounded-full transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-4">
              <img src="/esri-logo.png" alt="Esri" className="h-8 md:h-10 w-auto" />
              <div className="h-6 w-px bg-border-subtle ml-2 hidden lg:block"></div>
              <p className="hidden lg:block text-[10px] font-black uppercase tracking-[0.2em] text-secondary/60">The Science of Where</p>
            </div>
          </div>
          <button
            onClick={onStart}
            className="bg-primary hover:bg-primary-dark text-white text-[10px] font-black uppercase tracking-widest py-3 px-8 rounded-sm shadow-md transition-all animate-pulse"
          >
            Apply Now
          </button>
        </div>
      </header>

      {/* Hero Header */}
      <section className="relative py-20 bg-secondary overflow-hidden">
        {/* Subtle Satellite Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10 grayscale">
           <img 
             src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
             alt="" 
             className="w-full h-full object-cover"
           />
        </div>
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-4 tracking-tighter uppercase">
              {activeContent.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
              {activeContent.subtitle}
            </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="flex-grow container mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 gap-16">
          {activeContent.sections.map((section, idx) => (
            <div key={idx} className="group flex flex-col lg:flex-row gap-12 items-start animate-fade-in-up" 
                 style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="lg:w-1/3 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <section.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-display font-black text-secondary tracking-tight uppercase">
                  {section.headline}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {section.features.map((tag, i) => (
                    <span key={i} className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:w-2/3">
                <p className="text-lg text-secondary-light leading-relaxed mb-8">
                  {section.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href={`https://www.esri.com/en-us/search/?q=${encodeURIComponent(section.headline)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-bg-soft border border-border-subtle rounded hover:border-primary transition-colors text-sm font-bold group">
                        Explore {section.headline}
                        <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="https://pro.arcgis.com/en/pro-app/latest/get-started/get-started.htm" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-bg-soft border border-border-subtle rounded hover:border-primary transition-colors text-sm font-bold group">
                        Technical Docs
                        <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
