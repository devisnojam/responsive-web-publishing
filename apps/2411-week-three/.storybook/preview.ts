import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import GlobalStyle from '../src/styles/global-style';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../src/styles/theme';
import { breakpoints } from '../src/styles/mixin-css';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: theme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyle,
  }),
];

const customViewport = {
  mobile: {
    name: 'mobile',
    styles: { width: breakpoints.mobile, height: '900px' },
  },
  tablet: {
    name: 'tablet',
    styles: { width: breakpoints.tablet, height: '900px' },
  },
  desktop: {
    name: 'desktop',
    styles: { width: breakpoints.desktop, height: '900px' },
  },
  desktopWide: {
    name: 'desktop-wide',
    styles: { width: '1920px', height: '900px' },
  },
};

const preview: Preview = {
  parameters: {
    layout: 'centered',
    viewport: {
      viewports: { ...INITIAL_VIEWPORTS, ...customViewport },
      defaultViewport: 'mobile',
    },
    backgrounds: {
      values: [
        { name: 'default', value: '#c8c8c8' },
        { name: 'primary', value: '#2b2b2b' },
      ],
      default: 'default',
    },
  },
};

export default preview;
