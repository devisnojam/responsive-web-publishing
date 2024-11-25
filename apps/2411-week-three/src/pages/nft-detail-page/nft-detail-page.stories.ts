import type { Meta, StoryObj } from '@storybook/react';

import NFTDetailPage from '.';

const NFTDetailPageMeta = {
  title: 'page/NFTDetailPage',
  component: NFTDetailPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NFTDetailPage>;

export default NFTDetailPageMeta;

type Story = StoryObj<typeof NFTDetailPageMeta>;

export const Mobile: Story = {
  name: 'breakpoint:mobile',
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
  args: {},
};

export const Tablet: Story = {
  name: 'breakpoint:tablet',
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
  args: {},
};

export const Desktop: Story = {
  name: 'breakpoint:desktop',
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
  args: {},
};
