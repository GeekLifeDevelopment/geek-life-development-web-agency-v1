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
        brand: {
          50: '#eef6ff',
          100: '#dcecff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8'
        },
        accent: {
          500: '#14b8a6',
          600: '#0d9488'
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          800: '#1e293b',
          900: '#0f172a'
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        heading: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    }
  }
};