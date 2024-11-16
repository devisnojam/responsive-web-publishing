import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import Avatar from '../avatar';

type NFTCard = {
  nftName: string;
  nftThumbImgSrc: string;
  creator: {
    id: string;
    name: string;
    profileImgSrc?: string;
  };
  priceOfEth: number;
  bidOfEth: number;
};

interface Props extends ComponentProps<'div'> {
  className?: string;
}

export default function NFTCard({ className, ...props }: Props) {
  return (
    <Styled className={`nft-card ${className ? className : ''}`} {...props}>
      <img
        className="thumb-img"
        src="/imgs/nft-sample-img-01.jpg"
        alt="image"
      />
      <div className="content">
        <div className="content__nft-info">
          <span className="content__nft-info__name">{`Lift On Edena`}</span>
          <div className="content__nft-info__user-info__profile">
            <Avatar className="content__nft-info__user-info__profile__avatar" />
            <span className="content__nft-info__user-info__profile__name">{`NebulaKid`}</span>
          </div>
        </div>
        <div className="content__price-info">
          <div className="content__price-info__box">
            <span className="content__price-info__box__label">Price</span>
            <span className="content__price-info__box__price">{`${1.63} ETH`}</span>
          </div>
          <div className="content__price-info__box bid">
            <span className="content__price-info__box__label">Highest Bid</span>
            <span className="content__price-info__box__price">{`${1.63} wETH`}</span>
          </div>
        </div>
      </div>
    </Styled>
  );
}

const Styled = styled.div<Props>`
  min-width: 300px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  .thumb-img {
    width: 100%;
    height: 238px;
  }
  .content {
    padding: 20px 20px 25px 20px;
    display: flex;
    flex-direction: column;
    row-gap: 25px;
    &__nft-info {
      display: flex;
      flex-direction: column;
      row-gap: 5px;
      color: #ffffff;
      &__name {
        ${({ theme }) => theme.fonts.fontH5('work-sans')}
      }
      &__user-info__profile {
        display: flex;
        column-gap: 12px;
        &__avatar {
          width: 24px;
        }
        &__name {
          ${({ theme }) => theme.fonts.fontBase('space-mono')};
          position: relative;
          top: 2px;
        }
      }
    }
    &__price-info {
      display: flex;
      &__box {
        flex: 1;
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        ${({ theme }) => theme.fonts.fontCaption('space-mono')};
        &__label {
          color: #858584;
        }
        &__price {
          color: #ffffff;
        }
        &.bid {
          text-align: right;
        }
      }
    }
  }

  ${({ theme }) => theme.mediaQueryHelper('tablet')} {
    .thumb-img {
      height: 295px;
    }
    .content {
      padding: 20px 30px 25px 30px;
    }
  }
`;
