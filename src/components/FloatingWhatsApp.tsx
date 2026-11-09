import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS } from '@/data';

const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
  'Hello D 4 Detailing Car Noida! I would like to enquire about your car detailing and car wash services.'
)}`;

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const [tip, setTip] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setTip(true), 1500);
    const t2 = setTimeout(() => setTip(false), 8000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, [show]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3 transition-all duration-500 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      {tip && (
        <div className="relative max-w-[230px] rounded-2xl rounded-br-sm border border-green-700/40 bg-ink-800 px-4 py-3 text-sm text-gray-200 shadow-xl">
          <button
            onClick={() => setTip(false)}
            className="absolute -left-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-ink-400 bg-ink-700 text-gray-400"
            aria-label="Dismiss"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          Need a premium car detail? Chat with us on WhatsApp!
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-2xl shadow-green-900/40 transition-transform duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
        <span className="absolute inline-flex h-14 w-14 animate-ping rounded-full bg-green-500/40 opacity-60" />
      </a>
    </div>
  );
}
