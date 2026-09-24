'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const team = [
{
  name: 'REV.AMB. SAM IBANGA',
  title: 'Chairman / President',
  bio: 'A seasoned community leader with 25+ years experience in cooperative development and rural economic empowerment across Akwa Ibom State.',
  image: "/assets/images/chairman sir.jpeg",
  imageAlt: 'Portrait of REV.AMB. SAM IBANGA, Chairman and President of AIPECA',
  initials: 'SI',
  imagePosition: 'center 18%'
},
{
  name: 'RT Rev AKPAN FRIDAY',
  title: 'Executive Secretary',
  bio: 'B.SC. BUSINESS ADMINISTRATION • Member, INSTITUTE OF STRATEGIC MGT OF NIGERIA • Certified/Ordained Intl Preacher and Associate PST WSDM.',
  image: "/assets/images/executive secetary.jpeg",
  imageAlt: 'Portrait of RT Rev AKPAN FRIDAY, Executive Secretary of AIPECA',
  initials: 'AF',
  imagePosition: 'center 22%'
},
{
  name: 'PST MRS JOY SAM',
  title: 'Director of Programs',
  bio: 'An NGO professional with expertise in program design, monitoring and evaluation, and community mobilization across the Niger Delta.',
  image: "/assets/images/director of programs.jpeg",
  imageAlt: 'Portrait of PST MRS JOY SAM, Director of Programs at AIPECA',
  initials: 'JS',
  imagePosition: 'center 18%'
}
];


const socialIcons = [
{
  name: 'LinkedIn',
  icon:
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>

},
{
  name: 'Twitter',
  icon:
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>

}];


export default function TeamSection() {
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
    const elements = sectionRef?.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="team" ref={sectionRef} className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal-on-scroll text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">
            Our People
          </span>
          <h2 className="font-display text-section-title text-foreground">
            Meet Our{' '}
            <span className="italic text-primary">Leadership</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
            Experienced, passionate, and deeply rooted in Akwa Ibom communities — our
            leadership team drives AIPECA's mission every day.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {team?.slice(0, 3).map((member, i) =>
          <div
            key={member?.name}
            className={`reveal-on-scroll reveal-delay-${i % 3 + 1} card-lift bg-muted rounded-3xl overflow-hidden border border-border group`}>
            
              {/* Photo */}
              <div className="relative aspect-square img-zoom-container">
                <AppImage
                src={member?.image}
                alt={member?.imageAlt}
                fill
                className="object-cover object-center"
                style={{ objectPosition: member?.imagePosition ?? 'center' }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              
                {/* Subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent pt-[46px] mb-[-23px]" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-display text-xl italic text-foreground mb-1">
                  {member?.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  {member?.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {member?.bio}
                </p>


              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}