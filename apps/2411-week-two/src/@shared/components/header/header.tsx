import styled from '@emotion/styled';

import { Logo } from './logo';
import { MenuItems } from './menu-items';
import { NotificationButton, ProfileButton } from '../buttons';

export default function Container() {
  return (
    <Header>
      <Logo />

      <StyledNav>
        <MenuItems className="menu-items" />
        <NotificationButton redDot />
        <ProfileButton />
      </StyledNav>
    </Header>
  );
}

const StyledNav = styled.nav`
  ${() => ({
    display: 'none',
    alignItems: 'center',
    columnGap: '12px',
  })}
  @media (min-width: ${({ theme }) => theme.breakpoints.device.desktop}) {
    display: flex;
  }
`;

const Header = styled.header`
  ${() => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // '> .nav': {
    //   display: 'none',
    // },
  })}
`;
