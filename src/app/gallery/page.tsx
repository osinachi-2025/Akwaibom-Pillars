'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';
import { galleryImages } from '@/data/gallery';

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentImage = useMemo(
    () => (lightboxIndex === null ? null : galleryImages[lightboxIndex]),
    [lightboxIndex]
  );

  const visibleLightboxIndex = lightboxIndex === null ? 0 : lightboxIndex + 1;

  useEffect(() => {
    if (lightboxIndex === null) {
      document.body.style.overflow = '';
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null);
      }

      if (event.key === 'ArrowRight' && galleryImages.length > 1) {
        setLightboxIndex((previous) =>
          previous === null ? 0 : previous === galleryImages.length - 1 ? 0 : previous + 1
        );
      }

      if (event.key === 'ArrowLeft' && galleryImages.length > 1) {
        setLightboxIndex((previous) =>
          previous === null ? galleryImages.length - 1 : previous === 0 ? galleryImages.length - 1 : previous - 1
        );
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex]);

  const goToPrevious = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex === 0 ? galleryImages.length - 1 : lightboxIndex - 1));
  };

  const goToNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex === galleryImages.length - 1 ? 0 : lightboxIndex + 1));
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden bg-primary pb-16 pt-24 sm:pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="blob-green absolute right-0 top-0 h-96 w-96" />
          <div className="blob-gold absolute bottom-0 left-0 h-72 w-72" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">Gallery</p>
          <h1 className="font-display text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Explore Our Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[rgba(254,244,230,1)] sm:text-lg">
            A visual collection of Akippa events, people, and partnerships that reflect our commitment to community empowerment.
          </p>
        </div>
      </section>

      <div className="border-b border-border bg-secondary">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-3 text-sm text-muted-foreground sm:px-6 lg:px-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <span className="font-semibold text-foreground">Gallery</span>
          </div>
          <Link
            href="/#gallery"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-secondary-foreground"
          >
            Back to gallery preview
          </Link>
        </div>
      </div>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
            {galleryImages.map((image, index) => (
              <button
                key={`${image.title}-${index}`}
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="group overflow-hidden rounded-[28px] border border-border bg-card text-left shadow-sm transition hover:border-primary/50 hover:shadow-md"
                aria-label={`Open image ${index + 1}: ${image.title}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <AppImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading={index > 2 ? 'lazy' : 'eager'}
                  />
                </div>
                <div className="p-4">
                  <p className="font-display text-lg italic text-foreground">{image.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {currentImage ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 px-3 py-5 backdrop-blur-sm"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setLightboxIndex(null);
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div className="relative w-full max-w-5xl">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-card shadow-2xl">
              <div className="relative h-[62vh] min-h-[300px] w-full bg-black sm:h-[72vh]">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  className="absolute right-3 top-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-2xl font-light text-black shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition duration-200 hover:scale-105 hover:bg-[#f8d77a] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#f8d77a]/70"
                  aria-label="Close image lightbox"
                >
                  ×
                </button>

                <AppImage
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className="object-contain"
                  objectFit="contain"
                  sizes="100vw"
                  priority
                />
              </div>

              <div className="border-t border-border bg-card px-4 py-4 sm:px-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={goToPrevious}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:border-primary hover:text-primary"
                      aria-label="Previous image"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={goToNext}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:border-primary hover:text-primary"
                      aria-label="Next image"
                    >
                      →
                    </button>
                  </div>

                  <div className="text-center sm:text-right">
                    <p className="text-sm font-semibold text-muted-foreground">
                      {visibleLightboxIndex} / {galleryImages.length}
                    </p>
                    <p className="mt-1 font-display text-xl italic text-foreground">{currentImage.title}</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-border bg-muted/60 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Storyline</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    {currentImage.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <Footer />
    </main>
  );
}
