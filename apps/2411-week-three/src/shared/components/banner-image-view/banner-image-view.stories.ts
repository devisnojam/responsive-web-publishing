import type { Meta, StoryObj } from '@storybook/react';

import BannerImageView from '.';

const Meta = {
  title: 'ui/BannerImageView',
  component: BannerImageView,
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'mobile',
    },
  },
} satisfies Meta<typeof BannerImageView>;

export default Meta;

type Story = StoryObj<typeof Meta>;

export const Base: Story = {
  name: 'base',
  args: {
    imageURL: '/imgs/nft-sample-img-xl.png',
    breakpointHeight: {
      mobile: '320px',
      tablet: '420px',
      desktop: '560px',
    },
  },
};
