/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';
import daisyui from 'daisyui';

export default  {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        animate: {
          '0%': { transform: 'skewX(45deg) scaleY(0)' },
          '100%': { transform: 'skewX(0deg) scaleY(1)' },
        },
      },
      animation: {
        animate: 'animate 800ms forwards ease',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lavishly: ['"Cormorant SC"', 'serif'],
        Dancing: [  "Tangerine", 'cursive'],
        tangerine: ['"Tangerine"', 'cursive'],

      },
    },
  },
  plugins: [
    daisyui,
    tailwindScrollbar, 
  ],
};
