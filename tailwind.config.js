/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'netflix-image': 'url(../../public/assets/netflix.jpg)',
      // },
      // colors: {
      //   primary: '#000',
      //   secondary: '#E50914',
      //   light: '#fff',
      //   tertiary: 'rgba(255, 255, 255, 0.6)',
      // },
    },
  },
  plugins: [],
};
