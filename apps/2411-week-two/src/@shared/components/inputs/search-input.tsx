import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import { SVGIconSearchMd } from '../../../assets/icons';

interface Props extends ComponentProps<'label'> {
  className?: string;
}

export default function SearchInput({ className }: Props) {
  return (
    <StyledLabel htmlFor="search" className={className}>
      <input id="search" type="text" placeholder="input keyword" />
      <SVGIconSearchMd />
    </StyledLabel>
  );
}

const StyledLabel = styled.label<Props>`
  ${({ theme }) => ({
    width: '268px',
    padding: '10px',
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
