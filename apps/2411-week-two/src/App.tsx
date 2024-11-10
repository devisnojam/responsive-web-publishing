import styled from '@emotion/styled';

import MainBanner from './@shared/components/banner/main-banner';
import { ArtistCard, CommunityCard, NFTCard } from './@shared/components/card';
import Header from './@shared/components/header';

export default function App() {
  return (
    <StyledContainer>
      <Header className="header" />

      <MainBanner className="banner" />

      <section className="featured-nft">
        <span className="title">Featured NFTs</span>
        <div className="card-list">
          <NFTCard
            creators={[
              {
                id: 'abcdef12345',
                name: 'ABCDEF',
                avatarImgSrc: undefined,
                rank: 1,
              },
            ]}
            nftName="test"
            priceOfEth={99999}
          />
          <NFTCard
            creators={[
              {
                id: 'abcdef12345',
                name: 'ABCDEF',
                avatarImgSrc: undefined,
                rank: 1,
              },
            ]}
            nftName="test"
            priceOfEth={99999}
          />
          <NFTCard
            creators={[
              {
                id: 'abcdef12345',
                name: 'ABCDEF',
                avatarImgSrc: undefined,
                rank: 1,
              },
            ]}
            nftName="test"
            priceOfEth={99999}
          />
        </div>
      </section>

      <section className="meet-creator">
        <span className="title">Meet Our Talented Creators</span>
        <div className="card-list">
          <ArtistCard
            creator={{
              id: 'abcdef12345',
              name: 'ABCDEF',
              avatarImgSrc: undefined,
              rank: 1,
            }}
            nftNumber={101010122}
          />
          <ArtistCard
            creator={{
              id: 'abcdef12345',
              name: 'ABCDEF',
              avatarImgSrc: undefined,
              rank: 1,
            }}
            nftNumber={101010122}
          />
          <ArtistCard
            creator={{
              id: 'abcdef12345',
              name: 'ABCDEF',
              avatarImgSrc: undefined,
              rank: 1,
            }}
            nftNumber={101010122}
          />
          <ArtistCard
            creator={{
              id: 'abcdef12345',
              name: 'ABCDEF',
              avatarImgSrc: undefined,
              rank: 1,
            }}
            nftNumber={101010122}
          />
        </div>
      </section>

      <section className="explore">
        <span className="title">Explore</span>
        <span className="description">
          Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus
          facilisi ultrices sed faucibus proin cum ut.
        </span>

        <div className="card-list">
          <NFTCard
            creators={[
              {
                id: 'abcdef12345',
                name: 'ABCDEF',
                avatarImgSrc: undefined,
                rank: 1,
              },
            ]}
            nftName="test"
            priceOfEth={99999}
          />
          <NFTCard
            creators={[
              {
                id: 'abcdef12345',
                name: 'ABCDEF',
                avatarImgSrc: undefined,
                rank: 1,
              },
            ]}
            nftName="test"
            priceOfEth={99999}
          />
          <NFTCard
            creators={[
              {
                id: 'abcdef12345',
                name: 'ABCDEF',
                avatarImgSrc: undefined,
                rank: 1,
              },
            ]}
            nftName="test"
            priceOfEth={99999}
          />
        </div>
      </section>

      <section className="community">
        <CommunityCard />
      </section>

      <img className="bg" src="/imgs/page-bg.png" alt="bg" />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  ${({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',

    '>img.bg': {
      width: '100%',
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: -1,
    },

    '.header': {
      marginBottom: '22px',
    },
    '.banner': {
      marginBottom: '24px',
      button: {
        flex: 1,
      },
    },
    '.featured-nft': {
      marginBottom: '24px',
      color: theme.colors.purple0,
      display: 'flex',
      flexDirection: 'column',
      rowGap: '12px',
      '& .title': {
        fontSize: theme.fonts.h5.size,
        fontWeight: theme.fonts.h5.weight,
      },
      '& .card-list': {
        display: 'grid',
        gridTemplateRows: 'repeat(3, 1fr)',
        rowGap: '12px',
      },
    },
    '.meet-creator': {
      marginBottom: '24px',
      display: 'flex',
      flexDirection: 'column',
      '& .title': {
        fontSize: theme.fonts.base16.size,
        fontWeight: theme.fonts.base16.weight,
      },
      '& .card-list': {
        paddingTop: '24px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        columnGap: '12px',
        rowGap: '24px',
        overflowY: 'scroll',
      },
    },
    '.explore': {
      marginBottom: '24px',
      display: 'flex',
      flexDirection: 'column',
      rowGap: '12px',
      '>span': {
        display: 'inline-block',
        '&.description': {
          fontSize: theme.fonts.base14.size,
          fontWeight: theme.fonts.base14.weight,
        },
      },
      '>.card-list': {
        display: 'grid',
        gridTemplateRows: 'repeat(3, 1fr)',
        rowGap: '12px',
      },
    },
    '.community': {},
  })}

  @media (min-width: ${({ theme }) => theme.breakpoints.device.tablet}) {
    .banner {
      margin-bottom: '24px';
      & .inner {
        width: 415px;
      }
    }

    .featured-nft {
      & .card-list {
        grid-template-rows: unset;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 24px;
      }
    }

    .meet-creator {
      & .card-list {
        padding: 25px;
        grid-template-rows: unset;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 12px;
      }
    }

    .explore {
      & .card-list {
        grid-template-rows: unset;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 24px;
      }
    }
  }
`;
