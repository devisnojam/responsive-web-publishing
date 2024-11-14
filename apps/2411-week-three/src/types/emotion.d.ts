import '@emotion/react';
import { ThemeType } from '../styles/theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: ThemeType['colors'];
    fonts: ThemeType['fonts'];
    fontStyles: ThemeType['fontStyles'];
    breakpoints: ThemeType['breakpoints'];
  }
}
