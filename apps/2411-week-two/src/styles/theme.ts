const colorToken = {
  purple0: '#6f4ff2ff',
  purple1: '#866afaff',
  purple2: '#967dfdff',
  purple3: '#b6a5feff',
  purple4: '#cdc0ffff',

  nuteral0: '#67696fff',
  nuteral1: '#929498ff',
  nuteral2: '#d3d4d6ff',
  nuteral3: '#f1f1f2ff',
  nuteral4: '#ffffffff',

  success0: '#0cc857ff',
  success1: '#29e072ff',
  success2: '#58e791ff',
  success3: '#88eeb1ff',
  success4: '#b8f5d0ff',

  danger0: '#e01e1eff',
  danger1: '#dc3546ff',

  text0: '#0c0c0cff',
  text1: '#202020ff',
  text2: '#3a3a3aff',
  text3: '#717171ff',
  text4: '#ffffffff',
};

const fontWeight = {
  regular: 500,
  bold: 700,
  extraBold: 800,
};

const fontToken = {
  caption: {
    size: '12px',
    weight: fontWeight.regular,
    lineHeight: '1.1',
    letterSpacing: '-0.12px',
  },

  base14: {
    size: '14px',
    weight: fontWeight.regular,
    lineHeight: '1.4',
    letterSpacing: '0',
  },
  base16: {
    size: '16px',
    weight: fontWeight.regular,
    lineHeight: '24px',
    letterSpacing: '0',
  },

  h5: {
    size: '21px',
    weight: fontWeight.bold,
    lineHeight: '1.6',
    letterSpacing: '0',
  },
  h4: {
    size: '28px',
    weight: fontWeight.bold,
    lineHeight: '42px',
    letterSpacing: '0',
  },
  h3: {
    size: '37px',
    weight: fontWeight.bold,
    lineHeight: '1.2',
    letterSpacing: '0',
  },
  h2: {
    size: '43px',
    weight: fontWeight.extraBold,
    lineHeight: '1.1',
    letterSpacing: '0',
  },
  h1: {
    size: '56px',
    weight: fontWeight.extraBold,
    lineHeight: '1.1',
    letterSpacing: '0',
  },
};

/**
 * @description 스타일 변수 모음
 */
export const theme = {
  colors: colorToken,
  fonts: fontToken,
  breakpoints: {
    // min-width
    device: {
      mobile: '320px', // 320 ~
      tablet: '1024px', // 1024 ~
      desktop: '1920px', // 1920 ~
    },
  },
} as const;

export type ThemeType = typeof theme;
