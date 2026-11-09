import { useState, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GALLERY } from '@/data';

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length)),
    []
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % GALLERY.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, prev, next]);

  return (
    <section id="gallery" className="relative bg-ink-800 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px gold-line opacity-40" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gold-gradient" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
              Premium Gallery
            </span>
            <span className="h-px w-10 bg-gold-gradient" />
          </div>
          <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            A Look At The <span className="text-gold-gradient italic">Detailing Process</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-400">
            Illustrative images of car washing, foam cleaning, polishing and
            detailing. Stock photography is shown for reference and does not
            represent actual business photographs or customer vehicles.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActive(i)}
              className={`reveal group relative overflow-hidden rounded-xl border border-ink-400 transition-all duration-500 hover:border-gold-soft ${
                i === 0 || i === 5 ? 'row-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-soft bg-ink-900/70 backdrop-blur-sm">
                  <ZoomIn className="h-5 w-5 text-gold-200" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/95 backdrop-blur-sm animate-fade-in"
          onClick={close}
        >
          <button
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold-soft text-gold-200 transition-colors hover:bg-gold-gradient hover:text-ink-900"
            onClick={close}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold-soft text-gold-200 transition-colors hover:bg-gold-gradient hover:text-ink-900 sm:left-8"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <figure className="mx-auto max-w-4xl px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={GALLERY[active].src}
              alt={GALLERY[active].alt}
              className="max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-sm text-gray-400">
              {GALLERY[active].alt}
            </figcaption>
          </figure>

          <button
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold-soft text-gold-200 transition-colors hover:bg-gold-gradient hover:text-ink-900 sm:right-8"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
