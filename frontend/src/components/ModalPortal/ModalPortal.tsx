'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * Renders children into a portal in the DOM.
 * Only rendered after the component has mounted to avoid stacking context issues related to CSS animations.
 *
 * @param {object} props - The props for the ModalPortal component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the modal portal.
 *
 * @returns {React.ReactNode | null} The modal portal containing the children, or null if the component has not yet mounted.
 */
export default function ModalPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return createPortal(children, document.body);
}
