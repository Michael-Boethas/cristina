"use client";

import { useEffect } from "react";
import { useFetch } from "hooks/useFetch";
import { IGlobalStylesData } from "types";

export default function GlobalStyles() {
  const { data } = useFetch<IGlobalStylesData>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/global-styling`,
  );

  useEffect(() => {
    if (data) {
      // Apply fetched styles
      Object.entries({
        "--bg-1": data.background_1,
        "--bg-1-transparent": data.background_1_transparent,
        "--bg-2": data.background_2,
        "--bg-2-transparent": data.background_2_transparent,
        "--bg-3": data.background_3,
        "--bg-3-transparent": data.background_3_transparent,
        "--bg-4": data.background_4,
        "--bg-4-transparent": data.background_4_transparent,
        "--bg-5": data.background_5,
        "--bg-5-transparent": data.background_5_transparent,
        "--fg-1": data.text_dark,
        "--fg-2": data.text_light,
      }).forEach(([key, value]) =>
        document.documentElement.style.setProperty(key, value),
      );

      const introSection = document.getElementById("intro-section");
      if (introSection && data.intro_background) {
        // Fetch the SVG data
        fetch(data.intro_background)
          .then((response) => response.text()) // Fetch SVG as text
          .then((svgText) => {
            const fillColor = data.background_2;

            // Modify the fill color in the SVG
            const modifiedSvgText = svgText.replace(
              /fill="[^"]*"/g,
              `fill="${fillColor}"`,
            );

            // Convert the modified SVG text to a data URL
            const modifiedSvgDataUrl = `data:image/svg+xml,${encodeURIComponent(modifiedSvgText)}`;

            // Set the background image with the modified SVG data URL
            introSection.style.backgroundImage = `url(${modifiedSvgDataUrl})`;
            introSection.style.backgroundSize = "100%";
          })
          .catch((error) =>
            console.error("Error fetching or modifying SVG:", error),
          );
      }
    }
  }, [data]);

  return null;
}
