import { css } from '@emotion/react';

const fontStyle = {
  'space-mono-regular': css`
    font-family: 'Space Mono', monospace;
    font-weight: 400;
    font-style: normal;
  `,
  'space-mono-bold': css`
    font-family: 'Space Mono', monospace;
    font-weight: 700;
    font-style: normal;
  `,
  'work-sans-regular': css`
    font-family: 'Work Sans', sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  `,
  'work-sans-semi-bold': css`
    font-family: 'Work Sans', sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
  `,
};

type FontType = 'space-mono' | 'work-sans';
//////

export const fontH1 = (type: FontType) => {
  switch (type) {
    case 'space-mono':
      return css`
        ${fontStyle['space-mono-bold']}
        font-size: 67px;
        line-height: 1.1;
        letter-spacing: 0;
      `;
    case 'work-sans':
      return css`
        ${fontStyle['work-sans-semi-bold']}
        font-size: 67px;
        line-height: 1.1;
        letter-spacing: 0;
      `;
  }
};

export const fontH2 = (type: FontType) => {
  switch (type) {
    case 'space-mono':
      return css`
        ${fontStyle['space-mono-bold']}
        font-size: 51px;
        line-height: 1.1;
        letter-spacing: 0;
      `;
    case 'work-sans':
      return css`
        ${fontStyle['work-sans-semi-bold']}
        font-size: 51px;
        line-height: 1.1;
        letter-spacing: 0;
      `;
  }
};

export const fontH3 = (type: FontType) => {
  switch (type) {
    case 'space-mono':
      return css`
        ${fontStyle['space-mono-bold']}
        font-size: 38px;
        line-height: 1.2;
        letter-spacing: 0;
      `;
    case 'work-sans':
      return css`
        ${fontStyle['work-sans-semi-bold']}
        font-size: 38px;
        line-height: 1.2;
        letter-spacing: 0;
      `;
  }
};

export const fontH4 = (type: FontType) => {
  switch (type) {
    case 'space-mono':
      return css`
        ${fontStyle['space-mono-bold']}
        font-size: 28px;
        line-height: 1.4;
        letter-spacing: 0;
      `;
    case 'work-sans':
      return css`
        ${fontStyle['work-sans-semi-bold']}
        font-size: 28px;
        line-height: 1.4;
        letter-spacing: 0;
      `;
  }
};

export const fontH5 = (type: FontType) => {
  switch (type) {
    case 'space-mono':
      return css`
        ${fontStyle['space-mono-bold']}
        font-size: 22px;
        line-height: 1.6;
        letter-spacing: 0;
      `;
    case 'work-sans':
      return css`
        ${fontStyle['work-sans-semi-bold']}
        font-size: 22px;
        line-height: 1.4;
        letter-spacing: 0;
      `;
  }
};

export const fontBase = (type: FontType) => {
  switch (type) {
    case 'space-mono':
      return css`
        ${fontStyle['space-mono-regular']}
        font-size: 16px;
        line-height: 1.4;
        letter-spacing: 0;
      `;
    case 'work-sans':
      return css`
        ${fontStyle['work-sans-regular']}
        font-size: 16px;
        line-height: 1.4;
        letter-spacing: 0;
      `;
  }
};

export const fontCaption = (type: FontType) => {
  switch (type) {
    case 'space-mono':
      return css`
        ${fontStyle['space-mono-regular']}
        font-size: 12px;
        line-height: 1.1;
        letter-spacing: 0;
      `;
    case 'work-sans':
      return css`
        ${fontStyle['work-sans-regular']}
        font-size: 12px;
        line-height: 1.1;
        letter-spacing: 0;
      `;
  }
};

export const fontButton = (type: FontType) => {
  switch (type) {
    case 'space-mono':
      return css`
        ${fontStyle['space-mono-regular']}
        font-size: 22px;
        line-height: 1.6;
        letter-spacing: 0;
      `;
    case 'work-sans':
      return css`
        ${fontStyle['work-sans-regular']}
        font-size: 22px;
        line-height: 1.6;
        letter-spacing: 0;
      `;
  }
};

// export const mediaQueryCSS = css`
//   // $device = "mobile" | "tablet" | "desktop"
//   @mixin media-query($device) {
//     @if $device == 'mobile' {
//       @media (min-width: 320px) {
//         @content;
//       }
//     } @else if $device == 'tablet' {
//       @media (min-width: 834px) {
//         @content;
//       }
//     } @else if $device == 'desktop' {
//       @media (min-width: 1280px) {
//         @content;
//       }
//     }
//   }
// `;
