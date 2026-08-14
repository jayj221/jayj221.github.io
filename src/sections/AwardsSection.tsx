import FadeIn from '../components/FadeIn';
import { AWARDS, EDUCATION } from '../data/content';

export default function AwardsSection() {
  return (
    <section
      id="awards"
      className="bg-white px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <FadeIn
        as="h2"
        className="mb-6 text-center font-black uppercase leading-none text-[#0C0C0C]"
        style={{ fontSize: 'clamp(2.5rem, 11vw, 150px)' }}
      >
        The Podiums
      </FadeIn>

      <FadeIn
        as="p"
        delay={0.1}
        className="mx-auto mb-16 max-w-2xl text-center font-light leading-relaxed text-[#0C0C0C]/60 sm:mb-20 md:mb-24"
        style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}
      >
        From national B-Plan rankings to Wharton’s global investment competition.
        Eight-plus podium finishes across more than 10,000 combined participants.
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {AWARDS.map((award, i) => (
          <FadeIn
            key={award.title}
            delay={i * 0.05}
            className="flex items-start gap-5 border-t border-[rgba(12,12,12,0.15)] py-6 last:border-b sm:gap-8 sm:py-7"
          >
            <span
              className="min-w-[3.5rem] shrink-0 font-black leading-none tracking-tight text-[#0C0C0C] sm:min-w-[5.5rem]"
              style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.9rem)' }}
            >
              {award.rank}
            </span>

            <div className="flex flex-1 flex-col gap-1">
              <h3
                className="font-medium uppercase leading-tight tracking-wide text-[#0C0C0C]"
                style={{ fontSize: 'clamp(0.95rem, 1.9vw, 1.4rem)' }}
              >
                {award.title}
              </h3>
              <span className="text-xs font-light uppercase tracking-wider text-[#0C0C0C]/50 sm:text-sm">
                {award.org}
              </span>
              <p className="pt-1 text-sm font-light leading-relaxed text-[#0C0C0C]/60">
                {award.detail}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Education & certifications */}
      <FadeIn className="mx-auto mt-24 flex max-w-5xl items-center gap-4 sm:mt-32">
        <span className="text-[0.65rem] font-light uppercase tracking-[0.3em] text-[#0C0C0C]/40 sm:text-xs">
          Education & Certifications
        </span>
        <span className="h-px flex-1 bg-[rgba(12,12,12,0.15)]" />
      </FadeIn>

      <div className="mx-auto mt-10 grid max-w-5xl gap-x-10 gap-y-10 sm:grid-cols-2">
        {EDUCATION.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.08} className="flex flex-col gap-2">
            <div className="flex items-baseline justify-between gap-4">
              <h3
                className="font-medium uppercase leading-tight tracking-wide text-[#0C0C0C]"
                style={{ fontSize: 'clamp(0.95rem, 1.7vw, 1.25rem)' }}
              >
                {item.title}
              </h3>
              {item.meta && (
                <span className="whitespace-nowrap text-[0.65rem] font-light uppercase tracking-widest text-[#0C0C0C]/45">
                  {item.meta}
                </span>
              )}
            </div>
            <span className="text-xs font-light uppercase tracking-wider text-[#0C0C0C]/50 sm:text-sm">
              {item.org}
            </span>
            <p className="text-sm font-light leading-relaxed text-[#0C0C0C]/60">
              {item.detail}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
