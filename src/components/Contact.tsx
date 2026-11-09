import { Phone, MessageCircle, MapPin, Navigation } from 'lucide-react';
import { BUSINESS } from '@/data';

const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
  'Hello D 4 Detailing Car Noida! I would like to enquire about your car detailing and car wash services.'
)}`;

export default function Contact() {
  return (
    <section id="contact" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gold-gradient" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
              Contact Us
            </span>
            <span className="h-px w-10 bg-gold-gradient" />
          </div>
          <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Get In <span className="text-gold-gradient italic">Touch</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-400">
            We’re here to help your car look its best. Reach out by phone,
            WhatsApp, or visit us in Sector 63, Noida.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: info + buttons */}
          <div className="reveal space-y-6">
            <div className="rounded-2xl border border-ink-400 bg-ink-700/60 p-7">
              <h3 className="font-display text-2xl font-semibold text-white">
                {BUSINESS.name}
              </h3>

              <div className="mt-6 space-y-5">
                <a
                  href={BUSINESS.phoneTel}
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-soft bg-ink-900 transition-colors group-hover:bg-gold-gradient">
                    <Phone className="h-5 w-5 text-gold-300 transition-colors group-hover:text-ink-900" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-gray-500">Phone</span>
                    <span className="text-lg font-semibold text-white group-hover:text-gold-200">{BUSINESS.phone}</span>
                  </span>
                </a>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-soft bg-ink-900">
                    <MapPin className="h-5 w-5 text-gold-300" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-gray-500">Address</span>
                    <span className="text-sm leading-relaxed text-gray-300">{BUSINESS.address}</span>
                  </span>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <a
                  href={BUSINESS.phoneTel}
                  className="flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-5 py-3.5 text-sm font-bold text-ink-900 transition-transform duration-300 hover:scale-105"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-green-600/50 bg-green-600/10 px-5 py-3.5 text-sm font-bold text-green-400 transition-colors hover:bg-green-600/20"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
                <a
                  href={BUSINESS.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-gold-soft px-5 py-3.5 text-sm font-bold text-gold-200 transition-colors hover:bg-gold-gradient hover:text-ink-900"
                >
                  <Navigation className="h-4 w-4" /> Directions
                </a>
              </div>
            </div>
          </div>

          {/* Right: map */}
          <div className="reveal reveal-delay-1 overflow-hidden rounded-2xl border border-ink-400">
            <iframe
              title="Map — D 4 Detailing Car Noida, Sector 63, Noida"
              src={BUSINESS.mapsEmbed}
              className="h-full min-h-[360px] w-full grayscale invert-[0.92] hue-rotate-180"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
