import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import { IconButton } from '../buttons';
import TextInput from '../inputs/text-input';

interface Props extends ComponentProps<'div'> {
  className?: string;
}

export default function CommunityCard({ className }: Props) {
  return (
    <StyledContainer className={className}>
      <img src="/imgs/sample-nft-thumb.webp" alt="img" />

      <div className="content">
        <span className="title">Join our community</span>
        <span className="description">
          Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus
          facilisi ultrices sed faucibus proin cum ut.
        </span>

        <div className="btn-group">
          <TextInput className="input" placeholder="Enter your email adress" />
          <IconButton className="cta">Get Email</IconButton>
        </div>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  ${({ theme }) => ({
    padding: '32px',
    backgroundColor: theme.colors.nuteral4,
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '12px',
    img: {
      height: '282px',
      borderRadius: '15px',
    },
    '.content': {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '12px',
      '.title': {
        color: theme.colors.purple0,
        fontSize: theme.fonts.h5.size,
        fontWeight: theme.fonts.h5.weight,
      },
      '.description': {
        color: '#000',
        fontSize: theme.fonts.base16.size,
        fontWeight: theme.fonts.base16.weight,
        lineHeight: theme.fonts.base16.lineHeight,
        letterSpacing: theme.fonts.base16.letterSpacing,
      },
      '.btn-group': {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '12px',
        '.cta': {
          padding: '13.25px',
          borderRadius: '8px',
          span: {
            fontSize: theme.fonts.base16.size,
          },
        },
      },
    },
  })}

  @media (min-width: ${({ theme }) => theme.breakpoints.device.tablet}) {
    ${({ theme }) => ({
      padding: '48px',
      flexDirection: 'row',
      columnGap: '24px',
      rowGap: 0,
      img: {
        height: '280px',
        borderRadius: '15px',
      },
      '.content': {
        justifyContent: 'space-around',
        '.title': {
          fontSize: theme.fonts.h3.size,
          fontWeight: theme.fonts.h3.weight,
        },
      },
    })}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.device.desktop}) {
    ${({ theme }) => ({
      padding: '68px',
      columnGap: '32px',
      img: {
        height: '203px',
        borderRadius: '15px',
      },
      '.content': {
        '.title': {
          fontSize: theme.fonts.h2.size,
          fontWeight: theme.fonts.h2.weight,
        },
        '.btn-group': {
          maxWidth: '450px',
          flexDirection: 'row',
          position: 'relative',
          '.input': {
            width: 'calc(100% - 140px)',
          },
          '.cta': {
            width: '120px',
            position: 'absolute',
            right: '3px',
          },
        },
      },
    })}
  }
`;
