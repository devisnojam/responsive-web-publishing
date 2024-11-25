import { css, Global, useTheme } from '@emotion/react';

export default function GlobalStyle() {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        html {
          min-height: 100vh;
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
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
        }
        input {
          margin: 0;
          padding: 0;
          border: none;
        }
        // windows os scrollbar style
        .scrollable-container {
          ::-webkit-scrollbar {
            width: 5px;
          }
          ::-webkit-scrollbar-thumb {
            background: rgba(107, 107, 107, 0.5);
            border-radius: 4px;
          }
          ::-webkit-scrollbar-track {
            background: transparent;
          }
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
