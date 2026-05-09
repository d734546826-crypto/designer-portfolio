/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Avenir Next',
          'PingFang SC',
          'Hiragino Sans GB',
          'Helvetica Neue',
          'system-ui',
          'sans-serif'
        ]
      },
      colors: {
        brand: {
          DEFAULT: '#FF5C00',
          hover: '#E05200',
          light: 'rgba(255, 92, 0, 0.1)'
        },
        dark: {
          900: '#0A0A0A',
          800: '#141414',
          700: '#1F1F1F',
          border: '#2A2A2A'
        }
      }
    }
  },
  plugins: []
};
