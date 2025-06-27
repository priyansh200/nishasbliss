/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'salon': {
          50: '#FFF5F7',
          100: '#FFE6EC',
          200: '#FFD1DE',
          300: '#FFB1CA',
          400: '#FF8AAF',
          500: '#FF6699',
          600: '#FF3377',
          700: '#E61A5B',
          800: '#CC1452',
          900: '#990F3D',
        },
        'lavender': {
          50: '#F7F7FE',
          100: '#EEEEFE',
          200: '#D6D6FC',
          300: '#BEBEFA',
          400: '#9F9FF7',
          500: '#8080F4',
          600: '#6666D9',
          700: '#4D4DBF',
          800: '#3333A6',
          900: '#1A1A8C',
        },
        'gold': {
          50: '#FFFBF0',
          100: '#FFF4D9',
          200: '#FFE7B3',
          300: '#FFD98C',
          400: '#FFCC66',
          500: '#FFBF40',
          600: '#E6A632',
          700: '#CC8C24',
          800: '#B37316',
          900: '#995908',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-in': 'slideIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-in': 'bounceIn 0.8s cubic-bezier(0.36, 0, 0.66, -0.56)',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
} 