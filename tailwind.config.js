/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        cx: {
          navy: '#0B1F3B',
          cream: '#FFF7E6',
          red: '#D22F27',
          green: '#2F6F3E',
          yellow: '#FFD23F',
          gray: {
            900: '#111827',
            700: '#374151',
            500: '#6B7280',
            300: '#D1D5DB',
          },
        },
        background: '#FFFFFF',
        foreground: '#111827',
        primary: '#0B1F3B',
        accent: '#D22F27',
      },
      fontFamily: {
        headline: ['Oswald', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

