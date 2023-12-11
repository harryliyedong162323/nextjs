/*
 * @Author: charles.yu charles_yxh@163.com
 * @Date: 2023-11-20 17:48:01
 * @LastEditors: charles.yu charles_yxh@163.com
 * @LastEditTime: 2023-11-26 15:03:40
 * @FilePath: /wildmoor/tailwind.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
      fontSize: generatePreset(1,64,'px'),
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
        scroll: 'scroll 1s infinite',
        'move-top': 'moveTop 0.5s 1 forwards',
      },
      keyframes: {

        scroll: {
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
            top: '0px'
          },
        }
      }
    },
  },
  plugins: [],
}
export default config
