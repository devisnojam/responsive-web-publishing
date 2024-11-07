import styled from '@emotion/styled';

import { Logo } from './logo';
import { Navigation } from './navigation';

export default function Container() {
  return (
    <Header>
      <Logo />
      <Navigation className="nav" />
    </Header>
  );
}

const Header = styled.header`
  ${() => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '> .nav': {
      display: 'none',
    },
  })}

  @media (min-width: ${({ theme }) => theme.breakpoints.device.desktop}) {
    > .nav {
      display: block;
    }
  }
`;
