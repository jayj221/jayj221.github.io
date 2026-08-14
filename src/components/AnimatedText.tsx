import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

type AnimatedTextProps = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
};

function Char({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible copy holds the layout; the animated copy sits on top. */}
      <span className="opacity-0">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
}

/**
 * Character-by-character scroll reveal. Each character fades from 0.2 to 1
 * as the scroll progress sweeps across the paragraph.
 */
export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.replace(/ /g, '').length;
  let charIndex = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => {
        const chars = word.split('').map((char) => {
          const start = charIndex / totalChars;
          const end = (charIndex + 1) / totalChars;
          charIndex += 1;
          return { char, range: [start, end] as [number, number] };
        });

        return (
          <span key={wi} className="inline-block whitespace-nowrap">
            {chars.map(({ char, range }, ci) => (
              <Char key={ci} char={char} progress={scrollYProgress} range={range} />
            ))}
            {wi < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      })}
    </p>
  );
}
