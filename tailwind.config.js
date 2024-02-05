/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    colors: {
      'textTitleColor': '#703D80',
      'purpleScale60': '#5A3E74',
      'purpleScale50': '#7E57A3',
      'purpleScale90': '#120C17',
      'purpleScale0': '#FFFFFF',
      'borderColor': '#24192E',
    },
    fontSize: {
      'header1/Desktop': ['48px', '72px'],
      'header4/Bold': ['24px', '36px'],
      'font26': '26px',
      'Large/Reguler': ['20px', '24.2px'],
      'Base/Bold': ['16px', '24px'],
      'Base/Regular': ['16px', '19.4px'],
      'HeaderFitur': ['26px', '31px'],
    },
    extend: {
      spacing: {
        '120px': '120px',
        '60px': '60px',
      },
      fontFamily: {
        'poppins': ['poppins', 'cursive'],
      },
    },
  },
  plugins: [],
}

