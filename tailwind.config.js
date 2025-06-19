/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terqoizse: '#add8e6',
        skyblue: '#8eb8d1',
        deepnavy: '#211e5e',
        darknavy: '#23215e',
        lightnavy: '#22335b',
        // 'unc-blue': '#4B9CD3',  // UNC Carolina Blue
        // 'unc-navy': '#13294B',  // UNC Navy
        // 'unc-white': '#FFFFFF', // UNC White
      },
    },
  },
  plugins: [],
} 