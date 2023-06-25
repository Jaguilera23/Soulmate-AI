/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.625rem', 
      },
      fontFamily: {
        'Inter':['Inter', 'sans-serif'],
      },
      colors: {
        'centralBlue':'#19213D',
        'externalBlue': '#0A0D17',
        'subtitlePurple':'#CDD4F0',
        'titlePurple':'#9D67BA',
        'trustedBlue': 'var(--cdd-4-f-0, rgba(205, 212, 240, 0.20))'
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

