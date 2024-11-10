import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import MainBanner from './@shared/components/banner/main-banner';
import { IconButton } from './@shared/components/buttons';
import { ArtistCard, CommunityCard, NFTCard } from './@shared/components/card';
import Header from './@shared/components/header';

export default function App() {
  const theme = useTheme();
  return (
    <FlexBox
      direction="column"
      gap={24}
      style={{ backgroundColor: theme.colors.nuteral3 }}
    >
      <FlexBox direction="row" gap={24}>
        <IconButton leftIcon="diamond" rightIcon="arrow-r">
          Button
        </IconButton>
        <IconButton leftIcon="diamond">Button</IconButton>
        <IconButton rightIcon="arrow-r">Button</IconButton>
        <IconButton>Button</IconButton>
      </FlexBox>

      <FlexBox direction="row" gap={24}>
        <IconButton varients="outline" leftIcon="diamond" rightIcon="arrow-r">
          Button
        </IconButton>
        <IconButton varients="outline" leftIcon="diamond">
          Button
        </IconButton>
        <IconButton varients="outline" rightIcon="arrow-r">
          Button
        </IconButton>
        <IconButton varients="outline">Button</IconButton>
      </FlexBox>

      <FlexBox direction="row" gap={24}>
        <Header />
      </FlexBox>

      <FlexBox direction="row" gap={24}>
        <MainBanner />
      </FlexBox>

      <FlexBox direction="row" gap={24}>
        <CommunityCard />
      </FlexBox>

      <FlexBox direction="row" gap={24}>
        <NFTCard
          nftName="Name of Artwork"
          creators={[
            {
              id: 'abcdef12345',
              name: 'ABCDEF',
              avatarImgSrc: undefined,
              rank: 1,
            },
            {
              id: 'qwerty12345',
              name: 'QWERTY',
              avatarImgSrc: undefined,
              rank: 2,
            },
          ]}
          priceOfEth={1000}
        />
      </FlexBox>

      <GridBox>
        <ArtistCard
          creator={{
            id: 'abcdef12345',
            name: 'ABCDEF',
            avatarImgSrc: undefined,
            rank: 1,
          }}
          nftNumber={99999991020}
        />
        <ArtistCard
          creator={{
            id: 'abcdef12345',
            name: 'ABCDEF',
            avatarImgSrc: undefined,
            rank: 1,
          }}
          nftNumber={99999991020}
        />
        <ArtistCard
          creator={{
            id: 'abcdef12345',
            name: 'ABCDEF',
            avatarImgSrc: undefined,
            rank: 1,
          }}
          nftNumber={99999991020}
        />
        <ArtistCard
          creator={{
            id: 'abcdef12345',
            name: 'ABCDEF',
            avatarImgSrc: undefined,
            rank: 1,
          }}
          nftNumber={99999991020}
        />
        <ArtistCard
          creator={{
            id: 'abcdef12345',
            name: 'ABCDEF',
            avatarImgSrc: undefined,
            rank: 1,
          }}
          nftNumber={99999991020}
        />
        <ArtistCard
          creator={{
            id: 'abcdef12345',
            name: 'ABCDEF',
            avatarImgSrc: undefined,
            rank: 1,
          }}
          nftNumber={99999991020}
        />
      </GridBox>
    </FlexBox>
  );
}

const FlexBox = styled.div<{
  width?: string;
  direction: 'row' | 'column';
  gap: number;
}>`
  width: ${({ width }) => (width ? width : 'auto')};
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap}px;
`;

const GridBox = styled.div<ComponentProps<'div'>>`
  padding: 20px;
  display: grid;

  // case 1
  /* width: 100%; */
  /* grid-template-columns: repeat(6, 1fr); */

  // case 2
  width: 370px;
  height: 370px;
  overflow-y: scroll;
  grid-template-columns: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
