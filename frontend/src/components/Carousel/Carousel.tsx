"use client";

import Image from "next/image";
import { useState } from "react";
import { IProjectContent } from "types";

interface ICarouselProps {
  imageList: IProjectContent["gallery"];
  classes?: string;
}

export default function Carousel({
  imageList,
  classes,
}: ICarouselProps): React.JSX.Element {
  const gallery = imageList?.map((item, index) => {
    return { id: index, img: item.imageUrl };
  });
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className={classes}>
      <div>
        <Image
          src={gallery[currentImage]?.img}
          // alt={`Gallery image ${index}`}
          alt=""
          width={439}
          height={778}
        />
      </div>
    </div>
  );
}
