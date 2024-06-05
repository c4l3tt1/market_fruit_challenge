import type { Config } from 'tailwindcss'

import {
  backgroundImagesCustom,
  boxShadowCustom,
  colorsCustom,
  colorsDefault,
  fontSizeCustom,
  fontWeightCustom,
  screensCustom,
  spacingCustom,
} from './src/theme'

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
        ...backgroundImagesCustom,
      },
      boxShadow: {
        ...boxShadowCustom,
      },

      colors: { ...colorsCustom, ...colorsDefault },
      fontSize: { ...fontSizeCustom },
      fontWeight: { ...fontWeightCustom },
      spacing: { ...spacingCustom },
      gap: { ...spacingCustom },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
