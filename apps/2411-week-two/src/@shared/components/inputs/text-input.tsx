import styled from '@emotion/styled';
import { ComponentProps, useId } from 'react';

import { SVGIconSearchMd } from '../../../assets/icons';

interface Props extends ComponentProps<'label'> {
  className?: string;
  leftIcon?: 'search';
  placeholder?: string;
}

export default function TextInput({
  className,
  leftIcon,
  placeholder = 'input keyword',
  ...props
}: Props) {
  const id = useId();
  return (
    <StyledLabel htmlFor={id} className={className} {...props}>
      <input id={id} type="text" placeholder={placeholder} />
      {leftIcon && <SVGIconSearchMd />}
    </StyledLabel>
  );
}

const StyledLabel = styled.label<Props>`
  ${({ theme, leftIcon }) => ({
    padding: leftIcon ? '10px' : '10px 12px',
    color: theme.colors.text3,
    fontSize: theme.fonts.base16.size,
    fontWeight: theme.fonts.base16.weight,
    lineHeight: theme.fonts.base16.lineHeight,
    letterSpacing: theme.fonts.base16.letterSpacing,
    backgroundColor: theme.colors.nuteral3,
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: '12px',
    '>input': {
      order: 1,
      flex: 1,
      padding: 0,
      border: 0,
      '&::placeholder': {
        fontWeight: 300,
      },
    },
    '>svg': {
      width: '24px',
      height: '24px',
      fill: 'transparent',
      path: {
        stroke: theme.colors.purple0,
      },
    },
  })}
`;
