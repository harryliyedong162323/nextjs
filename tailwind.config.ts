import type { Config } from 'tailwindcss'
import {generatePreset} from './src/utils/quantum';
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: generatePreset(1,1200,'px'),
      height: generatePreset(1,1200,'px'),
      spacing: generatePreset(1,1200,'px'),
      margin: generatePreset(1,1200,'px'),
      padding: generatePreset(1,1200,'px'),
      fontSize: generatePreset(1,90,'px'),
      borderRadius: generatePreset(1,200,'px'),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        mobile: {'max': '768px'}, // size / 2
        paid:{'min': '769px', 'max': '1536px'},  // pc(size / 1.2) / 1.4
        // pc: {'max': '1600px'},  // size / 1.2
      },
      colors: {
        'dark-grey': '#262627'
      },
      fontFamily: {
        'GalanoGrotesque': ['GalanoGrotesque'],
        'AlbertusNova': ['AlbertusNova'],
        'AlbertusNova-Light':['AlbertusNova-Light'],
        'AlbertusNova-Regular':['AlbertusNova-Regular'],
        'AlbertusNova-Bold':['AlbertusNova-Bold'],
        'Grotesque-Light':['GalanoGrotesque-Light'],
        'Grotesque-Regular':['GalanoGrotesque-Regular'],
        'Grotesque-Medium':['GalanoGrotesque-Medium'],
      },
      animation: {
        fadeIn:'fadeIn 1s ease-in-out 1s forwards',
        scrollMore: 'scrollMore 1s infinite',
        'move-top': 'moveTop 0.5s 1 forwards',
      },
      rotate: {
        '26': '26deg',
        '37': '37deg',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      keyframes: {


        fadeIn:{
          '0%':{
            opacity: '0'
          },
          '50%':{
            opacity: '.5'
          },
          '100%':{
            opacity: '1'
          }
        },

        scrollMore: {
          '0%': {
            transform: 'translate(0, 0)',
            opacity: '0'
          },
          '40%': {
            opacity: '1'
          },
          '80%': {
            transform: 'translate(0, 6px)',
            opacity: '0'
          },
          '100%': {
            opacity: '0'
          },
        },
        moveTop: {
          '100%': {
            'padding-top': '0px'
          },
        }
      }
    },
  },
  plugins: [],
}
export default config
