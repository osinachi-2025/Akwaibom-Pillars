'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const testimonials = [
{
  quote:
  'Before joining AIPECA, I struggled to grow my palm oil business. After accessing a micro-loan and attending their entrepreneurship training, I now supply three markets in Uyo. This cooperative changed my life.',
  name: 'Ngozi Okafor',
  role: 'Palm Oil Trader',
  location: 'Uyo LGA',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e3e7df2c-1772130081621.png",
  imageAlt: 'Portrait of a Nigerian woman trader, warm smile, outdoor market background'
},
{
  quote:
  'The agricultural support program gave me access to improved seedlings and connected me to buyers I never knew existed. My cassava yield doubled in the first season. AIPECA is the real deal.',
  name: 'Akpan Inyang',
  role: 'Smallholder Farmer',
  location: 'Eket LGA',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d6ecdcf8-1772185782247.png",
  imageAlt: 'Portrait of a middle-aged Nigerian man, confident expression, rural outdoor setting'
},
{
  quote:
  'As a young woman in Ikot Abasi, I never thought I could start my own fashion business. AIPECA\'s women empowerment program gave me the skills, the seed capital, and most importantly — the confidence.',
  name: 'Comfort Bassey',
  role: 'Fashion Entrepreneur',
  location: 'Ikot Abasi LGA',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1378801e9-1763300782856.png",
  imageAlt: 'Portrait of a young Nigerian woman entrepreneur, bright confident expression, professional setting'
}];


export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef?.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-24 bg-primary relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-0 right-0 select-none pointer-events-none overflow-hidden">
        <span className="font-display text-[18vw] italic text-white/[0.03] leading-none whitespace-nowrap">
          Voices
        </span>
      </div>
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 blob-gold opacity-20 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 blob-green opacity-30 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal-on-scroll text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">
            Real Stories
          </span>
          <h2 className="font-display text-section-title text-white">
            Voices from Our{' '}
            <span className="italic text-accent">Community</span>
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials?.map((t, i) =>
          <div
            key={t?.name}
            className={`reveal-on-scroll reveal-delay-${i + 1} bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-7 flex flex-col group hover:bg-white/15 transition-colors duration-300`}>
            
              {/* Quote mark */}
              <div className="font-display text-6xl italic text-accent/40 leading-none mb-4 select-none">
                "
              </div>

              {/* Quote */}
              <p className="text-white/85 text-sm leading-relaxed flex-1 mb-6 italic">
                {t?.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/15">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-accent/40">
                  <AppImage
                  src={t?.image}
                  alt={t?.imageAlt}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover" />
                
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{t?.name}</div>
                  <div className="text-xs text-accent/80 font-medium">{t?.role}</div>
                  <div className="text-xs text-white/50 font-medium">{t?.location}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}