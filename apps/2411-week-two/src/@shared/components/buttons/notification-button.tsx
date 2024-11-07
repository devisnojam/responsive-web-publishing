import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import { SVGIconBell } from '../../../assets/icons';

interface Props extends ComponentProps<'button'> {
  className?: string;
  redDot?: boolean;
}

export default function NotificationButton({
  className,
  redDot = false,
  ...props
}: Props) {
  return (
    <StyledButton className={className} redDot={redDot} {...props}>
      <SVGIconBell />
    </StyledButton>
  );
}

const StyledButton = styled.button<Props>`
  ${({ theme }) => ({
    width: '44px',
    height: '44px',
    backgroundColor: theme.colors.nuteral3,
    borderColor: theme.colors.nuteral3,
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    '>svg': {
      fill: 'transparent',
      path: {
        stroke: theme.colors.purple0,
      },
    },
  })}
`;
