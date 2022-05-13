module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'Oswald'],
      'display': ['Oswald'],
      'body': ['Montserrat'],
    },
      extend: {
        colors: {
          blueteal: {
            100: '#AACAD5',
            200: '#80B0C0',
            300: '#5595AA',
            400: '#2A7B95',
            500: '#006080',
            600: '#00506B',
            700: '#004055',
            800: '#003040',
            900: '#00202B',
          },
          doggo: {
            100: '#F0E3D1',
            200: '#E9D5BB',
            300: '#E1C6A4',
            400: '#DAB88D',
            500: '#D2AA76',
            600: '#AF8E62',
            700: '#8C714F',
            800: '#69553B',
            900: '#463927',
          },
        }
    },
    display: ["group-hover"],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
