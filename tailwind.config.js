/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
        'serif': ['DM Serif']
    },
    extend: {
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: 0},
          '100%': {opacity: 1}
        }
      }
    },
  },
  plugins: [],
};
