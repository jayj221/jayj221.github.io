import { ArrowUpRight, Github, Mail } from 'lucide-react';
import ContactButton from '../components/ContactButton';
import FadeIn from '../components/FadeIn';
import { ARCHIVE, PROFILE } from '../data/content';

export default function ArchiveSection() {
  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] px-5 pb-20 pt-24 sm:px-8 sm:pt-28 md:px-10 md:pt-32"
    >
      <FadeIn
        as="h2"
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-24"
        style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
      >
        More work
      </FadeIn>

      <div className="mx-auto grid max-w-5xl gap-px overflow-hidden rounded-[28px] border border-[#D7E2EA]/15 sm:grid-cols-2">
        {ARCHIVE.map((item, i) => {
          const Wrapper = item.href ? 'a' : 'div';

          return (
            <FadeIn key={item.name} delay={i * 0.08}>
              <Wrapper
                {...(item.href
                  ? { href: item.href, target: '_blank', rel: 'noreferrer' }
                  : {})}
                className="flex h-full flex-col gap-3 border-b border-[#D7E2EA]/15 p-6 transition-colors duration-200 hover:bg-[#D7E2EA]/[0.04] sm:p-8"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-medium uppercase leading-tight tracking-wide text-[#D7E2EA] sm:text-lg">
                    {item.name}
                  </h3>
                  {item.href && (
                    <ArrowUpRight
                      size={18}
                      className="mt-1 flex-shrink-0 text-[#D7E2EA]/50"
                    />
                  )}
                </div>
                <p className="text-sm font-light leading-relaxed text-[#D7E2EA]/55">
                  {item.blurb}
                </p>
                <p className="mt-auto pt-2 text-xs font-light uppercase tracking-wider text-[#D7E2EA]/35">
                  {item.stack}
                </p>
              </Wrapper>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn className="mx-auto mt-24 flex max-w-3xl flex-col items-center gap-8 text-center sm:mt-32">
        <p
          className="font-light uppercase leading-snug tracking-wide text-[#D7E2EA]/70"
          style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.25rem)' }}
        >
          Some of the work — trading systems, market-data pipelines — is
          private. Happy to walk through it.
        </p>

        <ContactButton href={`mailto:${PROFILE.email}`} label="Contact Me" />

        <div className="mt-4 flex flex-wrap items-center justify-center gap-6">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-light uppercase tracking-wider text-[#D7E2EA]/60 transition-opacity duration-200 hover:opacity-100 hover:text-[#D7E2EA]"
          >
            <Github size={16} />
            github.com/jayj221
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="flex items-center gap-2 text-sm font-light uppercase tracking-wider text-[#D7E2EA]/60 transition-colors duration-200 hover:text-[#D7E2EA]"
          >
            <Mail size={16} />
            {PROFILE.email}
          </a>
        </div>

        <p className="mt-10 text-xs font-light uppercase tracking-widest text-[#D7E2EA]/25">
          © {new Date().getFullYear()} {PROFILE.fullName}
        </p>
      </FadeIn>
    </section>
  );
}
