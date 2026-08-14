import { useEffect, useRef, useState } from 'react';

/**
 * Real screenshots of the work, not stock art. Phone-shaped captures sit in
 * portrait tiles, desktop captures in landscape tiles, so nothing is cropped
 * into nonsense.
 */
type Tile = { src: string; portrait?: boolean };

const ROW_ONE: Tile[] = [
  { src: './work/nomo-ten.png', portrait: true },
  { src: './work/aicebook-studio.png' },
  { src: './work/pulse-intro.png', portrait: true },
  { src: './work/hallucinot-demo.gif' },
  { src: './work/nomo-call.png', portrait: true },
];

const ROW_TWO: Tile[] = [
  { src: './work/pulse-trends.png', portrait: true },
  { src: './work/nomo-waitlist.png' },
  { src: './work/nomo-prompts.png', portrait: true },
  { src: './work/pulse-score.png', portrait: true },
];

function Row({ tiles, offset }: { tiles: Tile[]; offset: number }) {
  // Tripled so the strip never runs out of tiles while translating.
  const repeated = [...tiles, ...tiles, ...tiles];

  return (
    <div
      className="flex gap-3"
      style={{ transform: `translateX(${offset}px)`, willChange: 'transform' }}
    >
      {repeated.map((tile, i) => (
        <img
          key={i}
          src={tile.src}
          alt=""
          loading="lazy"
          className={`h-[270px] flex-shrink-0 rounded-2xl bg-[#141414] object-cover object-top ${
            tile.portrait ? 'w-[150px]' : 'w-[420px]'
          }`}
        />
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const node = ref.current;
      if (!node) return;
      setOffset((window.scrollY - node.offsetTop + window.innerHeight) * 0.3);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="flex flex-col gap-3 overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <Row tiles={ROW_ONE} offset={offset - 200} />
      <Row tiles={ROW_TWO} offset={-(offset - 200)} />
    </section>
  );
}
