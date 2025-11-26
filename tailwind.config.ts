import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'revolt': {
          'red': '#64191E',
          'red-light': '#7a2027',
          'red-dark': '#4e1318',
          'dark': '#383337',
          'dark-alt': '#373634',
          'white': '#FFFFFF',
          'gray': '#8c8c8c',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
