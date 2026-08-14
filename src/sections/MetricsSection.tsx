import FadeIn from '../components/FadeIn';
import { METRICS } from '../data/content';

export default function MetricsSection() {
  return (
    <section className="bg-[#0C0C0C] px-5 pb-16 pt-10 sm:px-8 md:px-10 md:pb-24">
      <FadeIn className="mx-auto flex max-w-6xl items-center gap-4 pb-8 md:pb-12">
        <span className="text-[0.65rem] font-light uppercase tracking-[0.3em] text-[#D7E2EA]/40 sm:text-xs">
          Track record
        </span>
        <span className="h-px flex-1 bg-[#D7E2EA]/15" />
      </FadeIn>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden bg-[#D7E2EA]/10 md:grid-cols-3">
        {METRICS.map((metric, i) => (
          <FadeIn
            key={metric.label}
            delay={i * 0.07}
            className="group flex flex-col gap-1 bg-[#0C0C0C] px-5 py-7 transition-colors duration-300 hover:bg-[#D7E2EA]/[0.03] sm:px-7 sm:py-9"
          >
            <span
              className="hero-heading font-black leading-none"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {metric.value}
            </span>
            <span className="pt-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] sm:text-sm">
              {metric.label}
            </span>
            <span className="text-xs font-light leading-relaxed text-[#D7E2EA]/40">
              {metric.detail}
            </span>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
