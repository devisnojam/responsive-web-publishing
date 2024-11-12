import styled from '@emotion/styled';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<'img'> {
  className?: string;
  src?: string;
  alt?: string;
}

export default function Avatar({ className, src, alt, ...props }: Props) {
  return (
    <StyledImg
      className={className}
      src={src ?? '/imgs/avatar-default.png'}
      alt={alt ?? 'avatar'}
      {...props}
    />
  );
}

const StyledImg = styled.img<Props>`
  ${({ width = '100px', height = '100px', theme }) => ({
    width,
    height,
    borderRadius: '50%',
    outline: '1px solid',
    outlineColor: theme.colors.success1,
  })}
`;
