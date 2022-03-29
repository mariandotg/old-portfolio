module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
      },
      fontSize: {
        xs: ['12px', '12px'],
        sm: ['16px', '16px'],
        base: ['16px', '24px'],
        'section-title': ['24px', '24px'],
        'section-title-lg': ['28px', '28px'],
      },
      borderRadius: {
        large: '8px',
      },
      colors: {
        primary: {
          light: '#7F47E7',
          dark: '#947EB0',
          'light-hover': '#5B34B9',
          'dark-hover': '#685896',
        },
        button: {
          'light-text': '#FFFFFF',
          'dark-text': '#000000',
        },
        card: {
          light: '#FFFFFF',
          dark: '#1D1D2F',
          'light-text': '#000000',
          'dark-text': '#FFFFFF',
          'light-icons': '#000000',
          'dark-icons': '#FFFFFF',
        },
        badge: {
          light: '#3DDC97',
          dark: '#3DDC97',
        },
        light: '#E8E6F2',
        dark: '#080C19',
        link: '#005FEE',
      },
      fontFamily: {
        bodySMono: ['Space Grotesk', 'sans-serif'],
        bodyMono: ['Space Mono', 'monospace;'],
      },
    },
  },
  plugins: [],
};
