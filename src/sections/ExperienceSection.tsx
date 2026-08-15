import FadeIn from '../components/FadeIn';
import { EXPERIENCE } from '../data/content';
import type { Role } from '../data/content';

function RoleEntry({ role, delay }: { role: Role; delay: number }) {
  return (
    <FadeIn
      delay={delay}
      className="relative border-l border-[#D7E2EA]/15 pb-12 pl-6 last:pb-0 sm:pl-10"
    >
      {/* Node on the timeline rail; filled for anything current. */}
      <span
        className={`absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full ${
          role.tag === 'Current' ? 'bg-[#D7E2EA]' : 'bg-[#D7E2EA]/40'
        }`}
      />

      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h4
          className="font-medium uppercase leading-tight tracking-wide text-[#D7E2EA]"
          style={{ fontSize: 'clamp(1.05rem, 2vw, 1.65rem)' }}
        >
          {role.company}
        </h4>
        <span className="whitespace-nowrap text-xs font-light uppercase tracking-widest text-[#D7E2EA]/40 sm:text-sm">
          {role.period}
        </span>
      </div>

      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="text-sm font-light uppercase tracking-wider text-[#D7E2EA]/70 sm:text-base">
          {role.title}
        </span>
        {role.tag && (
          <span
            className={`rounded-full border px-3 py-0.5 text-[0.65rem] font-light uppercase tracking-widest ${
              role.tag === 'Current'
                ? 'border-[#D7E2EA]/60 text-[#D7E2EA]'
                : 'border-[#D7E2EA]/20 text-[#D7E2EA]/50'
            }`}
          >
            {role.tag}
          </span>
        )}
      </div>

      {role.location && (
        <p className="mt-1 text-xs font-light uppercase tracking-wider text-[#D7E2EA]/30">
          {role.location}
        </p>
      )}

      {role.subRoles && (
        <ul className="mt-4 flex flex-col gap-1.5">
          {role.subRoles.map((sub) => (
            <li
              key={sub.title}
              className="flex flex-wrap items-baseline justify-between gap-x-4 border-b border-[#D7E2EA]/10 pb-1.5 text-xs font-light uppercase tracking-wider text-[#D7E2EA]/50 sm:text-sm"
            >
              <span>{sub.title}</span>
              <span className="text-[#D7E2EA]/30">{sub.period}</span>
            </li>
          ))}
        </ul>
      )}

      {role.points && (
        <ul className="mt-4 flex flex-col gap-3">
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
      )}

      {role.stats && (
        <div className="mt-5 flex flex-wrap gap-x-10 gap-y-4">
          {role.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span
                className="hero-heading font-black leading-none"
                style={{
                  fontSize: 'clamp(1.15rem, 2.4vw, 1.85rem)',
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
      )}
    </FadeIn>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <FadeIn
        as="h2"
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-24"
        style={{ fontSize: 'clamp(2.5rem, 11vw, 150px)' }}
      >
        Experience
      </FadeIn>

      <div className="mx-auto flex max-w-5xl flex-col gap-20 sm:gap-24">
        {EXPERIENCE.map((group) => (
          <div key={group.key}>
            {/* Group header — the bifurcation between kinds of work. */}
            <FadeIn className="mb-10 flex flex-col gap-3 sm:mb-12">
              <div className="flex items-center gap-4">
                <h3
                  className="whitespace-nowrap font-black uppercase leading-none tracking-tight text-[#D7E2EA]"
                  style={{ fontSize: 'clamp(1.35rem, 3.2vw, 2.6rem)' }}
                >
                  {group.label}
                </h3>
                <span className="h-px flex-1 bg-[#D7E2EA]/15" />
                <span className="whitespace-nowrap text-[0.65rem] font-light uppercase tracking-[0.25em] text-[#D7E2EA]/30">
                  {group.roles.length}{' '}
                  {group.roles.length === 1 ? 'role' : 'roles'}
                </span>
              </div>
              <p className="text-sm font-light uppercase tracking-wider text-[#D7E2EA]/40">
                {group.blurb}
              </p>
            </FadeIn>

            {group.roles.map((role, i) => (
              <RoleEntry key={role.company} role={role} delay={i * 0.07} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
