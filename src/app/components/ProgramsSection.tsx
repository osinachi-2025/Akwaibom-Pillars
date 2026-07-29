'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const programs = [
{
  icon: 'BanknotesIcon',
  title: 'Cooperative Savings & Loans',
  desc: 'Members pool financial resources to access affordable micro-loans for business growth, education, and emergency needs — with zero hidden fees.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e5e069c4-1775796116502.png",
  imageAlt: 'Nigerian women counting money at a cooperative meeting, bright indoor lighting, warm community atmosphere',
  tag: 'Finance',
  span: 'lg:col-span-3'
},
{
  icon: 'AcademicCapIcon',
  title: 'Skills Acquisition Training',
  desc: 'Vocational, digital, and entrepreneurship training programs equipping members with marketable skills for today\'s economy.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_102d34330-1777456801916.png",
  imageAlt: 'Young Nigerian adults in a training workshop, focused on learning, bright classroom setting',
  tag: 'Education',
  span: 'lg:col-span-2'
},
{
  icon: 'SunIcon',
  title: 'Agricultural Support',
  desc: 'Inputs, training, and market linkages for smallholder farmers across Akwa Ibom — from seedlings to harvest to sale.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_122151c7f-1772242233379.png",
  imageAlt: 'African farmer working in a lush green agricultural field, bright daylight, productive farm environment',
  tag: 'Agriculture',
  span: 'lg:col-span-1'
},
{
  icon: 'HeartIcon',
  title: 'Women Empowerment',
  desc: 'Targeted programs supporting women-led enterprises through grants, mentorship, and access to cooperative financial products.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1378801e9-1763300782856.png",
  imageAlt: 'Nigerian women entrepreneurs at a business meeting, confident and engaged, bright professional setting',
  tag: 'Gender',
  span: 'lg:col-span-2'
},
{
  icon: 'RocketLaunchIcon',
  title: 'Youth Development',
  desc: 'Leadership academies and digital skills bootcamps transforming Akwa Ibom\'s young people into confident change-makers.',
  image: "/assets/images/WhatsApp_Image_2026-04-27_at_1.51.02_PM__2__-_Copy-1785259118285.jpeg",
  imageAlt: 'Chairman/President of Akwa Pillar Cooperative Society',
  tag: 'Youth',
  span: 'lg:col-span-2'
},
{
  icon: 'BuildingOffice2Icon',
  title: 'Community Infrastructure',
  desc: 'Supporting rural communities with access to clean water, market stalls, and shared facilities that drive local economic activity.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_132c86b54-1782834613972.png",
  imageAlt: 'Community construction project in a Nigerian village, workers building infrastructure, bright open sky',
  tag: 'Infrastructure',
  span: 'lg:col-span-2'
}];


export default function ProgramsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.08 }
    );
    const elements = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 lg:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal-on-scroll flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">
              What We Do
            </span>
            <h2 className="font-display text-section-title text-foreground">
              Our Programs{' '}
              <span className="italic text-primary">& Impact</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground leading-relaxed lg:text-right">
            Six flagship programs designed to address the root causes of poverty and
            inequality across Akwa Ibom's diverse communities.
          </p>
        </div>

        {/* Bento Grid — 6 cards across lg:grid-cols-6 */}
        {/* 
           BENTO AUDIT:
           Array: [CoopSavings, SkillsAcq, AgriSupport, WomenEmp, YouthDev, CommInfra]
           Row 1: [col-1–3: CoopSavings cs-3] [col-4–5: SkillsAcq cs-2] [col-6: AgriSupport cs-1 rs-2]
           Row 2: [col-1–2: WomenEmp cs-2] [col-3–4: YouthDev cs-2] [col-5–6: CommInfra cs-2] — wait AgriSupport is rs-2 so col-6 is taken
           
           Revised: Simple responsive grid — 2 cols md, 3 cols lg with feature first card spanning 2
           Row 1 (lg): [cs-3: CoopSavings] [cs-2: SkillsAcq] [cs-1 rs-2: AgriSupport]
           Row 2 (lg): [cs-2: WomenEmp] [cs-2: YouthDev] [col-6 taken by AgriSupport]
           
           Simpler safe audit: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 — uniform but with first card spanning 2 on md
           6 cards, 2-col md = 3 rows of 2. 3-col lg = 2 rows of 3. Clean.
           Placed 6/6 ✓
          */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {/* Card 1: CoopSavings — spans 2 cols on md */}
          <div className="reveal-on-scroll reveal-delay-1 md:col-span-2 lg:col-span-2 group">
            <ProgramCard program={programs[0]} large />
          </div>
          {/* Card 2: SkillsAcq */}
          <div className="reveal-on-scroll reveal-delay-2">
            <ProgramCard program={programs[1]} />
          </div>
          {/* Card 3: AgriSupport */}
          <div className="reveal-on-scroll reveal-delay-3">
            <ProgramCard program={programs[2]} />
          </div>
          {/* Card 4: WomenEmp */}
          <div className="reveal-on-scroll reveal-delay-4">
            <ProgramCard program={programs[3]} />
          </div>
          {/* Card 5: YouthDev */}
          <div className="reveal-on-scroll reveal-delay-5">
            <ProgramCard program={programs[4]} />
          </div>
          {/* Card 6: CommInfra — spans 2 on md, 1 on lg */}
          <div className="reveal-on-scroll reveal-delay-6 md:col-span-2 lg:col-span-1">
            <ProgramCard program={programs[5]} />
          </div>
        </div>
      </div>
    </section>);

}

interface Program {
  icon: string;
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
  tag: string;
  span: string;
}

function ProgramCard({ program, large = false }: {program: Program;large?: boolean;}) {
  return (
    <div
      className={`card-lift relative rounded-3xl overflow-hidden bg-card border border-border group cursor-pointer h-full ${
      large ? 'min-h-[320px]' : 'min-h-[280px]'}`
      }>
      
      {/* Background Image */}
      <div className="absolute inset-0 img-zoom-container">
        <AppImage
          src={program.image}
          alt={program.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        
        {/* Gradient scrim — dark from bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6 lg:p-7">
        {/* Tag */}
        <span className="inline-flex self-start px-3 py-1 rounded-full bg-accent/90 text-foreground text-[10px] font-bold uppercase tracking-wider mb-4">
          {program.tag}
        </span>

        {/* Icon + Title */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center shrink-0">
            <Icon
              name={program.icon as Parameters<typeof Icon>[0]['name']}
              size={20}
              className="text-white"
              variant="outline" />
            
          </div>
          <h3 className="font-display text-xl italic text-white leading-tight">
            {program.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-white/75 leading-relaxed mb-4">{program.desc}</p>

        {/* Learn More */}
        <button className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent hover:text-white transition-colors duration-200">
          Learn More
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>);

}