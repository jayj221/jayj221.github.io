import ContactButton from '../components/ContactButton';
import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import { PROFILE } from '../data/content';

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
];

export default function HeroSection() {
  return (
    <section
      className="relative flex h-screen flex-col"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="flex justify-between px-6 pt-6 md:px-10 md:pt-8"
      >
        {NAV.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
          >
            {item.label}
          </a>
        ))}
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          // Sized so "Hi, i'm jayant" spans the viewport without clipping; the
          // spec's 14–17.5vw was tuned for a name two characters shorter.
          className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[15vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[15.25vw] md:-mt-5 md:text-[15.4vw] lg:text-[15.5vw]"
        >
          Hi, i&apos;m {PROFILE.firstName}
        </FadeIn>
      </div>

      <div className="mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          {PROFILE.tagline}
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="relative z-20">
          <ContactButton />
        </FadeIn>
      </div>

      {/* Positioning lives on this wrapper: FadeIn writes an inline transform,
          which would otherwise clobber the Tailwind -translate-x-1/2 centering. */}
      {/* Centred with flex rather than left-1/2 + translate: an absolutely
          positioned shrink-to-fit box offset by left:50% is capped at the
          remaining 50% of the width, which squashed the portrait. */}
      <div className="absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 justify-center sm:bottom-0 sm:top-auto sm:translate-y-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src="./portrait.png"
              alt={PROFILE.fullName}
              // Height-driven, width auto: the portrait keeps its footprint on
              // the page whatever aspect ratio the source render happens to be.
              className="h-[320px] w-auto select-none object-contain sm:h-[480px] md:h-[585px] lg:h-[690px]"
              draggable={false}
              // Falls back to the dashed placeholder until public/portrait.png exists.
              onError={(e) => {
                const img = e.currentTarget;
                if (img.dataset.fallback) return;
                img.dataset.fallback = 'true';
                img.src = './portrait-placeholder.svg';
              }}
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
