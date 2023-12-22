const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
      './components/**/*.{js,vue,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
      './app.vue'
    ],
    plugins: [
      require('@tailwindcss/typography')
    ],
    theme: {
      extend: {
        colors: {
          transparent: 'transparent',
          'bus-yellow': '#FFD807',
          volt: '#CEFF07',
          'rich-black': '#061716',
          gold: '#FFD706',
          salmon: '#FF6A6A',
          'electric-lime': '#CDFF06',
          'electric-green': '#1EDA00',
          'brunswick-green': '#124E4A',
          'body-text': '#979FAD',
          'dark-gray': '#2C2F3A',
          'light-gray': '#D7D8DE',
          'dark-background': '#1A1D28'
  
        },
        fontFamily: {
          inter: ['Inter', ...defaultTheme.fontFamily.sans]
        },
        screens: {
          '3xl': '1920px'
        },
        blur: {
          '4xl': '100px'
        },
        spacing: {
          15: '3.75rem', // 60px
          18: '4.5rem', // 72px
          22: '5.5rem', // 88px
          68: '17rem', // 272px
          84: '21rem', // 336px
          88: '22rem', // 352px
          100: '25rem', // 400px
          120: '30rem', // 480px
          128: '32rem', // 512px
          130: '32.5rem', // 520px
          136: '34rem', // 544px
          144: '36rem', // 576px
          152: '38rem', // 608px
          156: '39rem', // 624px
          160: '40rem', // 640px
          164: '41rem', // 656px
          168: '42rem', // 672px
          176: '44rem', // 704px
          200: '50rem', // 800px
          224: '56rem', // 896px
          248: '62rem', // 992px
          264: '66rem', // 1056px
          300: '75rem', // 1200px
          400: '100rem' // 1600px
        }
      }
    }
  }
  