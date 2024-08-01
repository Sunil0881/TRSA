/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        ring: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(15deg)' },
          '20%': { transform: 'rotate(-10deg)' },
          '30%': { transform: 'rotate(15deg)' },
          '40%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(-5deg)' },
          '70%': { transform: 'rotate(5deg)' },
          '80%': { transform: 'rotate(-5deg)' },
          '90%': { transform: 'rotate(5deg)' },
        },
        bulge: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        slide: 'slide 10s linear infinite',
        ring: 'ring 0.5s infinite',
        bulge: 'bulge 0.3s ease-in-out',
      },
      bulge: {
        '0%, 100%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.1)' },
      },
    },
  },
}