'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const team = [
{
  name: 'AMB E.E PATRICK',
  title: 'Chairman / President',
  bio: 'A seasoned community leader with 25+ years experience in cooperative development and rural economic empowerment across Akwa Ibom State.',
  image: "/assets/images/ChatGPT_Image_Jul_1__2026__11_02_31_AM-1785272306305.png",
  imageAlt: 'Portrait of AMB E.E PATRICK, Chairman and President of AKPECA',
  initials: 'EP'
},
{
  name: 'RT Rev AKPAN FRIDAY',
  title: 'Executive Secretary',
  bio: 'A certified cooperative administrator who has led AKPECA\'s documentation and compliance frameworks since its founding year.',
  image: "/assets/images/passport_portrait_studio-1785304982818.png",
  imageAlt: 'Portrait of RT Rev AKPAN FRIDAY, Executive Secretary of AKPECA',
  initials: 'AF'
},
{
  name: 'Mr. Unyime Etim',
  title: 'Director of Programs',
  bio: 'An NGO professional with expertise in program design, monitoring and evaluation, and community mobilization across the Niger Delta.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12de22584-1763298920012.png",
  imageAlt: 'Portrait of a young Nigerian professional man, intelligent expression, clean background',
  initials: 'UE'
},
{
  name: 'Mrs. Arit Essien',
  title: 'Director of Finance',
  bio: 'A chartered accountant overseeing AKPECA\'s financial integrity, loan disbursements, and member savings with meticulous care.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_106a70f7a-1763298918633.png",
  imageAlt: 'Portrait of a professional Nigerian woman, poised and confident, neutral light background',
  initials: 'AE'
},
{
  name: 'Mr. Emmanuel Udo',
  title: 'Director of Community Relations',
  bio: 'A grassroots mobilizer who has built AKPECA\'s presence across 10 LGAs through trust, partnerships, and consistent community engagement.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d79c718d-1772658509211.png",
  imageAlt: 'Portrait of a friendly Nigerian man in professional attire, warm and approachable expression',
  initials: 'EU'
},
{
  name: 'Miss Victoria Nyong',
  title: 'Youth & Women Coordinator',
  bio: 'A passionate advocate for gender equity and youth empowerment who has trained over 200 women and young people in entrepreneurship skills.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f988ed0a-1763299910870.png",
  imageAlt: 'Portrait of a young Nigerian woman, bright and confident smile, professional and inspiring presence',
  initials: 'VN'
}];


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
            leadership team drives AKPECA's mission every day.
          </p>
          <Link
            href="/gallery"
            className="mt-8 inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-full hover:bg-secondary-foreground transition-colors duration-200"
          >
            View Our Gallery
          </Link>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {team?.map((member, i) =>
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

                {/* Social Icons */}
                <div className="flex items-center gap-2">
                  {socialIcons?.map((s) =>
                <a
                  key={s?.name}
                  href="#"
                  aria-label={`${member?.name} on ${s?.name}`}
                  className="w-8 h-8 rounded-full bg-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                  
                      {s?.icon}
                    </a>
                )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}