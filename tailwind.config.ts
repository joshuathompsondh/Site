import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0a0907',
          800: '#0f0d0a',
          700: '#15110c',
          600: '#1c1812',
        },
        parchment: {
          300: '#e8d4a0',
          400: '#d4b97a',
          500: '#c9a96a',
          600: '#a88a55',
        },
        bone: {
          100: '#e8dcc4',
          200: '#bfae8a',
          300: '#8a7e63',
          400: '#5a5240',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
        serif: ['Cormorant Garamond', ...defaultTheme.fontFamily.serif],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

export default config
