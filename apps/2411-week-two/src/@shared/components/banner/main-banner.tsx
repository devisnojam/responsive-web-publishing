import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import { IconButton } from '../buttons';

interface Props extends ComponentProps<'div'> {
  className?: string;
}

export default function MainBanner({ className }: Props) {
  return (
    <Grid>
      <StyledContainer className={className}>
        <span className="title">
          Explore Unique Digital Art and Collectibles
        </span>
        <span className="description">
          Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus
          facilisi ultrices sed faucibus proin cum ut. Eu dictum nisi facilisis
          non habitant senectus eget sollicitudin.
        </span>

        <ButtonGroup className="inner">
          <IconButton rightIcon="arrow-r">Discover now</IconButton>
          <IconButton className="dia-btn" varients="outline" leftIcon="diamond">
            Create your own
          </IconButton>
        </ButtonGroup>
      </StyledContainer>

      <ButtonGroup className="outer">
        <IconButton rightIcon="arrow-r">Discover now</IconButton>
        <IconButton className="dia-btn" varients="outline" leftIcon="diamond">
          Create your own
        </IconButton>
      </ButtonGroup>
    </Grid>
  );
}

const StyledContainer = styled.div`
  ${({ theme }) => ({
    marginBottom: '12px',
    padding: '12px 0',
    paddingLeft: '32px',
    paddingRight: '119px',
    color: theme.colors.text4,
    backgroundImage: "url('/imgs/main-banner-sample.png')",
    backgroundSize: 'cover',
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '12px',
    '>span': {
      display: 'block',
    },
    '.title': {
      fontSize: theme.fonts.h5.size,
      fontWeight: theme.fonts.h5.weight,
    },
    '.description': {
      fontSize: theme.fonts.base14.size,
      fontWeight: theme.fonts.base14.weight,
    },
  })}

  @media (min-width: ${({ theme }) => theme.breakpoints.device.tablet}) {
    ${({ theme }) => ({
      marginBottom: 0,
      padding: '48px',
      rowGap: '24px',
      '.title': {
        fontSize: theme.fonts.h2.size,
        fontWeight: theme.fonts.h2.weight,
      },
      '.description': {
        fontSize: theme.fonts.base16.size,
        fontWeight: theme.fonts.base16.weight,
      },
    })}
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.device.desktop}) {
    ${({ theme }) => ({
      padding: '48px',
      '.title': {
        fontSize: theme.fonts.h1.size,
        fontWeight: theme.fonts.h1.weight,
      },
    })}
  }
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const ButtonGroup = styled.div`
  display: flex;
  column-gap: 24px;
  &.inner {
    display: none;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.device.tablet}) {
    &.outer {
      display: none;
    }
    &.inner {
      display: flex;
    }
    button.dia-btn {
      color: #fff;
      outline-color: #fff;
      svg > path {
        stroke: #fff;
      }
    }
  }
`;
