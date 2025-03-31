"use client";

import { useState } from "react";
import Image from "next/image";

interface ILightboxGalleryProps {
  gallery: { image: string }[];
  classes?: string;
}

export default function LightboxGallery({
  gallery,
  classes,
}: ILightboxGalleryProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState<
    Record<number, { width: number; height: number; ratio: number }>
  >({});

  return (
    <div className={classes}>
      {gallery.map((item, index) => (
        <div key={index}>
          {/* Button to open modal */}
          <button
            className="relative shadow-[0_5px_6px_1px_#2229] transition hover:scale-[1.12]"
            onClick={() => setIsOpen(index)}
            aria-label={`View image #${index}`}
          >
            <Image
              src={item.image}
              alt={`Gallery image ${index}`}
              width={600}
              height={600}
              onLoadingComplete={(img) =>
                setDimensions((prev) => ({
                  ...prev,
                  [index]: {
                    width: img.naturalWidth,
                    height: img.naturalHeight,
                    ratio: img.naturalWidth / img.naturalHeight,
                  },
                }))
              }
            />
          </button>

          {/* Modal window tied to clicked image */}
          {isOpen === index && (
            <div
              className="backdrop fixed inset-0 flex items-center justify-center"
              onClick={() => setIsOpen(null)}
            >
              <div
                className={`fade-in relative border-8 border-[#fffa] lg:h-[66vh]`}
                onClick={(event) => event.stopPropagation()}
                style={{
                  aspectRatio: dimensions[index]?.ratio || 1, // Default ratio 1:1 to prevent errors
                }}
              >
                <Image src={item.image} alt={`Gallery image ${index}`} fill />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
