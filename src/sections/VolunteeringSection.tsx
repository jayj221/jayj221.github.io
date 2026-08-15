import { HeartHandshake } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { VOLUNTEERING } from '../data/content';

export default function VolunteeringSection() {
  return (
    <section
      id="volunteering"
      // Pulled up over the white Awards section, matching how Projects meets
      // Expertise.
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-28"
    >
      <FadeIn
        as="h2"
        className="hero-heading mb-6 text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(2.25rem, 10vw, 140px)' }}
      >
        Volunteering
      </FadeIn>

      <FadeIn
        as="p"
        delay={0.1}
        className="mx-auto mb-14 max-w-2xl text-center font-light uppercase leading-relaxed tracking-wide text-[#D7E2EA]/45 sm:mb-20"
        style={{ fontSize: 'clamp(0.8rem, 1.5vw, 1.05rem)' }}
      >
        Two years of teaching, mostly to kids who were never going to get the
        session otherwise.
      </FadeIn>

      <div className="mx-auto grid max-w-5xl gap-px overflow-hidden rounded-[28px] border border-[#D7E2EA]/15 bg-[#D7E2EA]/10 sm:grid-cols-2">
        {VOLUNTEERING.map((item, i) => (
          <FadeIn
            key={item.org}
            delay={i * 0.1}
            className="flex h-full flex-col gap-4 bg-[#0C0C0C] p-7 sm:p-9"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h3
                  className="font-medium uppercase leading-tight tracking-wide text-[#D7E2EA]"
                  style={{ fontSize: 'clamp(1rem, 1.9vw, 1.35rem)' }}
                >
                  {item.org}
                </h3>
                <span className="text-xs font-light uppercase tracking-wider text-[#D7E2EA]/55 sm:text-sm">
                  {item.role}
                </span>
              </div>
              <HeartHandshake
                size={20}
                className="mt-0.5 shrink-0 text-[#D7E2EA]/25"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[0.65rem] font-light uppercase tracking-widest text-[#D7E2EA]/35">
                {item.period}
              </span>
              <span className="rounded-full border border-[#D7E2EA]/20 px-3 py-0.5 text-[0.6rem] font-light uppercase tracking-widest text-[#D7E2EA]/50">
                {item.cause}
              </span>
            </div>

            <ul className="mt-1 flex flex-col gap-3">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="relative pl-5 text-sm font-light leading-relaxed text-[#D7E2EA]/55"
                >
                  <span className="absolute left-0 top-[0.7em] h-px w-3 bg-[#D7E2EA]/25" />
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
