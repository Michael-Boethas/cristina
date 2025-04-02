"use client";

import Image from "next/image";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { IProjectContent } from "types";

interface ICarouselProps {
  imageList: IProjectContent["gallery"];
  classes?: string;
}

export default function Carousel({
  imageList,
  classes,
}: ICarouselProps): React.JSX.Element {
  const gallery = imageList?.map((item) => item.imageUrl) || [];
  const [current, setCurrent] = useState(0);

  const total = gallery.length;

  const prev = (current - 1 + total) % total;
  const next = (current + 1) % total;

  const handleNext = () => setCurrent(next);
  const handlePrev = () => setCurrent(prev);

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackTouch: true,
  });

  return (
    <div
      {...handlers}
      className={`relative flex items-center justify-center gap-4 ${classes}`}
    >
      {total > 0 && (
        <>
          {/* Previous Image (left) */}
          <div className="scale-90 opacity-50 transition-transform">
            <Image
              src={gallery[prev]}
              alt="Previous image"
              width={200}
              height={400}
            />
          </div>

          {/* Current Image (center) */}
          <div className="scale-100 border-2 border-black transition-transform">
            <Image
              src={gallery[current]}
              alt="Current image"
              width={300}
              height={600}
            />
          </div>

          {/* Next Image (right) */}
          <div className="scale-90 opacity-50 transition-transform">
            <Image
              src={gallery[next]}
              alt="Next image"
              width={200}
              height={400}
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 bg-gray-300 p-2"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 bg-gray-300 p-2"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
