import FadeIn from '../components/FadeIn';
import { EXPERIENCE } from '../data/content';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <FadeIn
        as="h2"
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(2.5rem, 11vw, 150px)' }}
      >
        Experience
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {EXPERIENCE.map((role, i) => (
          <FadeIn
            key={role.number}
            delay={i * 0.08}
            className="relative border-l border-[#D7E2EA]/15 pb-14 pl-6 last:pb-0 sm:pl-10"
          >
            {/* Node on the timeline rail */}
            <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-[#D7E2EA]/40" />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div className="flex items-baseline gap-3">
                <span
                  className="font-black leading-none text-[#D7E2EA]/20"
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)' }}
                >
                  {role.number}
                </span>
                <h3
                  className="font-medium uppercase leading-tight tracking-wide text-[#D7E2EA]"
                  style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.9rem)' }}
                >
                  {role.company}
                </h3>
              </div>
              <span className="whitespace-nowrap text-xs font-light uppercase tracking-widest text-[#D7E2EA]/40 sm:text-sm">
                {role.period}
              </span>
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-3 pl-0 sm:pl-[3.2rem]">
              <span className="text-sm font-light uppercase tracking-wider text-[#D7E2EA]/70 sm:text-base">
                {role.title}
              </span>
              <span className="rounded-full border border-[#D7E2EA]/20 px-3 py-0.5 text-[0.65rem] font-light uppercase tracking-widest text-[#D7E2EA]/50">
                {role.tag}
              </span>
            </div>

            <ul className="mt-5 flex flex-col gap-3 sm:pl-[3.2rem]">
              {role.points.map((point) => (
                <li
                  key={point}
                  className="relative pl-5 text-sm font-light leading-relaxed text-[#D7E2EA]/55 sm:text-base"
                >
                  <span className="absolute left-0 top-[0.7em] h-px w-3 bg-[#D7E2EA]/25" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4 sm:pl-[3.2rem]">
              {role.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="hero-heading font-black leading-none"
                    style={{
                      fontSize: 'clamp(1.25rem, 2.6vw, 2rem)',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="pt-1 text-[0.65rem] font-light uppercase tracking-widest text-[#D7E2EA]/40">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
