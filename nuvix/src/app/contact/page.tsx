'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <main className="pt-32 pb-0 flex-grow flex flex-col">
      <div className="flex-grow flex flex-col md:flex-row w-full max-w-[1920px] mx-auto px-6 md:px-12 mb-24 md:mb-0">
        {/* Left Form Area */}
        <div className="w-full md:w-1/2 md:pr-16 lg:pr-32 flex flex-col justify-center py-12">
          <ScrollReveal direction="up">
            <div className="mb-16">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-secondary mb-4 block">Connection</span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-primary tracking-tighter leading-[0.9] mb-6">
                LETS BUILD <br/> SOMETHING <br/> <span className="text-secondary tracking-tight italic">REAL.</span>
              </h1>
              <p className="text-on-surface-variant text-lg font-light max-w-md">
                We help businesses outgrow generic templates. Fill out the form below and Sky will be in touch within 24 hours.
              </p>
            </div>
          </ScrollReveal>

          {status === 'success' ? (
            <ScrollReveal direction="up">
              <div className="bg-surface-container-high p-12 border border-secondary/20">
                <h2 className="text-3xl font-headline font-bold uppercase mb-4">Message Received.</h2>
                <p className="text-secondary leading-relaxed mb-8">
                  Thank you for reaching out. Sky has been notified and will review your objective. Expect a response at your business email within one business day.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-xs font-bold uppercase tracking-widest border-b border-primary pb-1"
                >
                  Send another message
                </button>
              </div>
            </ScrollReveal>
          ) : (
            <form 
              onSubmit={handleSubmit}
              name="contact"
              className="space-y-12"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" /></label>
              </p>
              <div className="relative group">
                <input className="w-full bg-transparent border-0 border-b border-outline-variant/40 rounded-none py-4 px-0 text-primary text-xl focus:ring-0 focus:border-secondary transition-colors peer placeholder-transparent" id="name" name="name" placeholder="Name" required type="text" />
                <label className="absolute left-0 top-4 text-on-surface-variant/50 text-xl font-light transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-secondary peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-6 peer-valid:text-xs peer-valid:uppercase peer-valid:tracking-widest" htmlFor="name">Full Name</label>
              </div>
              <div className="relative group">
                <input className="w-full bg-transparent border-0 border-b border-outline-variant/40 rounded-none py-4 px-0 text-primary text-xl focus:ring-0 focus:border-secondary transition-colors peer placeholder-transparent" id="email" name="email" placeholder="Email" required type="email" />
                <label className="absolute left-0 top-4 text-on-surface-variant/50 text-xl font-light transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-secondary peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-6 peer-valid:text-xs peer-valid:uppercase peer-valid:tracking-widest" htmlFor="email">Business Email</label>
              </div>
              <div className="relative group">
                <textarea className="w-full bg-transparent border-0 border-b border-outline-variant/40 rounded-none py-4 px-0 text-primary text-xl focus:ring-0 focus:border-secondary transition-colors peer placeholder-transparent resize-none" id="objective" name="objective" placeholder="Objective" required rows={3}></textarea>
                <label className="absolute left-0 top-4 text-on-surface-variant/50 text-xl font-light transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-secondary peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-6 peer-valid:text-xs peer-valid:uppercase peer-valid:tracking-widest" htmlFor="objective">How can we help?</label>
              </div>
              {/* Timeline Selection */}
              <div className="pt-4">
                <p className="text-xs uppercase tracking-widest font-bold text-primary mb-6">Anticipated Start</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <label className="cursor-pointer">
                    <input className="peer sr-only" name="timeline" type="radio" value="asap" />
                    <div className="border border-outline-variant/30 text-center py-3 text-sm font-bold text-on-surface-variant peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary hover:bg-surface-container transition-all uppercase tracking-widest">ASAP</div>
                  </label>
                  <label className="cursor-pointer">
                    <input className="peer sr-only" name="timeline" type="radio" value="1-3-months" />
                    <div className="border border-outline-variant/30 text-center py-3 text-sm font-bold text-on-surface-variant peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary hover:bg-surface-container transition-all uppercase tracking-widest">1-3 Months</div>
                  </label>
                  <label className="cursor-pointer">
                    <input className="peer sr-only" name="timeline" type="radio" value="flexible" />
                    <div className="border border-outline-variant/30 text-center py-3 text-sm font-bold text-on-surface-variant peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary hover:bg-surface-container transition-all uppercase tracking-widest">Flexible</div>
                  </label>
                </div>
              </div>
              <button 
                disabled={status === 'loading'}
                className="w-full bg-primary text-white py-6 mt-8 text-sm font-bold uppercase tracking-[0.2em] hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
                type="submit"
              >
                {status === 'loading' ? 'Sending...' : 'Start Conversation'}
              </button>
              {status === 'error' && (
                <p className="text-error text-xs font-bold uppercase tracking-widest mt-4">Something went wrong. Please try again or email sky@nuvixes.studio directly.</p>
              )}
            </form>
          )}
        </div>
        {/* Right Info Area & Image */}
        <div className="w-full md:w-1/2 relative bg-surface-container h-[530px] md:h-auto overflow-hidden group">
          <ScrollReveal direction="up" height="100%">
            <Image 
              fill
              alt="Nuvixes Studio Environment" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 transition-transform duration-1000 group-hover:scale-110" 
              src="/images/contact-hero.png" 
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </ScrollReveal>
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10"></div>
          {/* Overlay Info Block */}
          <div className="absolute bottom-0 left-0 bg-white p-8 md:p-12 w-full max-w-sm z-20">
            <div className="mb-8 border-b border-outline-variant/20 pb-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-2">Location</span>
              <p className="text-xl font-bold tracking-tight text-primary uppercase">Global / Remote</p>
              <p className="text-sm text-on-surface-variant mt-1 font-light">Working with businesses everywhere.</p>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-2">Direct Reach</span>
              <a className="block text-2xl font-bold tracking-tight text-primary hover:text-secondary transition-colors" href="mailto:sky@nuvixes.studio">sky@nuvixes.studio</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
