import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecf9f5',
          100: '#d8f3eb',
          200: '#b2e6d7',
          300: '#8bdac3',
          400: '#65cdb0',
          500: '#3ec19c',
          600: '#329a7d',
          700: '#25745d',
          800: '#194d3e',
          900: '#0c271f',
          950: '#061310',
        },
        secondary: {
          50: '#eafbf6',
          100: '#d4f7ed',
          200: '#a9efdb',
          300: '#7ee7c9',
          400: '#54deb7',
          500: '#29d6a5',
          600: '#21ab84',
          700: '#188163',
          800: '#105642',
          900: '#082b21',
          950: '#041511',
        },
        accent: {
          50: '#fbe9f0',
          100: '#f7d4e2',
          200: '#f0a8c5',
          300: '#e87da8',
          400: '#e0528b',
          500: '#d9266e',
          600: '#ad1f58',
          700: '#821742',
          800: '#570f2c',
          900: '#2b0816',
          950: '#16040b',
        },
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
}
export default config
