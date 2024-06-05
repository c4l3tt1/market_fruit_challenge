import type { Config } from 'tailwindcss'

import { fontSizeCustom, fontWeightCustom, screensCustom, spacingCustom } from './src/theme'

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      montserrat: ['var(--font-montserrat)', 'sans-serif'],
    },
    screens: {
      ...screensCustom,
    },
    extend: {
      backgroundImage: {
        market: "url('/market-bg.png')",
      },
      boxShadow: {
        header: '0 1px 3px 0 rgba(0, 0, 0, 0.16), 0 1px 3px 0 rgba(0, 0, 0, 0.12)',
      },

      fontSize: { ...fontSizeCustom },
      fontWeight: { ...fontWeightCustom },
      spacing: { ...spacingCustom },
      gap: { ...spacingCustom },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
