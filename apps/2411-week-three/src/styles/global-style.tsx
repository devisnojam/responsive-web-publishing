import { css, Global, useTheme } from '@emotion/react';

export default function GlobalStyle() {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        html {
          ${theme.fonts.fontBase('work-sans')}
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
        ul {
          margin: 0;
          padding: 0;
          list-style-type: none;
        }
        ///////////

        #root {
          margin: 0 auto;
          min-height: 100vh;
          background-color: ${theme.colors.background};
        }
      `}
    />
  );
}
