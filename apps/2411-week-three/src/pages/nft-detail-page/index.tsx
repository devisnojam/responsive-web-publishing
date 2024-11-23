import styled from '@emotion/styled';

import NFTDetailInfoSection from './components/nft-detail-info';
import { IconButton } from '../../shared/components/buttons';
import NFTCard from '../../shared/components/cards/nft-card';
import Layout from '../../shared/components/layout';

export default function NFTDetailPage() {
  return (
    <div className="page-container">
      <Layout.Header />
      <BackgroundImgView />
      <NFTDetailInfoSection />
      <NFTOwneredByArtistSection>
        <h4 className="title">More From This Artist</h4>
        <div className="scroll-card-view">
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
`;

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
