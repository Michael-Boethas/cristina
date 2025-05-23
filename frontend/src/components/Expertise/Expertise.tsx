'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IExpertiseItem } from '../../types';

export interface IExpertiseProps {
  entry: IExpertiseItem;
}

/**
 * Expertise component displays an expertise item with an icon, label, and collapsible content.
 *
 * @param {IExpertiseProps} props - The props for the expertise component.
 * @param {IExpertiseItem} props.entry - The expertise item to be displayed, containing an icon, label, and text.
 *
 * @returns {React.JSX.Element}
 */
export default function Expertise({ entry }: IExpertiseProps): React.JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleContent = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`m-2 flex max-w-md flex-grow flex-col items-center gap-4 bg-bg-5 p-6 text-center shadow-xl`}
    >
      <Image
        src={entry.icon}
        alt={`Icon representing ${entry.label}`}
        width={400}
        height={400}
        className="h-auto w-20 max-w-36 xs:w-28 lg:w-auto"
      />
      <h3 className="md:min-h-[80px]">{entry.label}</h3>
      <button
        onClick={toggleContent}
        aria-label={isCollapsed ? 'Expand content' : 'Collapse content'}
      >
        <i className="hover-text-1 fa-sharp fa-solid fa-plus" />
      </button>
      <p className={`text-[80%] md:max-w-sm ${isCollapsed ? 'text--collapsed' : 'text--expanded'}`}>
        {entry.text}
      </p>
    </div>
  );
}
