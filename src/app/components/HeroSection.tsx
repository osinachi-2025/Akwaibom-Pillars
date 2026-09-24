'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const stats = [
{ value: '500+', label: 'Active Members' },
{ value: '15+', label: 'Programs Running' },
{ value: '10', label: 'LGAs Covered' },
{ value: '₦50M+', label: 'Funds Disbursed' }];


export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Hero — Empowering Communities, Building Futures Together">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1e5b02038-1781246483137.png"
          alt="Nigerian community members gathered together in a vibrant outdoor setting, warm sunlight, green landscape, collaborative energy"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        {/* Scrim: dark gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-52 lg:pt-32 lg:pb-56">
        {/* Eyebrow Label */}
        <div className="reveal-on-scroll reveal-delay-1 inline-flex self-start mb-6">
          <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/25 text-xs font-bold uppercase tracking-widest text-white">AKWA IBOM STATE, NIGERIA · EST. 2000

          </span>
        </div>

        {/* Headline */}
        <h1 className="reveal-on-scroll reveal-delay-2 font-display text-hero-xl text-white max-w-4xl leading-tight mb-6">
          Empowering Communities,{' '}
          <span className="italic" style={{ color: 'var(--accent)' }}>
            Building Futures
          </span>{' '}
          Together
        </h1>

        {/* Subheadline */}
        <p className="reveal-on-scroll reveal-delay-3 text-lg text-white/80 max-w-2xl leading-relaxed mb-10">
          <span className="mb-2 block text-base font-bold uppercase tracking-[0.18em] text-white">
            AKWA IBOM PILLARS EMPOWERMENT COOPERATIVE ASSOCIATION
          </span>
          Empowering People, Strengthening Communities, and Uniting Nigerians through Cooperative Enterprise, Skills Development, and Sustainable Economic Opportunities.
        </p>

        {/* CTA Buttons */}
        <div className="reveal-on-scroll reveal-delay-4 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => handleScroll('#about')}
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-foreground bg-white rounded-full hover:bg-muted transition-all duration-200 shadow-lg">
            
            Learn More
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-transparent border-2 border-white/60 rounded-full hover:bg-white/10 transition-all duration-200">
            
            Get Involved
          </button>
        </div>

        {/* Scroll hint */}
        <div className="reveal-on-scroll reveal-delay-5 mt-16 hidden lg:flex items-center gap-2 text-white/40">
          <ChevronDownIcon className="w-4 h-4 animate-bounce" />
          <span className="text-xs font-semibold uppercase tracking-widest">Scroll to explore</span>
        </div>
      </div>

      {/* Floating Stats Bar */}
      <div className="absolute bottom-8 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 z-20">
        <div className="max-w-5xl mx-auto bg-card rounded-2xl shadow-2xl shadow-black/20 px-6 py-5 sm:px-8 sm:py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-border">
            {stats.map((stat, i) =>
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${
              i > 0 ? 'lg:pl-8' : ''}`
              }>
              
                <span className="font-display text-2xl sm:text-3xl font-bold text-primary">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mt-1">
                  {stat.label}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}