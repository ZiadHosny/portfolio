import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Main
        mainLight: '#ebbcba',
        mainDark: '#1f1d2e',
        // Accent
        accent: '#31748f',
        accentLight: '#7bb8d1',
        accentDark: '#28485f',
        // Clear
        clearLight: '#ebbcba9f',
        clearWhite: '#eeeeee'
      },
      fontSize: {
        mainHeading: '40px',
        subHeading: '25px',
        medium: '20px',
        normal: '16px',
        small: '14px',
      }
    },
  },
  plugins: [],
}
export default config