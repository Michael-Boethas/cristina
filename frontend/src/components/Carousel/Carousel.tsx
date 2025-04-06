'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { IProjectContent } from 'types';

interface ICarouselProps {
  imageList: IProjectContent['gallery'];
  classes?: string;
}

export default function Carousel({ imageList, classes }: ICarouselProps): React.JSX.Element {
  const gallery = imageList?.map((item) => item.imageUrl) || [];

  const [aspectRatios, setAspectRatios] = useState<Record<number, number>>({});
  const [displayed, setDisplayed] = useState<{ current: number; second: number; third: number }>({
    current: 0,
    second: 1,
    third: 2,
  });
  const [animation, setAnimation] = useState('');

  // Returns the index that is "steps" away from "current", wrapping around if it goes out of bounds.
  // Positive "steps" move forward, negative "steps" move backward.
  function rotateIndex(current: number, total: number, steps: number) {
    return steps > 0
      ? (current + steps) % total
      : steps < 0
        ? (current + steps + total) % total
        : current;
  }

  const total = gallery.length;

  // Handling user interactions
  const handleNext = () => {
    setAnimation('');
    setTimeout(() => {
      setDisplayed({
        current: rotateIndex(displayed.current, total, 1),
        second: rotateIndex(displayed.current, total, 2),
        third: rotateIndex(displayed.current, total, 3),
      });
      setAnimation('');
    }, 300);
  };
  const handlePrev = () => {
    setAnimation('');
    setTimeout(() => {
      setDisplayed({
        current: rotateIndex(displayed.current, total, -1),
        second: rotateIndex(displayed.current, total, -2),
        third: rotateIndex(displayed.current, total, -3),
      });
      setAnimation('');
    }, 300);
  };

  // Simplifying swipes handling with react-swipeable
  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackTouch: true,
  });

  return (
    <div
      {...handlers}
      className={`${classes} carousel relative my-8 flex min-h-[80vh] w-full items-center justify-center`}
    >
      {gallery.length > 0 &&
        gallery.map((entry, index) => {
          return (
            <div
              key={index}
              className={`${animation} absolute h-[85%] shadow-[0_3px_6px_2px_#2224] ${
                index === displayed.current
                  ? 'current'
                  : index === displayed.second
                    ? 'second'
                    : index === displayed.third
                      ? 'third'
                      : 'hidden'
              }`}
              style={{
                aspectRatio: aspectRatios[index] ?? 'auto',
              }}
            >
              <Image
                src={entry}
                alt="Image"
                fill
                className="object-contain"
                // Getting intrinsic dimensions
                onLoad={(e) => {
                  const { naturalWidth, naturalHeight } = e.currentTarget;
                  const ratio = naturalWidth / naturalHeight;
                  setAspectRatios((prev) => ({ ...prev, [index]: ratio }));
                }}
              />
            </div>
          );
        })}
      {/* Navigation Buttons */}
      <i
        onClick={handlePrev}
        aria-label="button"
        className="fa-sharp-duotone fa-solid fa-circle-chevron-left absolute bottom-0 left-[33%] text-3xl"
      />
      <i
        onClick={handleNext}
        aria-label="button"
        className="fa-sharp-duotone fa-solid fa-circle-chevron-right absolute bottom-0 right-[33%] text-3xl"
      />
    </div>
  );
}
