import styled from '@emotion/styled';

import { SVGMainLogo } from '../../../assets';

interface Props {
  className?: string;
}

export const Logo = ({ className }: Props) => {
  return (
    <LogoWrapper className={className}>
      <SVGMainLogo />
      <span>NFT Logoplace</span>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div<Props>`
  ${({ theme }) => ({
    color: theme.colors.purple0,
    fontSize: theme.fonts.h5.size,
    fontWeight: theme.fonts.h5.weight,
    lineHeight: theme.fonts.h5.lineHeight,
    letterSpacing: theme.fonts.h5.letterSpacing,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '>span': {
      margin: '10px',
      padding: '0 1px',
    },
    '>svg': {
      margin: '3px 0',
      marginRight: '8px',
      width: '48px',
      height: '48px',
    },
  })}

  @media (min-width: ${({ theme }) => theme.breakpoints.device.tablet}) {
    ${({ theme }) => ({
      fontSize: theme.fonts.h4.size,
      fontWeight: theme.fonts.h4.weight,
      lineHeight: theme.fonts.h4.lineHeight,
      letterSpacing: theme.fonts.h4.letterSpacing,
      '>span': {
        padding: '0 3.5px',
      },
      '>svg': {
        margin: 0,
        marginRight: '16px',
        width: '63px',
        height: '63px',
      },
    })}
  }
`;
