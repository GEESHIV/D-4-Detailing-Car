import { BUSINESS } from '@/data';

const ABOUT_IMG =
  'https://images.pexels.com/photos/6872176/pexels-photo-6872176.jpeg?auto=compress&cs=tinysrgb&w=1280';

export default function About() {
  return (
    <section id="about" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={ABOUT_IMG}
                alt="A detailer cleaning a luxury car with a sponge"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-2xl border border-gold-soft" />
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-gold-gradient px-7 py-5 shadow-2xl shadow-gold-900/30">
              <p className="font-display text-3xl font-bold text-ink-900">D4</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-800">
                Detailing Studio
              </p>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal reveal-delay-1">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-12 bg-gold-gradient" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
                About Us
              </span>
            </div>

            <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              More Than Just a <span className="text-gold-gradient italic">Car Wash</span>
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-gray-300">
              At {BUSINESS.name}, we believe your car deserves more than an
              ordinary wash. Our goal is to provide a satisfying vehicle
              cleaning and detailing experience, helping your car look fresh,
              clean and well-maintained.
            </p>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: 'Care For Every Detail',
                  body: 'From the body to the cabin, every part of your car gets careful attention.',
                },
                {
                  title: 'A Fresh, Clean Look',
                  body: 'We focus on helping your vehicle look well-maintained and refreshed.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-ink-400 bg-ink-700/60 p-5 transition-colors duration-300 hover:border-gold-soft"
                >
                  <h3 className="font-display text-xl font-semibold text-gold-200">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                document
                  .querySelector('#services')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="mt-9 inline-flex items-center gap-2.5 rounded-full border border-gold-soft px-7 py-3.5 text-sm font-semibold text-gold-200 transition-all duration-300 hover:bg-gold-gradient hover:text-ink-900"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
