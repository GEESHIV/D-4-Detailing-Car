import {
  Car,
  Eye,
  MapPin,
  HeartHandshake,
  MessageCircle,
  CalendarClock,
} from 'lucide-react';

const REASONS = [
  {
    icon: Car,
    title: 'Focus on Vehicle Appearance',
    body: 'We focus on helping your car look clean, fresh and well cared for.',
  },
  {
    icon: Eye,
    title: 'Attention to Cleaning Details',
    body: 'Every part of your vehicle, inside and out, gets careful attention.',
  },
  {
    icon: MapPin,
    title: 'Convenient Sector 63 Location',
    body: 'Easy to reach on the Faridabad–Noida–Ghaziabad Expressway, Noida.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer-Focused Experience',
    body: 'A friendly, satisfying experience built around what your car needs.',
  },
  {
    icon: MessageCircle,
    title: 'Easy Service Enquiries',
    body: 'Reach us on WhatsApp or phone with just one tap for quick answers.',
  },
  {
    icon: CalendarClock,
    title: 'Convenient Appointment Requests',
    body: 'Send your preferred date and time and we’ll take it from there.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gold-gradient" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
              Why Choose Us
            </span>
            <span className="h-px w-10 bg-gold-gradient" />
          </div>
          <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            The <span className="text-gold-gradient italic">D 4 Detailing</span> Difference
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-400">
            A straightforward, customer-first approach to car cleaning and
            detailing in Noida.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-2xl border border-ink-400 bg-gradient-to-b from-ink-700 to-ink-800 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-soft`}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-gold-soft bg-ink-900 transition-all duration-500 group-hover:bg-gold-gradient">
                  <Icon className="h-6 w-6 text-gold-300 transition-colors duration-500 group-hover:text-ink-900" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">
                  {reason.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-gray-400">
                  {reason.body}
                </p>
                <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold-500/5 blur-2xl transition-opacity duration-500 group-hover:bg-gold-500/10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
