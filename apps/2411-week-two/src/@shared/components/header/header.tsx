import styled from '@emotion/styled';

import { Logo } from './logo';
import { MenuItems } from './menu-items';
import { NotificationButton, ProfileButton } from '../buttons';
import SearchInput from '../inputs/search-input';

export default function Container() {
  return (
    <Header>
      <Logo />
      <SearchInput />

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
    '.nav': {
      marginLeft: 'auto',
    },
  })}
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
