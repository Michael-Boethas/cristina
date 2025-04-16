'use client';

import Image from 'next/image';
import Link from 'next/link';
import useOnVisible from 'hooks/useOnVisible';
import { IPortfolioItem } from 'types';

interface IPortfolioItemProps {
  entry: IPortfolioItem;
  index: number;
  classes: string;
}

export default function PortfolioItem({
  entry,
  index,
  classes,
}: IPortfolioItemProps): React.JSX.Element {
  const [industryRef, isVisible] = useOnVisible(0.05, true);

  return (
    <figure
      ref={industryRef}
      style={{
        transitionDelay: `${index * 120}ms`,
        willChange: 'opacity',
      }}
      className={`${classes} xl:transition-opacity xl:duration-[400ms] ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Link href={`/portfolio/${entry.slug}`} className="hover-pop relative block h-full">
        <Image
          src={entry.project_content.thumbnail_url}
          alt={`Thumbnail for ${entry.label}`}
          fill
          sizes="50vw"
          priority
        />
        <figcaption className="absolute left-0 top-0 z-10 flex min-h-full min-w-full items-center justify-center bg-black bg-opacity-50 p-4 text-center font-semibold text-fg-2 hover:bg-opacity-80">
          {entry.label}
        </figcaption>
      </Link>
    </figure>
  );
}
