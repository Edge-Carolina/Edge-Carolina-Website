/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'unc-blue': '#4B9CD3',  // UNC Carolina Blue
        'unc-navy': '#13294B',  // UNC Navy
        'unc-white': '#FFFFFF', // UNC White
      },
    },
  },
  plugins: [],
} 