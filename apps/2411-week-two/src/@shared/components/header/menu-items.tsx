import styled from '@emotion/styled';

interface Props {
  className?: string;
}

export const MenuItems = ({ className }: Props) => {
  return (
    <StyledMenu className={className}>
      <a href="#">Home</a>
      <a href="#">Brows</a>
      <a href="#">Create</a>
      <a href="#">MyNFT's</a>
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
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
