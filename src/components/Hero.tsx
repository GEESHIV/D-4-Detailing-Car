import { Phone, CalendarCheck, ChevronDown } from 'lucide-react';
import { BUSINESS } from '@/data';

const HERO_IMG =
  'https://images.pexels.com/photos/12066287/pexels-photo-12066287.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Hero() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Luxury black sports car being professionally detailed"
          className="h-full w-full object-cover object-center animate-zoom-slow"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/80 to-ink-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/60" />
        <div className="absolute inset-0 noise-grain opacity-[0.06]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl pt-28">
          <div className="mb-6 flex items-center gap-4 animate-fade-in">
            <span className="h-px w-12 bg-gold-gradient" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
              Premium Car Detailing Studio · Sector 63, Noida
            </span>
          </div>

          <h1
            className="font-display text-5xl font-semibold leading-[1.05] text-white text-shadow-lux sm:text-6xl md:text-7xl lg:text-8xl animate-fade-up"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            Beyond Clean.
            <br />
            <span className="text-gold-gradient italic">Experience Perfection.</span>
          </h1>

          <p
            className="mt-7 max-w-xl text-lg leading-relaxed text-gray-200 text-shadow-lux animate-fade-up sm:text-xl"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            Give your car the attention it deserves. Discover a premium car
            cleaning and detailing experience at {BUSINESS.name}.
          </p>

          <div
            className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-up"
            style={{ animationDelay: '0.5s', opacity: 0 }}
          >
            <button
              onClick={() => scrollTo('#booking')}
              className="group flex items-center justify-center gap-2.5 rounded-full bg-gold-gradient px-8 py-4 text-base font-bold text-ink-900 shadow-2xl shadow-gold-900/40 transition-all duration-300 hover:scale-105 hover:shadow-gold-700/50"
            >
              <CalendarCheck className="h-5 w-5" />
              Book Your Service
            </button>
            <a
              href={BUSINESS.phoneTel}
              className="group flex items-center justify-center gap-2.5 rounded-full border border-white/25 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-gold-300 hover:bg-white/10"
            >
              <Phone className="h-5 w-5 text-gold-300 transition-transform duration-300 group-hover:rotate-12" />
              Call Now
            </a>
          </div>

          <div
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-gray-300 animate-fade-up"
            style={{ animationDelay: '0.7s', opacity: 0 }}
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              Exterior & Interior Detailing
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              Foam Wash & Polishing
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              Ceramic Coating
            </span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-gold-300/70 transition-colors hover:text-gold-200"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </button>
    </section>
  );
}
