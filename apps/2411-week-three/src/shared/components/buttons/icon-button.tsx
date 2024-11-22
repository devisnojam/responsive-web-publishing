import { css } from '@emotion/react';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { cloneElement, ComponentProps, PropsWithChildren } from 'react';

import { SVGIconEnvelopeSimple, SVGIconUser } from '../../../assets/icons';

const BASIC_ICON_COMPONENT_ITEM = {
  envelope: <SVGIconEnvelopeSimple />,
  user: <SVGIconUser />,
};
type IconKey = keyof typeof BASIC_ICON_COMPONENT_ITEM;

interface Props extends ComponentProps<'button'> {
  varients?: 'base' | 'outline';
  size?: 'primary' | 'secondary' | 'tertiary';
  leftIcon?: IconKey;
}

export default function IconButton({
  children,
  varients = 'base',
  size = 'primary',
  leftIcon,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <StyledButton varients={varients} size={size} {...props}>
      {leftIcon &&
        cloneElement(BASIC_ICON_COMPONENT_ITEM[leftIcon], {
          className: 'icon-btn left',
        })}
      <span>{children}</span>
    </StyledButton>
  );
}

type StyleProps = Props & { theme: Theme };

const baseStyle = ({ theme }: StyleProps) => css`
  ${theme.fontStyles['work-sans-semi-bold']}
  font-size: 16px;
  line-height: 1.4;
  padding: 20px 50px;
  background-color: ${theme.colors.callToAction};
  color: #ffffff;
  border: 0;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  .icon-btn {
    width: 20px;
    height: 20px;
  }
  span {
    position: relative;
    top: 2px;
  }
`;
const secondaryStyle = ({ theme }: StyleProps) => css`
  ${theme.fonts.fontButton('work-sans')}
  font-size: 16px;
  line-height: 1.4;
  height: 60px;
`;
const tertiaryStyle = ({ theme }: StyleProps) => css`
  ${theme.fonts.fontButton('work-sans')}
  font-size: 16px;
  line-height: 1.4;
  height: 46px;
`;
const outlineStyle = ({ theme }: StyleProps) => css`
  background-color: transparent;
  border: 2px solid ${theme.colors.callToAction};
  svg > path {
    fill: ${theme.colors.callToAction};
  }
`;

const StyledButton = styled.button<Props>`
  ${baseStyle}
  ${({ size }) => size === 'secondary' && secondaryStyle}
  ${({ size }) => size === 'tertiary' && tertiaryStyle}
  ${({ varients }) => varients === 'outline' && outlineStyle}
`;
