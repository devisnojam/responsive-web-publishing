// Replace your-renderer with the renderer you are using (e.g., react, vue3)
import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import GlobalStyle from '../src/styles/global-style';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../src/styles/theme';

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

const preview: Preview = {
  // https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      values: [{ name: 'default', value: '#2b2b2b' }],
      default: 'default',
    },
  },
};

export default preview;
