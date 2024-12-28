/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#2A2D3A',
          200: '#222531',
          300: '#1E1F29',
          400: '#1A1B23',
        },
        accent: {
          yellow: '#FFD700',
          blue: '#4A9DFF',
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float-0': 'float0 20s ease-in-out infinite',
        'float-1': 'float1 18s ease-in-out infinite',
        'float-2': 'float2 16s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        float0: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -50px) rotate(45deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(-30deg)' },
        },
        float1: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(-40px, -30px) rotate(-45deg)' },
          '66%': { transform: 'translate(20px, 40px) rotate(30deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(20px, -40px) rotate(30deg)' },
          '66%': { transform: 'translate(-30px, 30px) rotate(-45deg)' },
        },
      },
    },
  },
  plugins: [],
}
