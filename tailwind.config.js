/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        arena: {
          black: '#05050a',
          charcoal: '#0a0a12',
          slate: '#181820',
        },
        electric: {
          cyan: '#00aaff',
          blue: '#0044ff',
          ice: '#88bbff',
        },
      },
    },
  },
  plugins: [],
};
