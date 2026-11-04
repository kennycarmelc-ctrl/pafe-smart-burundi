/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eefcf1',
          100: '#d6f7de',
          200: '#aeeebb',
          300: '#78e094',
          400: '#43cc6e',
          500: '#1EB53A',
          600: '#17922e',
          700: '#137329',
          800: '#105b24',
          900: '#0d4a1f',
          950: '#052911',
        },
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f0606a',
          500: '#e03444',
          600: '#CE1126',
          700: '#a90f20',
          800: '#8a1020',
          900: '#72131f',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
      },
    },
  },
  plugins: [],
};
