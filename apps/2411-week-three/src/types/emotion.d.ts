import '@emotion/react';
import { ThemeType } from '../styles/theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: ThemeType['colors'];
    fonts: ThemeType['fonts'];
    breakpoints: ThemeType['breakpoints'];
  }
}

declare module '@emotion/react/macro' {}
