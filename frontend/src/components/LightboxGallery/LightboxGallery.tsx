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
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleContent = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={classes}>
      {gallery.map((gallery, index) => {
        return (
          // Button to open modal
          <button
            key={index}
            className="relative shadow-xl transition hover:scale-[1.15]"
            onClick={toggleContent}
            aria-label={`View image`}
          >
            <Image
              src={gallery.image}
              alt={`Gallery image ${index}`}
              width={439}
              height={778}
            />
            <div>
              {/* Modal window */}
              {!isCollapsed && (
                <div className="backdrop" onClick={toggleContent}>
                  <div
                    className="fade-in"
                    // Prevent closing modal when clicking inside
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Image
                      src={gallery.image}
                      alt={`Gallery image ${index}`}
                      fill
                    />
                  </div>
                </div>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
