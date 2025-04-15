'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IProjectContent } from 'types';

interface ILightboxGalleryProps {
  imageList: IProjectContent['gallery'];
  classes?: string;
}

export default function LightboxGallery({
  imageList,
  classes,
}: ILightboxGalleryProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState<
    Record<number, { width: number; height: number; ratio: number }>
  >({});

  return (
    <div className={classes}>
      {imageList?.map((item, index) => (
        <div key={index}>
          {/* Button to open modal */}
          <button
            className="relative shadow-[0_3px_3px_1px_#2229] transition hover:scale-[1.12] hover:shadow-[0_10px_10px_1px_#2229]"
            onClick={() => setIsOpen(index)}
            aria-label={`View image #${index}`}
          >
            <Image
              src={item.imageUrl}
              alt={`Image ${index}`}
              width={600}
              height={600}
              onLoad={(e) => {
                const img = e.target as HTMLImageElement;
                setDimensions((prev) => ({
                  ...prev,
                  [index]: {
                    width: img.naturalWidth,
                    height: img.naturalHeight,
                    ratio: img.naturalWidth / img.naturalHeight,
                  },
                }));
              }}
            />
          </button>

          {/* Modal window */}
          {isOpen === index && (
            <div
              className="backdrop inset-0 flex items-center justify-center"
              onClick={() => setIsOpen(null)}
            >
              <div
                className={`fade-in relative lg:h-[66vh]`}
                onClick={(event) => event.stopPropagation()}
                style={{
                  aspectRatio: dimensions[index]?.ratio || 1,
                }}
              >
                <Image src={item.imageUrl} alt={`Image ${index}`} fill />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
