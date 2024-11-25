import type { Meta, StoryObj } from '@storybook/react';

import MarketplacePage from '.';

const AppMeta = {
  title: 'page/MarketplacePage',
  component: MarketplacePage,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'desktop',
    },
  },
} satisfies Meta<typeof MarketplacePage>;

export default AppMeta;

type AppStory = StoryObj<typeof AppMeta>;

export const Story: AppStory = {
  name: 'base',
  args: {},
};
