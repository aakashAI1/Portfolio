import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          1: 'rgb(var(--ink-1) / <alpha-value>)',
          2: 'rgb(var(--ink-2) / <alpha-value>)',
          3: 'rgb(var(--ink-3) / <alpha-value>)',
        },
        brand: {
          1: 'rgb(var(--brand-1) / <alpha-value>)',
          2: 'rgb(var(--brand-2) / <alpha-value>)',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(255 255 255 / 0.06), 0 20px 60px -30px rgb(0 0 0 / 0.65)',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-40%)' },
          '100%': { transform: 'translateX(140%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config

