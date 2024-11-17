import styled from '@emotion/styled';
import { ComponentProps, useId } from 'react';

import { SVGIconMagnifyingGlass } from '../../assets/icons';

interface Props extends ComponentProps<'label'> {
  className?: string;
  placeholder?: string;
}

export default function TextInput({
  className,
  placeholder = 'input keyword',
  ...props
}: Props) {
  const id = useId();
  return (
    <StyledLabel htmlFor={id} className={className} {...props}>
      <input id={id} type="text" placeholder={placeholder} />
      <SVGIconMagnifyingGlass />
    </StyledLabel>
  );
}

const StyledLabel = styled.label<Props>`
  ${({ theme }) => ({
    padding: '17px 20px',
    border: '1px solid',
    borderColor: theme.colors.backgroundSecondary,
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: '12px',
    '>input': {
      height: '22px',
      backgroundColor: 'transparent',
      order: 1,
      flex: 1,
      padding: 0,
      border: 0,
      position: 'relative',
      top: '3px',
      '&::placeholder': {
        ...theme.fonts.fontBase('work-sans'),
        position: 'relative',
      },
    },
    '>svg': {
      order: 2,
      width: '24px',
      height: '24px',
    },
  })}
`;
