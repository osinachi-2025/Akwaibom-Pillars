import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import TestimonialsSection from './components/TestimonialsSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <TestimonialsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
