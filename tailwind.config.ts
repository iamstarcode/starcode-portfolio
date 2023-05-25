/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

import defaultTheme from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xxs: '320px',
      xs: '360px',
      s: '425px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        quicksand: ['var(--font-quicskand)', ...fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      'dark',
      'coffee',
      {
        light: {
          primary: '#722ed1',

          secondary: '#b728d3',

          accent: '#ff6be1',

          neutral: '#271F29',

          //'base-100': '#FFFFFF',
          'base-100': '#f7f1fc',

          info: '#588AEE',

          success: '#6EE7B1',

          warning: '#936E10',

          error: '#F83C16',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
} satisfies Config;
