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

export const colorsDefault = {
  neutral: {
    50: '#F2F2F2',
    100: '#E0E0E0',
    200: '#BDBDBD',
    300: '#828282',
    400: '#4F4F4F',
    500: '#333333',
    600: '#4F4F42',
    700: '#161616',
    800: '#121212',
    900: '#000000',
  },

  danger: {
    50: 'rgb(255, 245, 245)', //#FFF5F5
    100: 'rgb(253, 197, 199)', //#FDC5C7
    200: 'rgb(249, 152, 155)', //#F9989B
    300: 'rgb(242, 112, 116)', //#F27074
    400: 'rgb(233, 80, 85)', //#E95055
    500: 'rgb(221, 56, 62)', //#DD383E
    600: 'rgb(205, 39, 44)', //#CD272C
    700: 'rgb(184, 27, 32)', //#B81B20
    800: 'rgb(160, 19, 23)', //#A01317
    900: 'rgb(135, 14, 18)', //#870E12
    1000: 'rgb(238, 70, 76)', //#EE464C
  },
  info: {
    50: 'rgb(245, 252, 255)', //#F5FCFF
    100: 'rgb(197, 236, 253)', //#C5ECFD
    200: 'rgb(152, 220, 249)', //#98DCF9
    300: 'rgb(112, 203, 242)', //#70CBF2
    400: 'rgb(80, 187, 233)', //#50BBE9
    500: 'rgb(56, 172, 221)', //#38ACDD
    600: 'rgb(39, 155, 205)', //#279BCD
    700: 'rgb(27, 137, 184)', //#1B89B8
    800: 'rgb(19, 118, 160)', //#1376A0
    900: 'rgb(14, 103, 135)', //#0E6787
    1000: 'rgb(0, 60, 86)', //#003C56
  },

  warning: {
    50: 'rgb(255, 250, 245)', //#FFFAF5
    100: 'rgb(253, 227, 197)', //#FDE3C5
    200: 'rgb(249, 203, 152)', //#F9CB98
    300: 'rgb(242, 182, 112)', //#F2B670
    400: 'rgb(233, 162, 80)', //#E9A250
    500: 'rgb(221, 144, 56)', //#DD9038
    600: 'rgb(205, 127, 39)', //#CD7F27
    700: 'rgb(184, 111, 27)', //#B86F1B
    800: 'rgb(160, 94, 19)', //#A05E13
    900: 'rgb(135, 78, 14)', //#874E0E
    1000: 'rgb(255, 138, 0)', //#FF8A00
  },

  success: {
    50: 'rgb(245, 255, 249)', //#F5FFF9
    100: 'rgb(197, 253, 221)', //#C5FDDD
    200: 'rgb(152, 249, 194)', //#98F9C2
    300: 'rgb(112, 242, 169)', //#70F2A9
    400: 'rgb(80, 233, 147)', //#50E993
    500: 'rgb(56, 221, 128)', //#38DD80
    600: 'rgb(39, 205, 111)', //#27CD6F
    700: 'rgb(27, 184, 95)', //#1BB85F
    800: 'rgb(19, 160, 80)', //#13A050
    900: 'rgb(14, 135, 66)', //#0E8742
    1000: 'rgb(33, 150, 83)', //#219653
  },
}

export const colorsCustom = {
  brand: {
    default: 'rgb(108, 154, 47)', //#6C9A2F
    100: 'rgb(230, 248, 237)', //#E6F8ED
    200: 'rgb(134, 151, 145)', //#869791
    300: 'rgb(87, 210, 131)', //#57D283
    400: 'rgb(37, 211, 102)', //#25D366
  },
  gray: {
    50: 'rgb(250, 250, 250)', //#fafafa
    100: 'rgb(249, 249, 249)', //#f9f9f9
    200: 'rgb(247, 247, 247)', //#f7f7f7
    300: 'rgb(245, 245, 245)', //#f5f5f5
    400: 'rgb(243, 243, 243)', //#f3f3f3
    500: 'rgb(241, 241, 241)', //#f1f1f1
    600: 'rgb(239, 239, 239)', //#efefef
    700: 'rgb(236, 240, 241)', //#ecf0f1
    800: 'rgb(233, 237, 242)', //#e9edf2
    900: 'rgb(234, 234, 234)', //#eaeaea
    1000: 'rgb(231, 230, 230)', //#e7e6e6
    1100: 'rgb(222, 222, 222)', //#dedede
    1200: 'rgb(189, 189, 189)', //#bdbdbd
    1300: 'rgb(162, 162, 162)', //#a2a2a2
    1400: 'rgb(132, 132, 132)', //#848484
    1500: 'rgb(72, 72, 72)', //#484848
    1600: 'rgb(63, 63, 63)', //#3f3f3f
    1700: 'rgb(53, 57, 61)', //#35393d
    1800: 'rgb(39, 39, 39)', //#272727
    1900: 'rgb(33, 33, 33)', //#212121
    2000: 'rgb(26, 26, 26)', //#1a1a1a
    2100: 'rgb(23, 23, 23)', //#171717
    2200: 'rgb(11, 11, 11)', //#0b0b0b
  },
  blue: {
    100: 'rgb(85, 172, 238)', //#55ACEE
    200: 'rgb(29, 161, 242)', //#1DA1F2
    300: 'rgb(0, 123, 182)', //#007BB6
    400: 'rgb(0, 123, 181)', //#007BB5
    500: 'rgb(11, 124, 255)', //#0B7CFF
    600: 'rgb(84, 110, 122)', //#546E7A
    700: 'rgb(44, 62, 80)', //#2C3E50
    800: 'rgb(38, 50, 56)', //#263238
  },
  violet: {
    100: 'rgb(227, 234, 250)', //#E3EAFA
    200: 'rgb(231, 230, 255)', //#E7E6FF
    300: 'rgb(180, 186, 210)', //#B4BAD2
    400: 'rgb(69, 123, 244)', //#457BF4
    500: 'rgb(114, 113, 255)', //#7271FF
    600: 'rgb(72, 103, 170)', //#4867AA
    700: 'rgb(52, 106, 254)', //#346AFE
    800: 'rgb(59, 89, 152)', //#3B5998
  },
  yellow: {
    100: 'rgb(243, 234, 214)', //#F3EAD6
    200: 'rgb(184, 183, 173)', //#B8B7AD
    300: 'rgb(241, 169, 10)', //#F1A90A
    400: 'rgb(255, 167, 1)', //#FFA701
  },
  red: {
    100: 'rgb(250, 227, 227)', //#FAE3E3
    200: 'rgb(217, 83, 79)', //#D9534F
    300: 'rgb(221, 77, 66)', //#DD4D42
    400: 'rgb(221, 75, 57)', //#DD4B39
    500: 'rgb(223, 41, 38)', //#DF2926
    600: 'rgb(216, 41, 40)', //#D82928
    700: 'rgb(189, 8, 28)', //#BD081C
  },
  pink: {
    100: 'rgb(249, 119, 148)', //#F97794
    200: 'rgb(234, 76, 137)', //#EA4C89
    300: 'rgb(193, 53, 132)', //#C13584
  },
} as const

export const gradientsCustom = {
  'login-gradient': `linear-gradient(163deg, 
    ${colorsCustom['brand']?.[400]} 25%, 
    ${colorsCustom['brand']?.[300]} 50%, 
    ${colorsCustom['brand']?.[200]} 75%,
    ${colorsCustom['brand']?.['default']} 100%)`,
}

export const backgroundImagesCustom = {
  'bg-slider-1': "url('/slider/1.jpg')",
  'bg-slider-2': "url('/slider/2.jpg')",
  'bg-slider-3': "url('/slider/3.jpg')",
  'bg-history': "url('/history.jpg')",
  'bg-person': "url('/person.jpg')",
  'bg-midia-1': "url('/midia/1.jpg')",
  'bg-midia-2': "url('/midia/2.jpg')",
  'bg-midia-3': "url('/midia/3.jpg')",
  'bg-midia-4': "url('/midia/4.jpg')",
  'bg-midia-5': "url('/midia/5.jpg')",
  'bg-midia-6': "url('/midia/6.jpg')",
}

export const boxShadowCustom = {
  header: '0 1px 3px 0 rgba(0, 0, 0, 0.16), 0 1px 3px 0 rgba(0, 0, 0, 0.12)',
}
