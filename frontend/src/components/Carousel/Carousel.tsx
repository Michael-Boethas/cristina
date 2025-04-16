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
  const total = gallery.length;

  const [current, setCurrent] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const rotateIndex = (index: number, steps: number) => (index + steps + total) % total;

  const prevIndex = rotateIndex(current, -1);
  const nextIndex = rotateIndex(current, 1);

  const handleNext = () => setCurrent(rotateIndex(current, 1));
  const handlePrev = () => setCurrent(rotateIndex(current, -1));

  const resetDrag = () => {
    setIsDragging(false);
    setDragOffset(0);
  };

  const handlers = useSwipeable({
    onSwiping: ({ deltaX }) => {
      setIsDragging(true);
      setDragOffset(deltaX);
    },
    onSwipedLeft: () => {
      handleNext();
      resetDrag();
    },
    onSwipedRight: () => {
      handlePrev();
      resetDrag();
    },
    onSwiped: resetDrag,
    trackTouch: true,
    trackMouse: true,
  });

  function getStyle(index: number): React.CSSProperties {
    const isCenter = index === current;
    const isLeft = index === prevIndex;
    const isRight = index === nextIndex;

    if (!isCenter && !isLeft && !isRight) return { display: 'none' };
    const baseTranslate = isCenter ? 0 : isLeft ? -120 : 120;
    const scale = isCenter ? 1 : 0.8;
    const finalTranslate = isCenter ? dragOffset : 0;

    return {
      transform: `translateX(${baseTranslate + finalTranslate}px) scale(${scale})`,
      transition: isDragging ? 'none' : 'opacity 300ms ease, transform 500ms ease',
      zIndex: isCenter ? 3 : 2,
      opacity: isCenter ? 1 : 0.9,
      position: 'absolute',
      maxHeight: '100%',
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
  }

  return (
    <div
      {...handlers}
      className={`${classes} relative my-16 flex w-full max-w-4xl justify-center overflow-hidden`}
      onClick={(e) => e.stopPropagation()}
    >
      <i
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="fa-sharp-duotone fa-solid fa-circle-chevron-left absolute bottom-1/2 left-2 z-10 text-5xl opacity-50 hover:opacity-80 sm:top-1/2 sm:-translate-y-1/2 lg:hidden lg:text-bg-1 lg:opacity-80"
        aria-label="Previous image"
      />
      {[prevIndex, current, nextIndex].map((index) => (
        <div key={index} style={getStyle(index)}>
          <Image
            src={gallery[index]}
            alt="carousel image"
            width={600}
            height={800}
            className={`max-h-[75vh] w-auto object-contain transition-all ${index === current ? 'shadow-[0_10px_10px_1px_#000b]' : 'shadow-[0_3px_3px_1px_#000b]'}`}
            priority={index === current}
          />
        </div>
      ))}
      <i
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="fa-sharp-duotone fa-solid fa-circle-chevron-right absolute bottom-1/2 right-2 z-10 text-5xl opacity-50 hover:opacity-80 sm:top-1/2 sm:-translate-y-1/2 lg:hidden lg:text-bg-1 lg:opacity-80"
        aria-label="Next image"
      />
    </div>
  );
}
