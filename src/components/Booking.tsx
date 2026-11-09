import { useState } from 'react';
import { Send, CalendarCheck } from 'lucide-react';
import { BUSINESS, SERVICES } from '@/data';

const VEHICLE_TYPES = ['Hatchback', 'Sedan', 'SUV', 'Luxury Car', 'Other'];

interface FormState {
  name: string;
  mobile: string;
  brand: string;
  model: string;
  vehicleType: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

const EMPTY: FormState = {
  name: '',
  mobile: '',
  brand: '',
  model: '',
  vehicleType: '',
  service: '',
  date: '',
  time: '',
  message: '',
};

const inputClass =
  'w-full rounded-xl border border-ink-400 bg-ink-800 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-gold-400 focus:ring-1 focus:ring-gold-400/40';
const labelClass = 'mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gold-200';

export default function Booking() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!form.mobile.trim()) next.mobile = 'Please enter your mobile number';
    else if (!/^[0-9+\-\s]{7,15}$/.test(form.mobile.trim()))
      next.mobile = 'Please enter a valid mobile number';
    if (!form.brand.trim()) next.brand = 'Please enter your car brand';
    if (!form.model.trim()) next.model = 'Please enter your car model';
    if (!form.vehicleType) next.vehicleType = 'Please select a vehicle type';
    if (!form.service) next.service = 'Please select a service';
    if (!form.date) next.date = 'Please choose a preferred date';
    if (!form.time) next.time = 'Please choose a preferred time';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      `*New Appointment Enquiry — ${BUSINESS.name}*`,
      '',
      `*Name:* ${form.name}`,
      `*Mobile:* ${form.mobile}`,
      `*Car:* ${form.brand} ${form.model}`,
      `*Vehicle Type:* ${form.vehicleType}`,
      `*Service Required:* ${form.service}`,
      `*Preferred Date:* ${form.date}`,
      `*Preferred Time:* ${form.time}`,
    ];
    if (form.message.trim()) {
      lines.push(`*Message:* ${form.message}`);
    }
    const msg = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${msg}`, '_blank');
    setSent(true);
    setForm(EMPTY);
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="booking" className="relative bg-ink-800 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px gold-line opacity-40" />

      {/* Decorative side image */}
      <div className="absolute right-0 top-0 hidden h-full w-1/2 lg:block">
        <img
          src="https://images.pexels.com/photos/6872591/pexels-photo-6872591.jpeg?auto=compress&cs=tinysrgb&w=1280"
          alt=""
          className="h-full w-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-800 via-ink-800/80 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <div className="reveal mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gold-gradient" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
              Book An Appointment
            </span>
            <span className="h-px w-10 bg-gold-gradient" />
          </div>
          <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Book Your <span className="text-gold-gradient italic">Appointment</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-400">
            Fill in your details and we’ll send your enquiry straight to our
            WhatsApp. We’ll get back to you to confirm your appointment.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="reveal reveal-delay-1 rounded-3xl border border-gold-soft bg-ink-700/80 p-6 backdrop-blur-sm sm:p-9"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="name">Customer Name *</label>
              <input
                id="name"
                className={inputClass}
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
              />
              {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label className={labelClass} htmlFor="mobile">Mobile Number *</label>
              <input
                id="mobile"
                className={inputClass}
                placeholder="10-digit mobile number"
                inputMode="tel"
                value={form.mobile}
                onChange={(e) => update('mobile', e.target.value)}
              />
              {errors.mobile && <p className="mt-1.5 text-xs text-red-400">{errors.mobile}</p>}
            </div>

            <div>
              <label className={labelClass} htmlFor="brand">Car Brand *</label>
              <input
                id="brand"
                className={inputClass}
                placeholder="e.g. Maruti, Hyundai, BMW"
                value={form.brand}
                onChange={(e) => update('brand', e.target.value)}
              />
              {errors.brand && <p className="mt-1.5 text-xs text-red-400">{errors.brand}</p>}
            </div>

            <div>
              <label className={labelClass} htmlFor="model">Car Model *</label>
              <input
                id="model"
                className={inputClass}
                placeholder="e.g. Swift, Creta, X5"
                value={form.model}
                onChange={(e) => update('model', e.target.value)}
              />
              {errors.model && <p className="mt-1.5 text-xs text-red-400">{errors.model}</p>}
            </div>

            <div>
              <label className={labelClass} htmlFor="vehicleType">Vehicle Type *</label>
              <select
                id="vehicleType"
                className={inputClass}
                value={form.vehicleType}
                onChange={(e) => update('vehicleType', e.target.value)}
              >
                <option value="">Select type</option>
                {VEHICLE_TYPES.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
              {errors.vehicleType && <p className="mt-1.5 text-xs text-red-400">{errors.vehicleType}</p>}
            </div>

            <div>
              <label className={labelClass} htmlFor="service">Service Required *</label>
              <select
                id="service"
                className={inputClass}
                value={form.service}
                onChange={(e) => update('service', e.target.value)}
              >
                <option value="">Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s.name} value={s.name}>{s.name}</option>
                ))}
                <option value="Other / Not sure">Other / Not sure</option>
              </select>
              {errors.service && <p className="mt-1.5 text-xs text-red-400">{errors.service}</p>}
            </div>

            <div>
              <label className={labelClass} htmlFor="date">Preferred Date *</label>
              <input
                id="date"
                type="date"
                className={inputClass}
                value={form.date}
                onChange={(e) => update('date', e.target.value)}
              />
              {errors.date && <p className="mt-1.5 text-xs text-red-400">{errors.date}</p>}
            </div>

            <div>
              <label className={labelClass} htmlFor="time">Preferred Time *</label>
              <input
                id="time"
                type="time"
                className={inputClass}
                value={form.time}
                onChange={(e) => update('time', e.target.value)}
              />
              {errors.time && <p className="mt-1.5 text-xs text-red-400">{errors.time}</p>}
            </div>
          </div>

          <div className="mt-5">
            <label className={labelClass} htmlFor="message">Additional Message</label>
            <textarea
              id="message"
              rows={3}
              className={`${inputClass} resize-none`}
              placeholder="Anything else you'd like us to know?"
              value={form.message}
              onChange={(e) => update('message', e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="mt-7 flex w-full items-center justify-center gap-2.5 rounded-full bg-gold-gradient px-8 py-4 text-base font-bold text-ink-900 shadow-2xl shadow-gold-900/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-gold-700/50"
          >
            <Send className="h-5 w-5" />
            Book Your Appointment
          </button>

          {sent && (
            <div className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-gold-soft bg-gold-500/10 px-4 py-3 text-sm text-gold-200">
              <CalendarCheck className="h-4 w-4" />
              Your enquiry has been opened in WhatsApp. Press send there to
              confirm.
            </div>
          )}

          <p className="mt-4 text-center text-xs text-gray-500">
            Your details are sent directly to our WhatsApp. No data is stored on
            this website.
          </p>
        </form>
      </div>
    </section>
  );
}
