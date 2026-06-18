/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        wetland: {
          50: '#f0f7ed',
          100: '#d9ead1',
          200: '#b5d5a5',
          300: '#86bc6e',
          400: '#5ea048',
          500: '#42852f',
          600: '#2D5A27',
          700: '#264a21',
          800: '#203c1d',
          900: '#1b3119',
        },
        lake: {
          50: '#ebf2f8',
          100: '#cee1ef',
          200: '#9dc1de',
          300: '#669cc9',
          400: '#3d7cb5',
          500: '#2a619a',
          600: '#1E3A5F',
          700: '#1a3351',
          800: '#172c45',
          900: '#14263b',
        },
        sunset: {
          50: '#fef3ea',
          100: '#fce3c9',
          200: '#f8c394',
          300: '#f39b5e',
          400: '#ed7932',
          500: '#E87722',
          600: '#d95f18',
          700: '#b54816',
          800: '#913a1a',
          900: '#753219',
        },
        reed: {
          50: '#fbf7ec',
          100: '#f5eccf',
          200: '#ebd89f',
          300: '#e0be67',
          400: '#D4A84B',
          500: '#c08e33',
          600: '#a67029',
          700: '#875325',
          800: '#6f4326',
          900: '#5c3923',
        },
        cream: {
          50: '#fdfcf9',
          100: '#F5F2EB',
          200: '#ebe5d6',
          300: '#dcd2b9',
          400: '#c9ba97',
        },
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', 'serif'],
        sans: ['"Noto Sans SC"', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'wave': 'wave 8s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
      },
    },
  },
  plugins: [],
};
