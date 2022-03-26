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
        'lm-primary': {
          100: '#7F47E7',
          200: '#5B34B9',
        },
        'dm-primary': {
          100: '#947EB0',
          200: '#685896',
        },
        background: {
          100: '#E8E6F2',
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
