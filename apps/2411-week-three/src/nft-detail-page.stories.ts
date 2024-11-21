import type { Meta, StoryObj } from '@storybook/react';

import NFTDetailPage from './nft-detail-page';

const AppMeta = {
  title: 'page/NFTDetail',
  component: NFTDetailPage,
  parameters: {
    layout: 'fullscreen',
    // viewport: {
    //   defaultViewport: 'tablet',
    // },
  },
} satisfies Meta<typeof NFTDetailPage>;

export default AppMeta;

type AppStory = StoryObj<typeof AppMeta>;

export const Story: AppStory = {
  name: 'base',
  args: {},
};
