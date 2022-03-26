module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        large: '8px',
      },
      colors: {
        primary: {
          light: '#7F47E7',
          'light-hover': '#5B34B9',
          dark: '#947EB0',
          'dark-hover': '#685896',
        },
        background: {
          light: '#E8E6F2',
          dark: '#080C19',
        },
      },
      fontFamily: {
        bodySMono: ['Space Grotesk', 'sans-serif'],
        bodyMono: ['Space Mono', 'monospace;'],
      },
    },
  },
  plugins: [],
};
