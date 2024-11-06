import styled from '@emotion/styled';

const Menu = ({ className }: Props) => {
  return (
    <Items className={className}>
      <a href="#">Home</a>
      <a href="#">Brows</a>
      <a href="#">Create</a>
      <a href="#">MyNFT's</a>
    </Items>
  );
};

const Items = styled.div`
  ${({ theme }) => ({
    color: theme.colors.text0,
    fontSize: theme.fonts.base16.size,
    fontWeight: theme.fonts.base16.weight,
    lineHeight: theme.fonts.base16.lineHeight,
    letterSpacing: theme.fonts.base16.letterSpacing,
    display: 'flex',
    alignItems: 'center',
    columnGap: '12px',
    '>a': {
      margin: '10px',
      '&:active': {
        color: theme.colors.text0,
      },
    },
  })}
`;

///

interface Props {
  className?: string;
}

export const Navigation = ({ className }: Props) => {
  return (
    <Nav className={className}>
      <Menu />
    </Nav>
  );
};

const Nav = styled.nav``;
