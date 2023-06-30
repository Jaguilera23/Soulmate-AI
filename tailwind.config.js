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
        'trustedBlue': 'var(--cdd-4-f-0, rgba(205, 212, 240, 0.20))',
        'borderCard':'var(--primary-cdd-4-f-0, rgba(205, 212, 240, 0.20));',
        'bgButtonGray': 'var(--primary-cdd-4-f-0, rgba(205, 212, 240, 0.20));',
        'gradient-hover': 'linear-gradient(180deg, var(--primary-cdd-4-f-0, rgba(205, 212, 240, 0.20)) 0%, var(--primary-9-d-67-ba, #9D67BA) 47.40%, var(--primary-4-f-ced-6, #4FCED6) 100%)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(50% 50% at 50% 50%, #19213D 0%, #0A0D17 100%)',
        
        
      },
      width: {
        '282px': '282px',
      },
      keyframes: {
        pulse: {
           '0% ,100%': { opacity: '0.2' },
          '50%': { opacity: '01' },


        }
      }
    }
  },
  plugins: [],
  }

