export const screens = {
  xl: { max: 1440 },
  lg: { max: 1040 },
  md: { max: 992 },
  sm: { max: 768 },
  xs: { max: 640 },
  xxs: { max: 480 },
}

export const screensCustom = {
  xl: { max: `${screens.xl.max}px` },
  lg: { max: `${screens.lg.max}px` },
  md: { max: `${screens.md.max}px` },
  sm: { max: `${screens.sm.max}px` },
  xs: { max: `${screens.xs.max}px` },
  xxs: { max: `${screens.xxs.max}px` },
}

export const spacingCustom = {
  '2': '0.875rem', //14px
  '3': '1rem', //16px
  '4': '1.25rem', //20px
  '5': '1.5rem', //24px
  '6': '1.875rem', //30px
  '7': '2rem', //32px
  '8': '2.5rem', //40px
  '9': '3rem', //48px
}

export const fontSizeCustom = {
  xs: '0.625rem' /* 10px */,
  sm: '0.75rem' /* 12px */,
  base: '0.875rem' /* 14px */,
  lg: '1rem' /* 16px */,
  xl: '1.125rem' /* 18px */,
  '1xl': '1.25rem' /* 20px */,
  '2xl': '1.5rem' /* 24px */,
  '3xl': '1.75rem' /* 28px */,
  '4xl': '1.875rem' /* 30px */,
  '5xl': '2rem' /* 32px */,
  '6xl': '2.25rem' /* 36px */,
  '7xl': '2.5rem' /* 40px */,
  '8xl': '3.125rem' /* 50px */,
  '9xl': '3.75rem' /* 60px */,
}

export const fontWeightCustom = {
  thin: '100',
  extraLight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extraBold: '800',
  blackBold: '900',
}
