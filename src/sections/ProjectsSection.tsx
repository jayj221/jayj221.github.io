import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { PROJECTS } from '../data/content';
import type { Project } from '../data/content';

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';
const TOTAL = PROJECTS.length;

type Fit = 'cover' | 'contain';

// Phone captures are far taller than their tile, so cropping them cuts the
// device in half. Contain them on a panel instead and let them sit centred.
const shot = (fit: Fit) =>
  fit === 'contain'
    ? 'object-contain p-3 bg-[#111113]'
    : 'object-cover object-top bg-[#141414]';

/**
 * Three phone captures: an even row of devices. The 40/60 split below is built
 * for landscape shots and leaves portrait ones stranded in empty panels.
 */
function PhoneRow({ images }: { images: string[] }) {
  return (
    <div className="flex items-stretch justify-center gap-3 md:min-h-0 md:flex-1 md:gap-6">
      {images.map((src, i) => (
        <div
          key={src}
          className={`flex flex-1 items-center justify-center overflow-hidden bg-[#111113] p-2 sm:p-3 ${RADIUS} ${
            i === 2 ? 'hidden sm:flex' : ''
          }`}
        >
          <img
            src={src}
            alt=""
            loading="lazy"
            className="h-[clamp(200px,26vw,460px)] w-full object-contain md:h-full"
          />
        </div>
      ))}
    </div>
  );
}

/** Three shots: the spec's 40/60 split — two stacked left, one tall right. */
function TripleGrid({ images, fit }: { images: string[]; fit: Fit }) {
  return (
    <div className="flex items-stretch gap-3 md:min-h-0 md:flex-1 md:gap-4">
      <div className="flex w-[40%] flex-col gap-3 md:min-h-0 md:gap-4">
        <img
          src={images[0]}
          alt=""
          loading="lazy"
          className={`h-[clamp(130px,16vw,230px)] w-full md:h-auto md:min-h-0 md:flex-[2] ${shot(fit)} ${RADIUS}`}
        />
        <img
          src={images[1]}
          alt=""
          loading="lazy"
          className={`h-[clamp(160px,22vw,340px)] w-full md:h-auto md:min-h-0 md:flex-[3] ${shot(fit)} ${RADIUS}`}
        />
      </div>
      <div className="w-[60%] md:min-h-0">
        <img
          src={images[2]}
          alt=""
          loading="lazy"
          className={`h-full w-full ${shot(fit)} ${RADIUS}`}
        />
      </div>
    </div>
  );
}

/** One shot: let it run the full width of the card. */
function SingleShot({ src, fit }: { src: string; fit: Fit }) {
  return (
    <div className={`overflow-hidden md:min-h-0 md:flex-1 ${RADIUS}`}>
      <img
        src={src}
        alt=""
        loading="lazy"
        className={`h-[clamp(200px,30vw,420px)] w-full md:h-full ${shot(fit)}`}
      />
    </div>
  );
}

/** No UI to screenshot: show what the thing actually does instead. */
function TerminalPanel({ lines }: { lines: string[] }) {
  return (
    <div
      className={`flex flex-col overflow-hidden border border-[#D7E2EA]/15 bg-[#08080A] md:min-h-0 md:flex-1 ${RADIUS}`}
    >
      <div className="flex items-center gap-2 border-b border-[#D7E2EA]/10 px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#D7E2EA]/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#D7E2EA]/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#D7E2EA]/20" />
      </div>
      <pre
        className="overflow-x-auto px-5 py-5 leading-relaxed text-[#D7E2EA]/70 sm:px-7"
        style={{
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          fontSize: 'clamp(0.62rem, 0.95vw, 0.85rem)',
        }}
      >
        {lines.map((line, i) => (
          <div key={i} className={line.startsWith('  ✓') ? 'text-[#7CE7B0]' : undefined}>
            {line || ' '}
          </div>
        ))}
      </pre>
    </div>
  );
}

function StatsPanel({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div
      className={`grid grid-cols-2 gap-px overflow-hidden border border-[#D7E2EA]/15 bg-[#D7E2EA]/10 md:min-h-0 md:flex-1 md:grid-cols-4 ${RADIUS}`}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center justify-center gap-2 bg-[#08080A] px-4 py-8"
        >
          <span
            className="hero-heading font-black leading-none"
            style={{
              fontSize: 'clamp(1.25rem, 3vw, 2.5rem)',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {stat.value}
          </span>
          <span className="text-center text-[0.6rem] font-light uppercase tracking-widest text-[#D7E2EA]/45">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function CardBody({ project }: { project: Project }) {
  const fit: Fit = project.fit ?? 'cover';
  if (project.images.length >= 3 && fit === 'contain')
    return <PhoneRow images={project.images} />;
  if (project.images.length >= 3)
    return <TripleGrid images={project.images} fit={fit} />;
  if (project.images.length === 1)
    return <SingleShot src={project.images[0]} fit={fit} />;
  if (project.panel?.kind === 'terminal')
    return <TerminalPanel lines={project.panel.lines ?? []} />;
  if (project.panel?.kind === 'stats')
    return <StatsPanel stats={project.panel.stats ?? []} />;
  return null;
}

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

      const distance = el.offsetHeight - window.innerHeight;
      const progress =
        distance > 0
          ? Math.min(1, Math.max(0, (window.scrollY - el.offsetTop) / distance))
          : 0;

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

        <CardBody project={project} />
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
        Projects
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
