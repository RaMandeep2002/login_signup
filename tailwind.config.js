/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      customFont: ['"Custom Font"', 'sans-serif'],
      otpFont: ['"Custom Font"', 'SF Pro Display'],
    },
  },
  plugins: [],
};
