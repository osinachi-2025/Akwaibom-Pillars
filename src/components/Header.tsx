'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const navLinks = [
{ label: 'Home', href: '#home', type: 'anchor' },
{ label: 'About', href: '#about', type: 'anchor' },
{ label: 'Portfolio', href: '#portfolio', type: 'anchor' },
{ label: 'Team', href: '#team', type: 'anchor' },
{ label: 'Introduction', href: '/introduction', type: 'page' },
{ label: 'Contact', href: '#contact', type: 'anchor' }];

const joinFormUrl = 'https://forms.gle/LHEfrhV5jNYXxrcn8';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {document.body.style.overflow = '';};
  }, [mobileOpen]);

  const handleNavClick = (href: string, type: string) => {
    setMobileOpen(false);
    if (type === 'page') {
      router.push(href);
      return;
    }
    if (href === joinFormUrl) {
      window.open(joinFormUrl, '_blank');
      return;
    }
    if (pathname !== '/') {
      router.push('/' + href);
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ?
        'bg-card shadow-lg shadow-primary/5 border-b border-border' :
        'bg-card border-b-2 border-primary'}`
        }>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 focus:outline-none group"
              aria-label="AKPECA Home">

              <AppLogo size={40} />
              <div className="flex flex-col leading-tight">
                <span className="font-display text-lg font-bold text-primary tracking-tight">AIPECA</span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground hidden sm:block leading-tight">
                  Akwa Ibom Pillars Empowerment
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href, link.type)}
                className={`nav-link-underline text-sm font-semibold transition-colors duration-200 pb-0.5 ${
                  pathname === link.href ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}>
                  {link.label}
                </button>
              )}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => window.open(joinFormUrl, '_blank')}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-primary-foreground bg-primary rounded-full hover:bg-secondary-foreground transition-colors duration-200">

                Join Us
              </button>
              <button
                className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu">

                {mobileOpen ?
                <XMarkIcon className="w-6 h-6" /> :

                <Bars3Icon className="w-6 h-6" />
                }
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`
        }>

        <div
          className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)} />

        <div
          className={`absolute top-16 left-0 right-0 bg-card border-b border-border shadow-xl transition-transform duration-300 ${
          mobileOpen ? 'translate-y-0' : '-translate-y-4'}`
          }>

          <nav className="flex flex-col px-6 py-6 gap-1">
            {navLinks.map((link) =>
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href, link.type)}
              className={`text-left py-3 px-4 text-base font-semibold hover:bg-muted rounded-lg transition-colors ${
                pathname === link.href ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}>
                {link.label}
              </button>
            )}
            <div className="pt-4 border-t border-border mt-2">
              <button
                onClick={() => window.open(joinFormUrl, '_blank')}
                className="w-full py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-full hover:bg-secondary-foreground transition-colors">

                Join Us
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>);

}