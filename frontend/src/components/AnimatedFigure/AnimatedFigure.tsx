'use client';

import { useEffect, useRef, useState } from 'react';
import useOnVisible from 'hooks/useOnVisible';

export interface IAnimatedFigureProps {
  value: number;
  duration?: number;
  className?: string;
}

/**
 * AnimatedFigure component displays a number that animates from 0 to a specified value when the element becomes visible in the viewport.
 *
 * @param {object} props - The props for the component.
 * @param {number} props.value - The target number to animate to.
 * @param {number} [props.duration=800] - The duration over which the animation runs. Default is 800ms.
 * @param {string} [props.className] - Optional className to style the component.
 * @returns {JSX.Element} The animated figure element that displays the number.
 */
export default function AnimatedFigure({ value, duration = 800, className }: IAnimatedFigureProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [ref, isVisible] = useOnVisible(0.05, true);
  const startTimestamp = useRef<number | null>(null);

  useEffect(() => {
    if (!isVisible) return;

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
  }, [isVisible, value, duration]); // isVisible triggers the animation

  return (
    <span ref={ref} className={className}>
      {displayValue.toLocaleString()}
    </span>
  );
}
