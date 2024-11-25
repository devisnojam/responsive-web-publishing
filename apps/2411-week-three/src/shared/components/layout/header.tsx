import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import { SVGIconList, SVGIconStorefront } from '../../../assets/icons';
import { SVGLabelNFTMarket } from '../../../assets/labels';
import { IconButton } from '../buttons';

interface Props extends ComponentProps<'header'> {
  className?: string;
}

export default function Header({ className, ...props }: Props) {
  return (
    <Styled className={`header ${className ? className : ''}`} {...props}>
      <div className="logo">
        <SVGIconStorefront className="logo__icon" />
        <SVGLabelNFTMarket className="logo__link" />
      </div>
      <nav className="nav-menu">
        <a href="/#" className="nav-menu__link">
          Marketplace
        </a>
        <a href="/#" className="nav-menu__link">
          Rankings
        </a>
        <a href="/#" className="nav-menu__link">
          Connect a wallet
        </a>
        <IconButton className="nav-menu__btn" leftIcon="user">
          Sign Up
        </IconButton>
        <SVGIconList className="nav-menu__hamburger" />
      </nav>
    </Styled>
  );
}

const Styled = styled.header<Props>`
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    display: flex;
    column-gap: 9px;
    align-items: center;
    cursor: pointer;
    &__icon {
      width: 24px;
      height: 24px;
      path {
        fill: ${({ theme }) => theme.colors.callToAction};
      }
    }
    &__link {
      width: 149.56px;
      position: relative;
      top: 2px;
    }
  }
  .nav-menu {
    display: flex;
    &__link,
    &__btn {
      display: none;
    }
    &__hamburger {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }

  ${({ theme }) => theme.mediaQueryHelper('tablet')} {
    padding: 15px 50px;
  }

  ${({ theme }) => theme.mediaQueryHelper('desktop')} {
    padding: 20px 50px;
    .logo {
      column-gap: 10px;
      &__icon {
        width: 32px;
        height: 32px;
      }
      &__link {
        width: 199.41px;
      }
    }
    .nav-menu {
      column-gap: 10px;
      align-items: center;
      &__link {
        display: inline-block;
        padding: 0 20px;
        ${({ theme }) => theme.fontStyles['work-sans-semi-bold']};
        color: #ffffff;
        font-size: 16px;
        line-height: 1.4;
        cursor: pointer;
      }
      &__btn {
        display: flex;
        padding: 20px 30px;
      }
      &__hamburger {
        display: none;
      }
    }
  }
`;
