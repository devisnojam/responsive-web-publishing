import styled from '@emotion/styled';

import { SVGIconGlobe } from '../../assets/icons';
import AuctionTimer from '../../shared/components/auction-timer';
import { IconButton } from '../../shared/components/buttons';
import { ArtistCard } from '../../shared/components/cards';
import { artistCardHorizontalMediumStyleCSS } from '../../shared/components/cards/artist-card';
import Layout from '../../shared/components/layout';

export default function NFTDetailPage() {
  return (
    <div className="page-container">
      <Layout.Header />
      <BackgroundImgView />
      <NFTDetailInfo>
        <div className="title">
          <span>The Orbitians</span>
          <span className="title__mint">Minted on Sep 30, 2022</span>
        </div>
        <div className="timer">
          <AuctionTimer />
          <IconButton className="timer__btn">Place Bid</IconButton>
        </div>
        <div className="parts created-by">
          <span className="label">Created By</span>
          <ArtistCard className="created-by__artist" direction="h" size="sm" />
        </div>
        <div className="parts description">
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
        <div className="parts details">
          <span className="label">Details</span>
          <ul className="details__link-list">
            <li>
              <a href="#">
                <SVGIconGlobe />
                <span>View on Etherscan</span>
              </a>
            </li>
            <li>
              <a href="#">
                <SVGIconGlobe />
                <span>View Original</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="parts tags">
          <span className="label">Tags</span>
          <div className="tags__btn-group">
            <IconButton>{'Animation'.toUpperCase()}</IconButton>
            <IconButton>{'illustration'.toUpperCase()}</IconButton>
            <IconButton>{'MOON'.toUpperCase()}</IconButton>
            <IconButton>{'MOON'.toUpperCase()}</IconButton>
          </div>
        </div>
      </NFTDetailInfo>
      <Layout.Footer />
    </div>
  );
}

const BackgroundImgView = styled.section`
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
  padding: 40px 8%;
  display: grid;
  grid-template-areas:
    'grid-title'
    'grid-timer'
    'grid-created-by'
    'grid-description'
    'grid-details'
    'grid-tags';
  row-gap: 20px;

  .parts {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
  .label {
    color: #858584;
    ${({ theme }) => theme.fonts.fontBase('space-mono')};
  }

  .title {
    grid-area: 'grid-title';
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    span {
      color: #ffffff;
      ${({ theme }) => theme.fonts.fontH4('work-sans')};
      &__mint {
        color: ${({ theme }) => theme.colors.caption};
        ${({ theme }) => theme.fonts.fontBase('work-sans')};
      }
    }
  }
  .timer {
    grid-area: grid-timer;
    margin: 0 auto;
    height: fit-content;
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
    grid-area: grid-created-by;
    &__artist {
      padding: 0;
      background-color: transparent;
    }
  }
  .description {
    grid-area: grid-description;
    .content {
      color: #ffffff;
      ${({ theme }) => theme.fonts.fontBase('work-sans')};
      white-space: pre-wrap;
    }
  }
  .details {
    grid-area: grid-details;
    &__link-list {
      li:nth-of-type(1) {
        margin-bottom: 10px;
      }
      a {
        display: flex;
        align-items: center;
        column-gap: 10px;
      }
      svg {
        width: 24px;
        height: 24px;
      }
      svg path {
        fill: ${({ theme }) => theme.colors.caption};
      }
      span {
        ${({ theme }) => theme.fonts.fontBase('work-sans')};
        color: #ffffff;
        position: relative;
        top: 2px;
      }
    }
  }
  .tags {
    grid-area: grid-tags;
    row-gap: 20px;
    &__btn-group {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      button {
        width: fit-content;
        height: 46px;
        padding: 0 30px;
        color: #ffffff;
        background-color: ${({ theme }) => theme.colors.backgroundSecondary};
      }
    }
  }

  ${({ theme }) => theme.mediaQueryHelper('tablet')} {
    padding: 40px 8.63309%;
    column-gap: 30px;
    grid-template-areas:
      'grid-title grid-timer'
      'grid-created-by grid-timer'
      'grid-description grid-timer'
      'grid-details .'
      'grid-tags .';
    grid-template-columns: 1fr 295px;
  }

  ${({ theme }) => theme.mediaQueryHelper('desktop')} {
    padding: 40px 115px;
    column-gap: 150px;
    .created-by__artist {
      ${artistCardHorizontalMediumStyleCSS}
    }
    .tags__btn-group {
      flex-direction: row;
      column-gap: 20px;
    }
  }
`;
