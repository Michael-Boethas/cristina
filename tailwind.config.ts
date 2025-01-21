import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        SMALLEST: "320px", // Custom 320px breakpoint
        xs: "490px",
      },
      colors: { // Custom colors
        bg: {
          1: "var(--bg-1)",
          '1-transparent': "var(--bg-1-transparent)",
          2: "var(--bg-2)",
          '2-transparent': "var(--bg-2-transparent)",
          3: "var(--bg-3)",
          '3-transparent': "var(--bg-3-transparent)",
          4: "var(--bg-4)",
          '4-transparent': "var(--bg-4-transparent)",
        },
        fg: {
          1: "var(--fg-1)",
          2: "var(--fg-2)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
