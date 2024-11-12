import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import { Logo } from './logo';
import { MenuItems } from './menu-items';
import { NotificationButton, ProfileButton } from '../buttons';
import TextInput from '../inputs/text-input';

interface Props extends ComponentProps<'header'> {
  className?: string;
}

export default function Container({ className }: Props) {
  return (
    <Header className={className}>
      <Logo />
      <TextInput className="search-input" leftIcon="search" />

      <ItemGroup className="nav">
        <MenuItems />
        <NotificationButton redDot />
        <ProfileButton />
      </ItemGroup>
    </Header>
  );
}

const Header = styled.header`
  ${() => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    columnGap: '18px',
    '.search-input': {
      display: 'none',
    },
    '.nav': {
      marginLeft: 'auto',
    },
  })}
  @media (min-width: ${({ theme }) => theme.breakpoints.device.desktop}) {
    .search-input {
      display: block;
    }
  }
`;

const ItemGroup = styled.nav`
  ${() => ({
    display: 'none',
    alignItems: 'center',
    columnGap: '12px',
  })}
  @media (min-width: ${({ theme }) => theme.breakpoints.device.desktop}) {
    display: flex;
  }
`;
