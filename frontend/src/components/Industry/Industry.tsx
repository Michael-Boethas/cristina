'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useOnVisible from 'hooks/useOnVisible';
import ModalPortal from 'components/ModalPortal/ModalPortal';
import { IIndustryItem, ICompanyItem } from '../../types';

interface IIndustryProps {
  entry: IIndustryItem;
  index: number;
  classes: string;
}

/**
 * Industry component displays a clickable card with an image and label. Upon clicking,
 * a modal appears displaying a list of companies associated with the industry.
 *
 * @param {IIndustryProps} props - The props for the industry item.
 * @param {IIndustryItem} props.entry - The data representing the industry, including its label, image, and associated companies.
 * @param {number} props.index - The index of the current industry item, used for transition delay.
 * @param {string} props.classes - The CSS classes to be applied to the industry card.
 *
 * @returns {React.JSX.Element} The rendered industry card, with a modal showing the companies upon click.
 */
export default function Industry({ entry, index, classes }: IIndustryProps): React.JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [industryRef, isVisible] = useOnVisible(0.05, true);

  const toggleContent = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      ref={industryRef}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`${classes} transition-none ease-out xl:transition-all xl:duration-[500ms] ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[100%] opacity-0'
      }`}
    >
      {/* Button to open modal */}
      <button
        className="relative aspect-square w-full border border-[2px] border-bg-2 bg-bg-2"
        onClick={toggleContent}
        aria-label={`Show content for ${entry.label}`}
      >
        <Image
          src={entry.image}
          alt={`Image representing ${entry.label}`}
          fill
          sizes="(max-width: 768px) 500px, (max-width: 1200px) 400px"
          className="rounded-[30px] object-cover"
        />
        <div className="industry__overlay">
          <h3 className="text-3xl text-white">{entry.label}</h3>
        </div>
      </button>

      {/* Modal window */}
      {!isCollapsed && (
        <ModalPortal>
          <div className="backdrop z-[999]" onClick={toggleContent}>
            <div
              className="industry__content fade-in relative z-[1000]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-start justify-between">
                <h3 className="sm:opacity-1 ps-3 text-3xl sm:text-4xl">{entry.label}</h3>
                <button aria-label="Close button" onClick={toggleContent}>
                  <i className="hover-text-1 fa-solid fa-xmark -translate-y-2 ps-4 text-2xl" />
                </button>
              </div>

              {/* Companies List */}
              <div className="p-3 py-6">
                {entry.companies.map((company: ICompanyItem, index: number) => (
                  <div key={index} className="mb-4">
                    {company.url ? (
                      <Link
                        href={company.url}
                        target="_blank"
                        rel="noopener"
                        aria-label={`Visit ${company.name}'s website`}
                        className="hover-text-1 inline-block pb-2 text-xl font-semibold sm:text-2xl"
                      >
                        {company.name}
                      </Link>
                    ) : (
                      <span className="text-xl font-semibold sm:text-2xl">{company.name}</span>
                    )}
                    <p className="text-lg md:text-xl">{company.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ModalPortal>
      )}
    </div>
  );
}
