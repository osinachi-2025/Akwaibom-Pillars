'use client';

import React, { useEffect, useRef } from 'react';
import AppIcon from '@/components/ui/AppIcon';

const values = [
  { icon: 'ShieldCheckIcon', label: 'Integrity', desc: 'We uphold the highest standards of honesty and accountability in all our dealings.' },
  { icon: 'UserGroupIcon', label: 'Community', desc: 'Every decision is made with the well-being of our communities at its core.' },
  { icon: 'BoltIcon', label: 'Empowerment', desc: 'We equip individuals with tools, knowledge, and resources to transform their lives.' },
  { icon: 'EyeIcon', label: 'Transparency', desc: 'Open reporting and clear communication build the trust our members deserve.' },
  { icon: 'AcademicCapIcon', label: 'Education', desc: 'We invest heavily in education by supporting individuals\' academic dreams and careers.' },
  { icon: 'HeartIcon', label: 'Sustainability', desc: 'Our programs are designed for lasting impact across generations.' },
];

const missions = [
  {
    icon: 'WrenchScrewdriverIcon',
    title: 'Skill Acquisition',
    desc: 'We organize workshops to train and empower people with new ideas in agriculture, technology, craftsmanship, and science.',
  },
  {
    icon: 'CurrencyDollarIcon',
    title: 'Capital & Equipment',
    desc: 'We provide capital and equipment to help individuals start their journey toward self-sufficiency.',
  },
  {
    icon: 'HeartIcon',
    title: 'Healthcare Support',
    desc: 'We create health awareness and offer financial assistance to support hospital bills for those in need.',
  },
  {
    icon: 'AcademicCapIcon',
    title: 'Education Investment',
    desc: 'We support individuals\' academic dreams and careers, building a better society for all.',
  },
];

export default function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">Who We Are</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">About Akwa Pillar</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Our vision is to support the less privileged in achieving their dreams — empowering communities through skills, health, and education.
          </p>
        </div>

        {/* Mission Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 reveal-on-scroll">
          {missions?.map((item, idx) => (
            <div
              key={idx}
              className="bg-background rounded-2xl p-6 shadow-sm border border-border flex flex-col gap-4 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <AppIcon name={item?.icon} className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">{item?.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item?.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16 reveal-on-scroll">
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm font-semibold uppercase tracking-widest text-primary whitespace-nowrap">Our Core Values</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-on-scroll">
          {values?.map((val, idx) => (
            <div
              key={idx}
              className="flex gap-4 bg-background rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <AppIcon name={val?.icon} className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-1">{val?.label}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{val?.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Quote */}
        <div className="mt-16 text-center reveal-on-scroll">
          <blockquote className="max-w-2xl mx-auto text-muted-foreground italic text-base leading-relaxed border-l-4 border-primary pl-5 text-left">
            "Though night may fall, by God's grace and presence, our core values will remain steadfast until the lives of the common man are touched."
          </blockquote>
        </div>

      </div>
    </section>
  );
}
