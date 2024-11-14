import styled from '@emotion/styled';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<'img'> {
  className?: string;
  width?: string;
}

export default function Avatar({ className, ...props }: Props) {
  return (
    <Img
      {...props}
      className={className}
      src="/public/imgs/avatar-sample-img.avif"
      alt="avatar"
    />
  );
}

const Img = styled.img<Props>`
  border-radius: 50%;
  ${({ width }) => width && width}
  aspect-ratio: 1 / 1;
`;
