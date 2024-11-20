import styled from '@emotion/styled';

import AuctionTimer from './@components/auction-timer';
import { IconButton } from './@components/buttons';
import { ArtistCard } from './@components/cards';
import Layout from './@components/layout';

export default function NFTDetailPage() {
  return (
    <div className="page-container">
      <Layout.Header />
      <ScreenImg />
      <NFTDetailInfo>
        <div className="title">
          <span>The Orbitians</span>
          <span className="mint">Minted on Sep 30, 2022</span>
        </div>
        <div className="timer">
          <AuctionTimer />
          <IconButton className="timer__btn">Place Bid</IconButton>
        </div>
        <div className="created-by">
          <span className="label">Created By</span>
          <ArtistCard className="created-by__artist" direction="h" size="sm" />
        </div>
        <div className="description">
          <span className="label">Description</span>
          <span className="content">
            {'The Orbitians is a collection of 10,000 unique NFTs on the Ethereum ' +
              'blockchain, \n\nThere are all sorts of beings in the NFT Universe. The' +
              'most advanced and friendly of the bunch are Orbitians. \n\nThey live' +
              'in a metal space machines, high up in the sky and only have one foot' +
              'on Earth. These Orbitians are a peaceful race, but they have been at' +
              'war with a group of invaders for many generations. The invaders are' +
              'called Upside-Downs, because of their inverted bodies that live on' +
              'the ground, yet do not know any other way to be. Upside-Downs' +
              'believe that they will be able to win this war if they could only' +
              "get an eye into Orbitian territory, so they've taken to make human" +
              'beings their target.'}
          </span>
        </div>
        <div className="details">
          <span className="label">Details</span>
        </div>
        <div className="tags">
          <span className="label">Tags</span>
        </div>
      </NFTDetailInfo>
      <Layout.Footer />
    </div>
  );
}

const ScreenImg = styled.img`
  width: 100%;
  height: 320px;
  background-image: url('/imgs/nft-sample-img-xl.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${({ theme }) => theme.mediaQueryHelper('tablet')} {
    height: 420px;
  }
  ${({ theme }) => theme.mediaQueryHelper('desktop')} {
    height: 560px;
  }
`;

const NFTDetailInfo = styled.div`
  padding: 40px 30px;
  display: grid;
  grid-template-areas:
    'grid-title'
    'grid-timer'
    'grid-created-by'
    'grid-description'
    'grid-details'
    'grid-tags';
  row-gap: 20px;
  .title {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    span {
      color: #ffffff;
      ${({ theme }) => theme.fonts.fontH4('work-sans')};
      &.mint {
        color: ${({ theme }) => theme.colors.caption};
        ${({ theme }) => theme.fonts.fontBase('work-sans')};
      }
    }
  }
  .timer {
    padding: 30px 30px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    .auction-timer {
      padding: 0;
    }
    .clock {
      justify-content: space-between;
    }
    &__btn {
      height: 60px;
    }
  }
  .created-by {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    &__artist {
      padding: 0;
      background-color: transparent;
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    .content {
      color: #ffffff;
      ${({ theme }) => theme.fonts.fontBase('work-sans')};
      white-space: pre-wrap;
    }
  }
  .label {
    color: #858584;
    ${({ theme }) => theme.fonts.fontBase('space-mono')};
  }
`;
