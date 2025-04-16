'use client';

import { useEffect, useRef, useState } from 'react';
import { triggerOnVisible } from 'utils/utils';

interface IAnimatedFigureProps {
  value: number;
  duration?: number;
  className?: string;
}

export default function AnimatedFigure({ value, duration = 800, className }: IAnimatedFigureProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const startTimestamp = useRef<number | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const cleanup = triggerOnVisible(ref.current, 'triggered');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(ref.current);

    return () => {
      cleanup();
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!shouldAnimate) return;

    const step = (timestamp: number) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const progress = timestamp - startTimestamp.current;
      const ratio = Math.min(progress / duration, 1);
      const current = Math.floor(ratio * value);

      setDisplayValue(current);

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [shouldAnimate, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue.toLocaleString()}
    </span>
  );
}
