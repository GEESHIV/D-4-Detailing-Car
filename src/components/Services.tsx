import { ArrowUpRight } from 'lucide-react';
import { SERVICES, BUSINESS, type Service } from '@/data';

export default function Services() {
  const enquire = (serviceName: string) => {
    const msg = `Hello ${BUSINESS.name}! I would like to enquire about your ${serviceName} service.`;
    window.open(
      `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  };

  return (
    <section id="services" className="relative bg-ink-800 py-24 sm:py-32">
      {/* top divider */}
      <div className="absolute inset-x-0 top-0 h-px gold-line opacity-40" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gold-gradient" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
              Our Services
            </span>
            <span className="h-px w-10 bg-gold-gradient" />
          </div>
          <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Premium Care For <span className="text-gold-gradient italic">Every Detail</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-400">
            A full range of car cleaning and detailing services to keep your
            vehicle looking its best. Enquire on WhatsApp for any service you’re
            interested in.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service: Service, i) => {
            const Icon = service.icon;
            return (
              <article
                key={service.name}
                className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-2xl border border-ink-400 bg-ink-700 transition-all duration-500 hover:border-gold-soft hover:shadow-2xl hover:shadow-black/50`}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-700 via-ink-700/30 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl border border-gold-soft bg-ink-900/80 backdrop-blur-sm">
                    <Icon className="h-5 w-5 text-gold-300" />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {service.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-gray-400">
                    {service.description}
                  </p>
                  <button
                    onClick={() => enquire(service.name)}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition-colors hover:text-gold-200"
                  >
                    Enquire Now
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

                {/* hover accent line */}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold-gradient transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        <p className="reveal mt-10 text-center text-xs text-gray-500">
          These are suggested service categories. Please enquire to confirm
          availability and details for your vehicle.
        </p>
      </div>
    </section>
  );
}
