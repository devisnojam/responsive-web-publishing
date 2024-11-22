import type { Meta, StoryObj } from '@storybook/react';

import NFTDetailPage from '.';

const AppMeta = {
  title: 'page/NFTDetailPage',
  component: NFTDetailPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NFTDetailPage>;

export default AppMeta;

type AppStory = StoryObj<typeof AppMeta>;

export const Story: AppStory = {
  name: 'base',
  args: {},
};
