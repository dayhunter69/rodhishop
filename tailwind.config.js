/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    screens: {
      mobile: { max: '639px' },

      tablet: { max: '767px' },

      'sm-laptop': { max: '1023px' },

      'lg-laptop': { max: '1279px' },

      'tv-screen': { max: '1535px' },
    },
    extend: {
      backgroundImage: {
        laptop: "url('/src/Components/images/yantram-banner.png')",
        mobile: "url('/src/Components/images/yantram-mobile-banner.png')",
        LaptopCharger:
          "url('/src/Components/images/charge-cable certified by apple.png')",
        MobileCharger:
          "url('/src/Components/images/charge-cable certified by apple for mobile.png')",
        LaptopAccessories:
          "url('/src/Components/images/Accessories for your work disk.png')",
        MobileAccessories:
          "url('/src/Components/images/Accessories for your work disk for mobile.png')",
      },
      backgroundSize: {
        BgSize: ['100%', '100%'],
      },
      colors: {
        primary: '#000000',
        secondary: {
          white: '#FFFFFF',
          whitesmoke: '#f5f5f5',
          lightGrey: '#8D7E91',
          gray85: '#d9d9d9',
          lightGreen: '#53D176',
          red: '#FF0000',
          extraDarkOpacity: 'rgba(0, 0, 0, 0.87)',
          darkOpacity: 'rgba(0, 0, 0, 0.71)',
          mediumOpacity: 'rgba(0, 0, 0, 0.65)',
          lightOpacity: 'rgba(0, 0, 0, 0.55)',
          averageOpacity: 'rgba(0, 0, 0, 0.43)',
          greyOpacity: 'rgba(0, 0, 0, 0.45)',
          textColor: 'rgba(0, 0, 0, 0.5)',
          lightBlueColor: '#9747ff',
          pinkColor: '#ffdfc6',
          rodhiRed: '#DD0B39',
          rodhiBlue: '#013593',
        },
      },
      fontSize: {
        Heading: ['32px', { lineHeight: '48px' }],
        Subheading2: ['24px', { lineHeight: '36px' }],
        Subheading1: ['20px', { lineHeight: '30px' }],
        Paragraph0: ['12px', { lineHeight: '21px' }],
        Paragraph1: ['14px', { lineHeight: '21px' }],
        Paragraph2: ['16px', { lineHeight: '24px' }],
        Paragraph3: ['18px', { lineHeight: '27px' }],
      },
      fontFamily: {
        Arial: ['Arial'],
      },
      fontWeight: {
        normal: '400',
        average: '550',
        bold: '700',
        extrabold: '900',
      },
      boxShadow: {
        custom1: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        custom2: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        custom3:
          'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        custom4: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        custom5: '0px 20px 4px rgba(0, 0, 0, 0.25)',
        custom6: '0px 7px 2px rgba(0, 0, 0, 0.12)',
        custom7: '0px 3.56164px 3.56164px rgba(0, 0, 0, 0.25)',
        custom8: '0px 3.45763px 3.45763px rgba(0, 0, 0, 0.25)',
        custom9: '0px 2.80813px 2.80813px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
