/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    extend: {
      colors: {
        'textTitleColor': '#703D80',
        'purpleScale60': '#5A3E74',
        'purpleScale50': '#7E57A3',
        'purpleScale80': '#24192E',
        'purpleScale90': '#120C17',
        'purpleScale0': '#FFFFFF',
        'borderColor': '#24192E',
        'hoverColor': '#d9d9d9',
      },
      fontSize: {
        'header1/Desktop': ['48px', '72px'],
        'header3/Desktop': ['32px', '48px'],
        'header4/Bold': ['24px', '36px'],
        'font26': '26px',
        'Large/Reguler': ['20px', '24.2px'],
        'Large/SemiBold': ['20px', '24.2px'],
        'Large/Bold': ['20px', '30px'],
        'Base/Bold': ['16px', '24px'],
        'Base/Medium': ['16px', '24px'],
        'Base/Regular': ['16px', '19.4px'],
        'Small/Small': ['14px', '16.9px'],
        'HeaderFitur': ['26px', '31px'],
      },
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

