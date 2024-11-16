import styled from '@emotion/styled';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<'img'> {
  className?: string;
  imgSrc?: string;
  width?: string;
}

export default function RectImageBox({ className, ...props }: Props) {
  return (
    <Styled
      className={`rect-image-box ${className ? className : ''}`}
      {...props}
      src={'/imgs/nft-sample-img-02.avif'}
      alt="image"
    />
  );
}

const Styled = styled.img<Props>`
  border-radius: 20px;
  width: ${({ width }) => (width ? width : '100px')};
  aspect-ratio: 1 / 1;
`;
