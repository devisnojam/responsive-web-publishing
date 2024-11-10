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

        #root {
          /* width: 85.33333%; */
          width: calc(100% - 54px);
          margin: 0 auto;
          margin-top: 28px;
        }
        @media (min-width: ${theme.breakpoints.device.tablet}) {
          #root {
            width: 72.65625%;
          }
        }
      `}
    />
  );
}
