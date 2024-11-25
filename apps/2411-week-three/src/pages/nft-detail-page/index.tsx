import styled from '@emotion/styled';

import NFTDetailInfoSection from './components/nft-detail-info';
import BannerImageView from '../../shared/components/banner-image-view';
import { IconButton } from '../../shared/components/buttons';
import NFTCard from '../../shared/components/cards/nft-card';
import Layout from '../../shared/components/layout';

export default function NFTDetailPage() {
  return (
    <div className="page-container">
      <Layout.Header />
      <BannerImageView
        imageURL={'/imgs/nft-sample-img-xl.png'}
        breakpointHeight={{
          mobile: '320px',
          tablet: '420px',
          desktop: '560px',
        }}
      />
      <NFTDetailInfoSection />
      <NFTOwneredByArtistSection>
        <h4 className="title">More From This Artist</h4>
        <div className="scroll-card-view scrollable-container">
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
        </div>
        <IconButton className="btn" varients="outline" leftIcon="r-arrow">
          Go To Artist Page
        </IconButton>
      </NFTOwneredByArtistSection>
      <Layout.Footer />
    </div>
  );
}

const NFTOwneredByArtistSection = styled.section`
  padding: 40px 30px;
  display: grid;
  grid-template-areas:
    'title'
    'scroll-card-view'
    'btn';
  row-gap: 30px;
  .title {
    grid-area: title;
    ${({ theme }) => theme.fonts.fontH4('work-sans')};
    color: #ffffff;
    text-align: center;
  }
  .scroll-card-view {
    grid-area: scroll-card-view;
    max-height: 968px;
    overflow-y: scroll;
    display: grid;
    grid-auto-rows: max-content; // REVIEW grid-auto-rows 사용법
    row-gap: 30px;
    .nft-card .content {
      background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    }
  }
  .btn {
    grid-area: btn;
    height: 60px;
  }

  ${({ theme }) => theme.mediaQueryHelper('tablet')} {
    padding: 40px 72px;
    grid-template-areas:
      'title btn'
      'scroll-card-view scroll-card-view';
    grid-template-columns: repeat(2, 1fr);
    .title {
      width: 100%;
      text-align: left;
    }
    .scroll-card-view {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 60px;
      column-gap: 30px;
    }
    .btn {
      width: 272px;
      justify-self: flex-end;
    }
  }

  ${({ theme }) => theme.mediaQueryHelper('desktop')} {
    .scroll-card-view {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
