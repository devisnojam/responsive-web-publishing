import styled from '@emotion/styled';

import NFTDetailInfoSection from './components/nft-detail-info';
import Layout from '../../shared/components/layout';

export default function NFTDetailPage() {
  return (
    <div className="page-container">
      <Layout.Header />
      <BackgroundImgView />
      <NFTDetailInfoSection />
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
