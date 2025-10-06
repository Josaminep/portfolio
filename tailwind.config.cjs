module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        josamineBlue: '#2563EB',
        josamineYellow: '#FACC15'
      },
      backgroundImage: {
        'josamine-gradient': 'linear-gradient(135deg, #2563EB 0%, #60A5FA 50%, #FACC15 100%)'
      }
    }
  },
  plugins: []
}
