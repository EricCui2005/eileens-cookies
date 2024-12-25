import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        darkBrown: 'var(--darkBrown)',
        hoverBrown: 'var(--hoverBrown)',
        lightBrown: 'var(--lightBrown)',
        cream: 'var(--cream)',
        milk: 'var(--milk)',
        lightGray: 'var(--lightGray)',
        white: 'var(--white)',
      },
    },
  },
  plugins: [],
} satisfies Config;
