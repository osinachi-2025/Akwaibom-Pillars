'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

const galleryImages = [
  {
    src: '/assets/images/ChatGPT_Image_Jul_1__2026__11_02_31_AM-1785272306305.png',
    alt: 'Community activity at Akwa Ibom Pillars Empowerment Co-operative Association',
    caption: 'Community engagement and leadership interaction',
  },
  {
    src: '/assets/images/passport_portrait_studio-1785304982818.png',
    alt: 'Portrait of a member of the AIPECA community',
    caption: 'Member portrait highlighting our cooperative spirit',
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-04-27_at_1.51.02_PM__2__-_Copy-1785259118285.jpeg',
    alt: 'Akwa Ibom community event and outreach',
    caption: 'Community outreach and support in action',
  },
  {
    src: '/assets/images/app_logo.png',
    alt: 'AIPECA brand logo display',
    caption: 'Our brand, mission, and identity in Akwa Ibom',
  },
];

export default function GalleryPage() {
  const [openImage, setOpenImage] = useState<{ src: string; alt: string; caption: string } | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 blob-green" />
          <div className="absolute bottom-0 left-0 w-64 h-64 blob-gold" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3">Gallery</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
            Explore Our Gallery
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-[rgba(254,244,230,1)]">
            A visual collection of AIPECA events, people, and partnerships that reflect our commitment to community empowerment.
          </p>
        </div>
      </section>

      <div className="bg-secondary border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground font-semibold">Gallery</span>
          </div>
          <Link
            href="/#portfolio"
            className="text-sm font-semibold text-primary-foreground bg-primary rounded-full px-4 py-2 hover:bg-secondary-foreground transition-colors duration-200"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setOpenImage(image)}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <AppImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold text-foreground mb-2">{image.caption}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    A highlight from our work across Akwa Ibom State.
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {openImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6"
          onClick={() => setOpenImage(null)}
        >
          <div className="relative max-w-5xl w-full h-[min(80vh,calc(100vw-4rem))] overflow-hidden" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setOpenImage(null)}
              className="fixed top-4 right-4 z-50 rounded-full bg-white/90 p-2 text-sm font-bold text-foreground shadow-lg hover:bg-white"
              aria-label="Close image preview"
            >
              ×
            </button>

            <div className="rounded-3xl overflow-hidden bg-card shadow-2xl border border-white/10 h-full">
              <div className="relative w-full h-full bg-black">
                <AppImage
                  src={openImage.src}
                  alt={openImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <div className="p-6 text-center bg-card">
                <p className="text-lg font-semibold text-foreground mb-3">{openImage.caption}</p>
                <p className="text-sm text-muted-foreground">{openImage.alt}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <Footer />
    </main>
  );
}
