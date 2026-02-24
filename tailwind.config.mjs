import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem'
      },
      screens: {
        '2xl': '1200px'
      }
    },
    extend: {
      colors: {
        primary: '#2563EB',
        accent: '#6D28D9',
        dark: '#0F172A',
        light: '#F8FAFC',
        neutral: '#64748B'
      },
      fontFamily: {
        body: ['Inter', ...defaultTheme.fontFamily.sans],
        heading: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono]
      },
      borderRadius: {
        lg: '0.75rem',
        xl: '1rem'
      },
      boxShadow: {
        soft: '0 8px 24px rgba(15, 23, 42, 0.08)'
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2563EB 0%, #6D28D9 100%)'
      }
    }
  }
};