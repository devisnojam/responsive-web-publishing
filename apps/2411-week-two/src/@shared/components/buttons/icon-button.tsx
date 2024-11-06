import styled from '@emotion/styled';
import { cloneElement, ComponentProps, PropsWithChildren } from 'react';

import {
  SVGIconArrowNarrowRight,
  SVGIconChevronLeft,
  SVGIconChevronRight,
  SVGIconDiamond,
} from '../../../assets/icons';

const BASIC_ICON_COMPONENT_ITEM = {
  'arrow-r': <SVGIconArrowNarrowRight />,
  'chevron-arrow-l': <SVGIconChevronLeft />,
  'chevron-arrow-r': <SVGIconChevronRight />,
  diamond: <SVGIconDiamond />,
};
type IconKey = keyof typeof BASIC_ICON_COMPONENT_ITEM;

interface Props extends ComponentProps<'button'> {
  varients?: 'base' | 'outline';
  leftIcon?: IconKey;
  rightIcon?: IconKey;
}

export default function IconButton({
  children,
  varients = 'base',
  leftIcon,
  rightIcon,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <StyledButton varients={varients} {...props}>
      {leftIcon &&
        cloneElement(BASIC_ICON_COMPONENT_ITEM[leftIcon], {
          className: 'icon-btn left',
        })}
      <span>{children}</span>
      {rightIcon &&
        cloneElement(BASIC_ICON_COMPONENT_ITEM[rightIcon], {
          className: 'icon-btn right',
        })}
    </StyledButton>
  );
}
// 접근성 살려서 아이콘 위치 넣는법 작업
const StyledButton = styled.button<Props>`
  ${({ theme }) => ({
    // base
    padding: '8px 12px',
    color: theme.colors.text4,
    backgroundColor: theme.colors.purple1,
    border: 'none',
    borderRadius: '24px',
    fontSize: theme.fonts.caption.size,
    fontWeight: theme.fonts.caption.weight,
    lineHeight: theme.fonts.caption.lineHeight,
    letterSpacing: theme.fonts.caption.letterSpacing,
    display: 'flex',
    alignItems: 'center',
    '>svg': {
      width: '12px',
      height: '12px',
      fill: 'transparent',
      '>path': {
        stroke: theme.colors.text4,
      },
      '&.left': { marginRight: '6px' },
      '&.right': { marginLeft: '6px' },
    },
    '&:hover': {
      backgroundColor: theme.colors.purple0,
      boxShadow: '0px 4px 8px 0px rgba(194, 118, 253, 0.2)',
    },
  })}
  ${({ theme, varients }) =>
    varients === 'outline' && {
      color: theme.colors.purple0,
      backgroundColor: 'unset',
      outline: `1px solid ${theme.colors.purple1}`,
      '>svg': {
        fill: 'transparent',
        '>path': {
          stroke: theme.colors.purple0,
        },
        '&.left': { marginRight: '6px' },
        '&.right': { marginLeft: '6px' },
      },
      '&:hover': {
        backgroundColor: 'unset',
        boxShadow: '0px 4px 8px 0px rgba(111, 79, 242, 0.8)',
      },
    }}

  @media (min-width: ${({ theme }) => theme.breakpoints.device.tablet}) {
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.device.desktop}) {
  }
`;
