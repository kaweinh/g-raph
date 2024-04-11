import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tan': 'rgb(255, 237, 174)',
        'medium-dark-green': 'rgb(26,52,10)',
        'dark-green': 'rgb(21,56,1)',
        'green-green': 'rgb(61, 135, 16)',
        'medium-green': 'rgb(46, 100, 14)',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'zoocute': ['zoocute'],
        'jungle-land': ['jungle-land'],
        'nunito': ['Nunito']
      }
    },
  },
  plugins: [],
}
export default config
