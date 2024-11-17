import styled from '@emotion/styled';

import { CollectionCard } from './@components/cards';
import NFTCard from './@components/cards/nft-card';
import Layout from './@components/layout';

export default function App() {
  return (
    <Styled>
      <Layout.Header />
      <Layout.SubHeader />
      <div className="tabs">
        <div className="tabs__header">
          <div className="tabs__header__item nfts">
            <span>NFTs</span>
          </div>
          <div className="tabs__header__item collections">
            <span>Collections</span>
          </div>
        </div>
        <div className="tabs__container">
          <div className="tabs_container__panel nfts">
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
          <div className="tabs_container__panel collections">
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
          </div>
        </div>
      </div>
      <Layout.Footer />
    </Styled>
  );
}

const Styled = styled.div`
  .tabs {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__header {
      box-sizing: border-box;
      padding: 0 30px;
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      &__item {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        ${({ theme }) => theme.fontStyles['work-sans-semi-bold']};
        font-size: 16px;
        line-height: 1.4;
        color: #858584;
        cursor: pointer;
        &:first-of-type {
          color: #fff;
          border-bottom: 2px solid #fff;
        }
      }
    }
    &__container {
      background-color: ${({ theme }) => theme.colors.backgroundSecondary};
      box-sizing: border-box;
      padding: 30px 40px 30px 40px;
      width: 100%;
      max-height: 800px;
      overflow-y: scroll;
    }
    .tabs_container__panel {
      display: grid;
      grid-template-rows: repeat(5, 1fr);
      row-gap: 30px;
      &.collections {
        display: none;
      }
    }
  }

  ${({ theme }) => theme.mediaQueryHelper('tablet')} {
    .tabs__container {
      padding: 80px 77px;
    }
    .tabs_container__panel {
      display: grid;
      grid-template-rows: repeat(5, 1fr);
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
      &.collections {
        display: none;
      }
    }
  }

  ${({ theme }) => theme.mediaQueryHelper('desktop')} {
    .tabs__container {
      padding: 80px 115px;
    }
    .tabs_container__panel {
      display: grid;
      grid-template-rows: repeat(5, 1fr);
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      &.collections {
        display: none;
      }
    }
  }
`;
