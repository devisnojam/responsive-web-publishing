import type { Meta, StoryObj } from '@storybook/react';

import NFTCard from './nft-card';

const NFTCardMeta = {
  title: 'ui/card/NFTCard',
  component: NFTCard,
  parameters: {
    // layout: 'fullscreen',
  },
} satisfies Meta<typeof NFTCard>;

export default NFTCardMeta;

type NFTCardStory = StoryObj<typeof NFTCardMeta>;

export const nftCardBase: NFTCardStory = {
  name: 'base',
  args: {},
};
