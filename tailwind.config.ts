import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#1f2544',
        navy: '#474f7a',
        purple: '#81689d',
        pink: '#ffd0ec',
      },
    },
  },
  plugins: [],
} satisfies Config;
