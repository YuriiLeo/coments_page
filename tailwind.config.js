module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: '#cb970b',
        secondary: '#fbee7e',
        tertiary: '#5c2327',
      },

      screens: {
        xs: { max: '576px' },
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },

      container: {
        center: true,
      },
    },
  },

  plugins: [],
};
