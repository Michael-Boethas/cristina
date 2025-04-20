import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        SMALLEST: '320px',
        xs: '490px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        BIGGEST: '1920px',
      },
      colors: {
        // Custom colors
        bg: {
          1: 'var(--bg-1)',
          '1-transparent': 'var(--bg-1-transparent)',
          2: 'var(--bg-2)',
          '2-transparent': 'var(--bg-2-transparent)',
          3: 'var(--bg-3)',
          '3-transparent': 'var(--bg-3-transparent)',
          4: 'var(--bg-4)',
          '4-transparent': 'var(--bg-4-transparent)',
          5: 'var(--bg-5)',
          '5-transparent': 'var(--bg-5-transparent)',
        },
        fg: {
          1: 'var(--fg-1)',
          2: 'var(--fg-2)',
        },
      },
    },
  },
  plugins: [
    typography,
  ],
} satisfies Config;
