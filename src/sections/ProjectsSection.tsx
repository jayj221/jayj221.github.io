import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { PROJECTS } from '../data/content';
import type { Project } from '../data/content';

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';
const TOTAL = PROJECTS.length;

function Card({
  project,
  index,
  containerRef,
}: {
  project: Project;
  index: number;
  containerRef: RefObject<HTMLElement>;
}) {
  const scale = useMotionValue(1);

  // Each card owns its scroll subscription and writes only its own motion
  // value, so nothing depends on cross-component binding order.
  useEffect(() => {
    const targetScale = 1 - (TOTAL - 1 - index) * 0.03;
    const start = index / TOTAL;

    const update = () => {
      const el = containerRef.current;
      if (!el) return;

      // Section progress, equivalent to a 'start start' → 'end end' offset.
      const distance = el.offsetHeight - window.innerHeight;
      const progress =
        distance > 0
          ? Math.min(1, Math.max(0, (window.scrollY - el.offsetTop) / distance))
          : 0;

      // Remap so this card only shrinks once the stack reaches it.
      const local = progress <= start ? 0 : (progress - start) / (1 - start);
      scale.set(1 + (targetScale - 1) * local);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [containerRef, index, scale]);

  return (
    // Cards stack normally on mobile; the sticky scale-down effect is md+ only,
    // where there is enough height for a card to sit fully in view.
    <div className="mb-8 md:sticky md:top-14 md:mb-0 md:flex md:h-[calc(100vh-3.5rem)] md:items-start md:justify-center">
      <motion.article
        style={{ scale, top: `${index * 28}px` }}
        className={`relative flex w-full max-w-6xl flex-col gap-6 border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:h-[calc(100vh-7rem)] md:gap-8 md:overflow-hidden md:p-8 ${RADIUS}`}
      >
        <div className="flex flex-col gap-4 md:shrink-0 md:flex-row md:items-start md:gap-8">
          <span
            className="hero-heading font-black leading-none"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 110px)' }}
          >
            {project.number}
          </span>

          <div className="flex flex-1 flex-col gap-2">
            <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
              {project.category}
            </span>
            <h3
              className="font-medium uppercase leading-tight text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1.25rem, 2.4vw, 2.1rem)' }}
            >
              {project.name}
            </h3>
            <p
              className="max-w-3xl font-light leading-relaxed text-[#D7E2EA]/60"
              style={{ fontSize: 'clamp(0.8rem, 1.1vw, 1rem)' }}
            >
              {project.summary}
            </p>
            <p className="pt-1 text-xs font-light uppercase tracking-wider text-[#D7E2EA]/40 sm:text-sm">
              {project.stack}
            </p>
          </div>

          <div className="md:pt-2">
            <LiveProjectButton label={project.linkLabel} href={project.href} />
          </div>
        </div>

        {/* On md+ the image row absorbs whatever height the header leaves. */}
        <div className="flex items-stretch gap-3 md:min-h-0 md:flex-1 md:gap-4">
          <div className="flex w-[40%] flex-col gap-3 md:min-h-0 md:gap-4">
            <img
              src={project.images[0]}
              alt=""
              loading="lazy"
              className={`h-[clamp(130px,16vw,230px)] w-full object-cover md:h-auto md:min-h-0 md:flex-[2] ${RADIUS}`}
            />
            <img
              src={project.images[1]}
              alt=""
              loading="lazy"
              className={`h-[clamp(160px,22vw,340px)] w-full object-cover md:h-auto md:min-h-0 md:flex-[3] ${RADIUS}`}
            />
          </div>

          <div className="w-[60%] md:min-h-0">
            <img
              src={project.images[2]}
              alt=""
              loading="lazy"
              className={`h-full w-full object-cover ${RADIUS}`}
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  const container = useRef<HTMLElement>(null);

  return (
    <section
      ref={container}
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-20 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <FadeIn
        as="h2"
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Project
      </FadeIn>

      {PROJECTS.map((project, i) => (
        <Card
          key={project.number}
          project={project}
          index={i}
          containerRef={container}
        />
      ))}
    </section>
  );
}
