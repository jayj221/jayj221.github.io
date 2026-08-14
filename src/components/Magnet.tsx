import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

type MagnetProps = {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  innerClassName?: string;
};

/**
 * Mouse-following magnetic hover effect. The cursor "pulls" the wrapped
 * element toward it once it enters `padding` px around the element's bounds.
 */
export default function Magnet({
  children,
  padding = 100,
  disabled = false,
  strength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
  innerClassName = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (disabled) {
      setActive(false);
      setOffset({ x: 0, y: 0 });
      return;
    }

    const handleMove = (e: MouseEvent) => {
      const node = ref.current;
      if (!node) return;

      const { left, top, width, height } = node.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const withinX = Math.abs(e.clientX - centerX) < width / 2 + padding;
      const withinY = Math.abs(e.clientY - centerY) < height / 2 + padding;

      if (withinX && withinY) {
        setActive(true);
        setOffset({
          x: (e.clientX - centerX) / strength,
          y: (e.clientY - centerY) / strength,
        });
      } else {
        setActive(false);
        setOffset({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, [disabled, padding, strength]);

  return (
    <div ref={ref} className={className}>
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: active ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}
