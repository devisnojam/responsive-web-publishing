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
} as const;

const fontToken = {
  caption: 12,

  base14: 14,
  base16: 16,

  h5: 21,
  h4: 28,
  h3: 37,
  h2: 43,
  h1: 56,
} as const;

/**
 * @description 스타일 변수 모음
 */
export const theme = {
  colors: colorToken,
  fonts: fontToken,
} as const;

export type ThemeType = typeof theme;
