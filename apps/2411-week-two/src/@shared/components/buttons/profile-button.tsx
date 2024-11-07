import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import Avatar from '../avatar';

interface Props extends ComponentProps<'button'> {
  className?: string;
  avatarImgSrc?: string;
}

export default function ProfileButton({ avatarImgSrc, ...props }: Props) {
  return (
    <StyledButton {...props}>
      <span>Account</span>
      <Avatar src={avatarImgSrc} alt="avatar" width="42px" height="42px" />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${({ theme }) => ({
    padding: 0,
    paddingLeft: '24px',
    color: theme.colors.purple0,
    fontSize: theme.fonts.base16.size,
    fontWeight: theme.fonts.base16.weight,
    lineHeight: theme.fonts.base16.lineHeight,
    letterSpacing: theme.fonts.base16.letterSpacing,
    backgroundColor: theme.colors.nuteral3,
    borderColor: theme.colors.nuteral3,
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    columnGap: '10px',
    // '>img': {
    //   width: '42px',
    //   height: '42px',
    //   borderRadius: '50%',
    //   outline: '1px solid',
    //   outlineColor: theme.colors.success1,
    // },
  })}
`;
