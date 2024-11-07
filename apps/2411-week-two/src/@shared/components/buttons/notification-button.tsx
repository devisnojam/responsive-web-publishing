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
  ${({ redDot, theme }) => ({
    width: '44px',
    height: '44px',
    backgroundColor: theme.colors.nuteral3,
    borderColor: theme.colors.nuteral3,
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    '::before': {
      content: '" "',
      display: redDot ? 'block' : 'none',
      border: '4px solid #ff0000',
      borderRadius: '50%',
      position: 'absolute',
      top: '8px',
      right: '12px',
    },
    '>svg': {
      fill: 'transparent',
      path: {
        stroke: theme.colors.purple0,
      },
    },
  })}
`;
