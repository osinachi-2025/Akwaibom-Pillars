'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import { galleryImages } from '@/data/gallery';

function GalleryLightbox({
  images,
  currentIndex,
  onChangeIndex,
  onClose,
}: {
  images: typeof galleryImages;
  currentIndex: number;
  onChangeIndex: (nextIndex: number) => void;
  onClose: () => void;
}) {
  const selectedImage = images[currentIndex];

  const goToPrevious = () => {
    onChangeIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    onChangeIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-3 py-5 backdrop-blur-sm"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image preview"
    >
      <div className="relative w-full max-w-5xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-11 right-0 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg font-semibold text-foreground shadow-lg transition hover:bg-white"
          aria-label="Close image preview"
        >
          ×
        </button>

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-card shadow-2xl">
          <div className="relative h-[62vh] min-h-[320px] w-full bg-black sm:h-[70vh]">
            <AppImage
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-border bg-card px-4 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={goToPrevious}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:border-primary hover:text-primary"
                aria-label="Previous gallery image"
              >
                ←
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:border-primary hover:text-primary"
                aria-label="Next gallery image"
              >
                →
              </button>
            </div>

            <p className="text-sm font-semibold text-muted-foreground">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GalleryShowcase() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const carouselImages = [...galleryImages, ...galleryImages, ...galleryImages];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let frameId = 0;
    let scrollAmount = 0;
    const speed = 0.7;

    const step = () => {
      if (!scroller) return;

      scrollAmount += speed;
      scroller.scrollLeft += 0.8;

      if (scroller.scrollLeft >= scroller.scrollWidth / 3) {
        scroller.scrollLeft = 0;
      }

      frameId = window.requestAnimationFrame(step);
    };

    frameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  const scrollGallery = (direction: number) => {
    if (!scrollerRef.current) return;

    const itemWidth = scrollerRef.current.querySelector('button')?.getBoundingClientRect().width ?? 260;
    scrollerRef.current.scrollBy({
      left: direction * (itemWidth + 16),
      behavior: 'smooth',
    });
  };

  return (
    <>
      <section id="gallery" className="relative overflow-hidden bg-[#0f1720] py-20 text-white lg:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="blob-green absolute -left-12 top-10 h-64 w-64 opacity-70" />
          <div className="blob-gold absolute -right-10 bottom-8 h-72 w-72 opacity-70" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-5 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
            <div className="max-w-2xl">
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#d4a017]">
                Our Gallery
              </span>
              <h2 className="font-display text-section-title text-white">
                Explore <span className="italic text-[#d4a017]">AIPECA</span>
              </h2>
            </div>

            <p className="max-w-xl text-base text-white/70">
              A look into the people, programs, and community moments shaping the AIPECA journey.
            </p>
          </div>

          <div className="relative">
            <div className="hidden items-center gap-3 sm:flex sm:absolute sm:-left-4 sm:top-1/2 sm:-translate-y-1/2 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollGallery(-1)}
                aria-label="Scroll gallery left"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg text-white shadow-sm transition hover:border-[#d4a017] hover:text-[#d4a017]"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollGallery(1)}
                aria-label="Scroll gallery right"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg text-white shadow-sm transition hover:border-[#d4a017] hover:text-[#d4a017]"
              >
                →
              </button>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-3 sm:p-4">
              <div
                ref={scrollerRef}
                className="no-scrollbar flex gap-4 overflow-x-auto pb-3 pl-1 pr-1"
                aria-label="Scrollable gallery preview"
                style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
              >
                {carouselImages.map((image, index) => (
                  <button
                    key={`${image.title}-${index}`}
                    type="button"
                    onClick={() => setLightboxIndex(index % galleryImages.length)}
                    className="group relative min-w-[29vw] max-w-[29vw] shrink-0 snap-start overflow-hidden rounded-[16px] border border-white/10 bg-[#111827] shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#d4a017]/60 sm:min-w-[145px] sm:max-w-[145px] lg:min-w-[165px] lg:max-w-[165px]"
                    aria-label={`Open photo ${index % galleryImages.length + 1}: ${image.title}`}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-black/30">
                      <AppImage
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.08]"
                        sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 170px"
                        loading={index > 1 ? 'lazy' : 'eager'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-black/10 to-transparent" />
                    </div>

                    <div className="p-2 text-left sm:p-3">
                      <p className="font-display text-[11px] italic text-white sm:text-lg">{image.title}</p>
                      <p className="mt-1 hidden text-[9px] leading-relaxed text-white/70 sm:block sm:text-xs">{image.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center sm:justify-start">
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-full bg-[#d4a017] px-7 py-3 text-sm font-semibold text-[#111827] transition hover:bg-[#e6b943]"
            >
              View all photos
            </Link>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onChangeIndex={(nextIndex) => setLightboxIndex(nextIndex)}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
