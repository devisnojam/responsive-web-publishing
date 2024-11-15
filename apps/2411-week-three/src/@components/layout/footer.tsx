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
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 40px calc(30 / 375 * 100%);
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

  ${({ theme }) => theme.mediaQueryHelper('tablet')} {
    min-width: 690px;
    padding: 40px calc(72 / 834 * 100%);
    row-gap: 49px;
    .content__top__sns-group {
      margin-top: -10px;
    }
  }

  ${({ theme }) => theme.mediaQueryHelper('desktop')} {
    min-width: 1049.41px;
    padding: 40px calc(195 / 1439.41 * 100%);
    .content {
      flex-direction: row;
      column-gap: auto;
      justify-content: space-between;
      &__top {
        box-sizing: border-box;
        width: calc(327.41px);
        padding-right: 85px;
        row-gap: 20px;
        &__logo {
          margin-bottom: 10px;
        }
        &__description {
          width: 220px;
        }
      }
      &__middle {
        width: 240px;
        &__title {
          margin-bottom: 10px;
        }
      }
      &__bottom {
        width: 420px;
        &__title {
          margin-bottom: 10px;
        }
        &__description {
          width: 280px;
        }
      }
    }
  }
`;
