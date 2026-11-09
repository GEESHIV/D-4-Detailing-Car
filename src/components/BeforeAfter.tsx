import { useRef, useState, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { BEFORE_AFTER } from '@/data';

function ComparisonSlider({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  const onDown = (e: React.MouseEvent | React.TouchEvent) => {
    dragging.current = true;
    if ('touches' in e) update(e.touches[0].clientX);
    else update(e.clientX);
  };

  const onMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging.current) return;
    if ('touches' in e) update(e.touches[0].clientX);
    else update(e.clientX);
  };

  const onUp = () => { dragging.current = false; };

  return (
    <div className="reveal">
      <div
        ref={ref}
        className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border border-ink-400"
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchStart={onDown}
        onTouchMove={onMove}
        onTouchEnd={onUp}
      >
        {/* After (full) */}
        <img
          src={after}
          alt={`${label} - after`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          draggable={false}
        />
        <span className="absolute bottom-4 right-4 rounded-full bg-ink-900/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-200 backdrop-blur-sm">
          After
        </span>

        {/* Before (clipped) */}
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <img
            src={before}
            alt={`${label} - before`}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ width: `${(100 / pos) * 100}%` }}
            loading="lazy"
            draggable={false}
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-ink-900/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
            Before
          </span>
        </div>

        {/* Handle */}
        <div
          className="absolute top-0 z-10 h-full w-1 bg-gold-gradient"
          style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold-300 bg-ink-900 shadow-xl">
            <MoveHorizontal className="h-5 w-5 text-gold-300" />
          </div>
        </div>
      </div>
      <p className="mt-3 text-center font-display text-xl font-semibold text-white">
        {label}
      </p>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="before-after" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gold-gradient" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
              Before & After
            </span>
            <span className="h-px w-10 bg-gold-gradient" />
          </div>
          <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            See The <span className="text-gold-gradient italic">Difference</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-400">
            Drag the slider across each image to compare. These illustrative
            stock images show the kind of transformation detailing can achieve —
            they are not actual customer results.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {BEFORE_AFTER.map((item) => (
            <ComparisonSlider
              key={item.label}
              before={item.before}
              after={item.after}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
