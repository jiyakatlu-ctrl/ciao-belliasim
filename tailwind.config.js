/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fbf8f0',
          100: '#f7f1e3',
          200: '#f0e6cf',
          300: '#e8d9b8',
          400: '#dcc79b',
          500: '#cdb280',
        },
        forest: {
          50: '#eef5f0',
          100: '#d6e6db',
          200: '#a9ccb5',
          300: '#7aaf8e',
          400: '#4f8a68',
          500: '#2f6b4a',
          600: '#1f5238',
          700: '#1a3a2a',
          800: '#142b21',
          900: '#0f1f18',
        },
        mare: {
          50: '#eef2f7',
          100: '#d4dde9',
          200: '#a8bcd3',
          300: '#7a98b8',
          400: '#4f76a0',
          500: '#2e5a86',
          600: '#1e466f',
          700: '#1a3a5f',
          800: '#152e4d',
          900: '#102339',
        },
        gold: {
          400: '#d4af6a',
          500: '#c9a55c',
          600: '#b08a44',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.8s ease-out both',
        'slide-down': 'slideDown 0.5s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
