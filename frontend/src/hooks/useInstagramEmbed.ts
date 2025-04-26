import { useEffect } from 'react';


/**
 * Custom hook to load and process Instagram embed scripts.
 * It dynamically loads the Instagram embed script if not already loaded.
 * Once loaded, it processes any Instagram embeds present on the page.
 */
export default function useInstagramEmbed() {
  useEffect(() => {
    // Check if the script is already added
    if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.instagram.com/embed.js';
      document.head.appendChild(script);

      script.onload = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((window as any).instgrm) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).instgrm.Embeds.process();
        }
      };

      return () => {
        if (script && script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((window as any).instgrm) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).instgrm.Embeds.process();
      }
    }
  }, []);
}
