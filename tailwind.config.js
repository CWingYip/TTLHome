/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#F0F1FE',
          100: '#E2E4FD',
          200: '#C5C9FB',
          300: '#9DA5F8',
          400: '#7D87F6',
          500: '#6875F5',
          600: '#5B6CF5',
          700: '#4A5AF0',
          800: '#3B4AE0',
          900: '#2D3BC0',
        },
        accent: {
          300: '#FFE066',
          400: '#FFD43B',
          500: '#F5C42C',
          600: '#E6B020',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
