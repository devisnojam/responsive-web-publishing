import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import {
  SVGIconDiscordLogo,
  SVGIconInstagramLogo,
  SVGIconStorefront,
  SVGIconTwitterLogo,
  SVGIconYoutubeLogo,
} from '../../assets/icons';
import { SVGLabelNFTMarket } from '../../assets/labels';
import { IconButton } from '../buttons';

interface Props extends ComponentProps<'footer'> {
  className?: string;
}

export default function Footer({ className }: Props) {
  return (
    <Styled className={`footer ${className ?? ''}`}>
      <div className="content">
        <div className="content__top">
          <div className="content__top__logo">
            <SVGIconStorefront className="content__top__logo__icon" />
            <SVGLabelNFTMarket className="content__top__logo__label" />
          </div>
          <span className="content__top__description">
            NFT marketplace UI created with Anima for Figma.
          </span>
          <span className="content__top__description">Join our community</span>
          <span className="content__top__sns-group">
            <SVGIconDiscordLogo className="discord" />
            <SVGIconYoutubeLogo className="youtube" />
            <SVGIconTwitterLogo className="twitter" />
            <SVGIconInstagramLogo className="instagram" />
          </span>
        </div>

        <div className="content__middle">
          <span className="content__middle__title">Explore</span>
          <a className="content__middle__link">Marketplace</a>
          <a className="content__middle__link">Rankings</a>
          <a className="content__middle__link">Connect a wallet</a>
        </div>

        <div className="content__bottom">
          <span className="content__bottom__title">Join Our Weekly Digest</span>
          <span className="content__bottom__description">
            Get exclusive promotions & updates straight to your inbox.
          </span>
          <IconButton className="content__bottom__btn" leftIcon="envelope">
            Subscribe
          </IconButton>
        </div>
      </div>

      <span className="copywrite">Ⓒ NFT Market. Use this template freely.</span>
    </Styled>
  );
}

const Styled = styled.footer<Props>`
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  .content {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    &__top {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      &__logo {
        display: flex;
        align-items: center;
        column-gap: 12px;
        &__icon {
          path {
            fill: ${({ theme }) => theme.colors.callToAction};
          }
        }
        &__label {
          position: relative;
          top: 2px;
        }
      }
      &__description {
        ${({ theme }) => theme.fonts.fontBase('work-sans')}
        color: #cccccc;
      }
      &__sns-group {
        display: flex;
        column-gap: 10px;
        cursor: pointer;
        svg {
          stroke: ${({ theme }) => theme.colors.caption};
          stroke-width: 0;
          path {
            fill: ${({ theme }) => theme.colors.caption};
            stroke: ${({ theme }) => theme.colors.caption};
          }
          &.twitter path {
            fill: none;
          }
        }
      }
    }

    &__middle {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      &__title {
        ${({ theme }) => theme.fonts.fontH5('space-mono')};
        color: #ffffff;
      }
      &__link {
        ${({ theme }) => theme.fonts.fontBase('work-sans')};
        color: #cccccc;
        cursor: pointer;
      }
    }

    &__bottom {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      &__title {
        ${({ theme }) => theme.fonts.fontH5('space-mono')};
        color: #ffffff;
      }
      &__description {
        ${({ theme }) => theme.fonts.fontBase('work-sans')};
        color: #cccccc;
      }
      &__btn {
        height: 46px;
        svg {
          width: 20px;
        }
        span {
          ${({ theme }) => theme.fontStyles['work-sans-semi-bold']};
          font-size: 16px;
          line-height: 1.4;
        }
      }
    }
  }
  .copywrite {
    height: 32px;
    display: inline-block;
    border-top: 1px solid;
    border-top-color: ${({ theme }) => theme.colors.caption};
    ${({ theme }) => theme.fonts.fontCaption('work-sans')}
    color: #cccccc;
    display: flex;
    align-items: flex-end;
  }
`;
