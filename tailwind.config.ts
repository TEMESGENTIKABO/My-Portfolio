import type { Config } from "tailwindcss";
import containerQueries from '@tailwindcss/container-queries';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'blue-glow': '0 0 20px -5px rgba(96, 165, 250, 0.3)',
        'xl-glow': '0 0 40px -10px rgba(96, 165, 250, 0.3)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.05)'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'monospace']
      }
  }
  },
  plugins: [
    containerQueries,
  ],
} satisfies Config;