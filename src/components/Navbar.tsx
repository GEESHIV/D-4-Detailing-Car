import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS } from '@/data';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Results', href: '#before-after' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-900/90 backdrop-blur-xl border-b border-gold-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <button
          onClick={() => handleNav('#home')}
          className="group flex items-center gap-3"
          aria-label="D 4 Detailing Car Noida home"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-soft bg-gold-gradient font-display text-xl font-bold text-ink-900 shadow-lg shadow-gold-900/20 transition-transform duration-300 group-hover:scale-105">
            D4
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-lg font-semibold tracking-wide text-white">
              D 4 Detailing Car
            </span>
            <span className="text-[10px] uppercase tracking-widest text-gold-300">
              Noida
            </span>
          </span>
        </button>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="group relative text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={BUSINESS.phoneTel}
            className="flex items-center gap-2 rounded-full border border-gold-soft px-5 py-2.5 text-sm font-semibold text-gold-200 transition-all duration-300 hover:bg-gold-gradient hover:text-ink-900"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <button
            onClick={() => handleNav('#booking')}
            className="rounded-full bg-gold-gradient px-6 py-2.5 text-sm font-bold text-ink-900 shadow-lg shadow-gold-900/30 transition-transform duration-300 hover:scale-105"
          >
            Book Service
          </button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold-soft text-gold-200 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-gold-soft bg-ink-900/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-5">
          {LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="w-full rounded-lg px-4 py-3 text-left text-base font-medium text-gray-200 transition-colors hover:bg-ink-600 hover:text-gold-200"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="mt-2 flex gap-3">
            <a
              href={BUSINESS.phoneTel}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gold-soft py-3 text-sm font-semibold text-gold-200"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
            <button
              onClick={() => handleNav('#booking')}
              className="flex-1 rounded-full bg-gold-gradient py-3 text-sm font-bold text-ink-900"
            >
              Book Service
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
