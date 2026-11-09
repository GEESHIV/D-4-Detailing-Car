/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#050505',
          800: '#0a0a0b',
          700: '#101012',
          600: '#16161a',
          500: '#1d1d22',
          400: '#2a2a30',
          300: '#3a3a42',
        },
        gold: {
          50: '#fbf7ee',
          100: '#f6edd6',
          200: '#ecd9a8',
          300: '#e0bf6f',
          400: '#d4a843',
          500: '#c89327',
          600: '#a8761e',
          700: '#85591b',
          800: '#6d481c',
          900: '#5d3d1c',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'zoom-slow': {
          '0%': { transform: 'scale(1.12)' },
          '100%': { transform: 'scale(1)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
        'zoom-slow': 'zoom-slow 8s ease-out forwards',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
