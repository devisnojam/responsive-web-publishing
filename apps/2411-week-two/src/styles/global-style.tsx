import { css, Global, useTheme } from '@emotion/react';

export default function GlobalStyle() {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        html {
          font-family: 'Inter', Helvetica, Arial, sans-serif;
          font-size: ${theme.fonts.base14.size};
          font-weight: ${theme.fonts.base14.weight};
          line-height: ${theme.fonts.base14.lineHeight};
          letter-spacing: ${theme.fonts.base14.letterSpacing};
        }
      `}
    />
  );
}
