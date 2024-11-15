import { css, Global, useTheme } from '@emotion/react';

export default function GlobalStyle() {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        html {
          ${theme.fonts.fontH1('space-mono')}
          user-select: none;
        }
        body {
          margin: 0;
        }
        a {
          text-decoration: none;
          &:visited {
            color: unset;
          }
        }
        button {
          cursor: pointer;
        }
        img {
          max-width: 100%;
        }

        ///////////

        #root {
          margin: 0 auto;
          background-color: ${theme.colors.background};
        }
      `}
    />
  );
}
