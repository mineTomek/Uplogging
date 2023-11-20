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
        text: {
          50: "#eafbf7",
          100: "#d4f7ee",
          200: "#aaeedd",
          300: "#7fe6cc",
          400: "#55ddbb",
          500: "#2ad5aa",
          600: "#22aa88",
          700: "#198066",
          800: "#115544",
          900: "#082b22",
          950: "#041511",
        },
        background: {
          50: "#e5fffc",
          100: "#ccfff9",
          200: "#99fff3",
          300: "#66ffed",
          400: "#33ffe7",
          500: "#00ffe1",
          600: "#00ccb4",
          700: "#009987",
          800: "#00665a",
          900: "#00332d",
          950: "#001a17",
        },
        primary: {
          50: "#ecf9f5",
          100: "#d8f3eb",
          200: "#b2e6d7",
          300: "#8bdac3",
          400: "#65cdb0",
          500: "#3ec19c",
          600: "#329a7d",
          700: "#25745d",
          800: "#194d3e",
          900: "#0c271f",
          950: "#061310",
        },
        secondary: {
          50: "#eafbf6",
          100: "#d4f7ed",
          200: "#a9efdb",
          300: "#7ee7c9",
          400: "#54deb7",
          500: "#29d6a5",
          600: "#21ab84",
          700: "#188163",
          800: "#105642",
          900: "#082b21",
          950: "#041511",
        },
        accent: {
          50: "#fbe9f0",
          100: "#f7d4e2",
          200: "#f0a8c5",
          300: "#e87da8",
          400: "#e0528b",
          500: "#d9266e",
          600: "#ad1f58",
          700: "#821742",
          800: "#570f2c",
          900: "#2b0816",
          950: "#16040b",
        },
      },
    },
  },
  plugins: [],
};
export default config;
