/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter':['Inter', 'sans-serif'],
      },
      colors: {
        'centralBlue':'#19213D',
        'externalBlue': '#0A0D17',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(50% 50% at 50% 50%, #19213D 0%, #0A0D17 100%)',
      },
      width: {
        '282px': '282px',
      },
    }
  },
  plugins: [],
  }

