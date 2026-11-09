import { Phone, MessageCircle, MapPin, Instagram, Facebook } from 'lucide-react';
import { BUSINESS, SERVICES } from '@/data';

const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
  'Hello D 4 Detailing Car Noida! I would like to enquire about your car detailing and car wash services.'
)}`;

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Results', href: '#before-after' },
  { label: 'Book Appointment', href: '#booking' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative border-t border-gold-soft bg-ink-900">
      <div className="absolute inset-x-0 top-0 h-px gold-line opacity-60" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient font-display text-xl font-bold text-ink-900">
                D4
              </span>
              <div className="leading-tight">
                <p className="font-display text-lg font-semibold text-white">
                  D 4 Detailing Car
                </p>
                <p className="text-[10px] uppercase tracking-widest text-gold-300">Noida</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-gray-400">
              A premium car cleaning and detailing experience in Sector 63,
              Noida. Give your car the attention it deserves.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={BUSINESS.phoneTel}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-400 text-gray-400 transition-colors hover:border-gold-soft hover:text-gold-300"
                aria-label="Call us"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-400 text-gray-400 transition-colors hover:border-green-600/50 hover:text-green-400"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-400 text-gray-400 transition-colors hover:border-gold-soft hover:text-gold-300"
                aria-label="Google Maps"
              >
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold-200">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {NAV.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => go(link.href)}
                    className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-gold-gradient transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold-200">Services</h4>
            <ul className="mt-5 space-y-3">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.name}>
                  <button
                    onClick={() => go('#services')}
                    className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-gold-gradient transition-all duration-300 group-hover:w-4" />
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold-200">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm text-gray-400">
              <li>
                <a href={BUSINESS.phoneTel} className="transition-colors hover:text-gold-200">
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="leading-relaxed">{BUSINESS.address}</li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 transition-colors hover:text-green-300"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold-200"
                >
                  <MapPin className="h-4 w-4" /> Google Business Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-400 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Crafted with care for car enthusiasts in Noida.
          </p>
        </div>
      </div>
    </footer>
  );
}
