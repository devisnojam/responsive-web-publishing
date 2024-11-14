import {
  fontBase,
  fontButton,
  fontCaption,
  fontH1,
  fontH2,
  fontH3,
  fontH4,
  fontH5,
  fontStyle,
} from './mixin-css';

export const theme = {
  colors: {
    background: 'rgba(43, 43, 43, 1)',
    backgroundSecondary: 'rgba(59, 59, 59, 1)',
    caption: 'rgba(133, 133, 132, 1)',
    labelText: 'rgba(133, 133, 132, 1)',
    text: 'rgba(255, 255, 255, 1)',
    callToAction: 'rgba(162, 89, 255, 1)',
    blueAccent: 'rgba(55, 125, 247, 1)',
    redAccent: 'rgba(255, 114, 98, 1)',
    'gradient#1':
      'linear-gradient(0deg, rgba(162,89,255,1) 0%, rgba(255,98,80,1) 100%)',
    'gradient#2':
      'linear-gradient(0deg, rgba(162,89,255,1) 0%, rgba(55,125,247,1) 100%)',
  },
  fonts: {
    fontH1,
    fontH2,
    fontH3,
    fontH4,
    fontH5,
    fontBase,
    fontCaption,
    fontButton,
  },
  fontStyles: fontStyle,
  breakpoints: {
    mobile: '320px',
    tablet: '834px',
    desktop: '1280px',
  },
} as const;

export type ThemeType = typeof theme;
