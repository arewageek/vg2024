import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2e6f40',
          light: '#3d8b52',
          dark: '#235432',
        },
        secondary: {
          DEFAULT: '#e67e22',
          light: '#f39c12',
          dark: '#d35400',
        },
        accent: {
          DEFAULT: '#ffd700',
          light: '#ffe033',
          dark: '#ccac00',
        },
        background: '#f8f9f3',
        surface: '#ffffff',
        text: {
          DEFAULT: '#2d3436',
          muted: '#636e72',
          light: '#b2bec3',
        },
      },
      fontFamily: {
        heading: ['var(--font-playfair)'],
        body: ['var(--font-raleway)']
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;