import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import { breakpoints } from '../../../styles/mixin-css';

interface Props extends ComponentProps<'section'> {
  className?: string;
  breakpointWidth?: Partial<typeof breakpoints>;
  breakpointHeight?: Partial<typeof breakpoints>;
  imageURL: string;
}

export default function BannerImageView({ className, ...props }: Props) {
  return (
    <Styled
      className={`banner-image-view ${className ? className : ''}`}
      {...props}
    />
  );
}

const Styled = styled.section<Props>`
  width: ${({ breakpointWidth }) =>
    breakpointWidth?.mobile ? breakpointWidth.mobile : '100%'};
  height: ${({ breakpointHeight }) =>
    breakpointHeight?.mobile ? breakpointHeight.mobile : '320px'};
  background-image: ${({ imageURL }) => (imageURL ? `url(${imageURL})` : '')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${({ theme }) => theme.mediaQueryHelper('tablet')} {
    ${({ breakpointWidth }) =>
      breakpointWidth?.tablet && { width: breakpointWidth.tablet }}
    ${({ breakpointHeight }) =>
      breakpointHeight?.tablet && { height: breakpointHeight.tablet }}
  }

  ${({ theme }) => theme.mediaQueryHelper('desktop')} {
    ${({ breakpointWidth }) =>
      breakpointWidth?.desktop && { width: breakpointWidth.desktop }}
    ${({ breakpointHeight }) =>
      breakpointHeight?.desktop && { height: breakpointHeight.desktop }}
  }
`;
