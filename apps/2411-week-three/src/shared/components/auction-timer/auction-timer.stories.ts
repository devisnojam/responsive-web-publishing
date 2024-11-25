import type { Meta, StoryObj } from '@storybook/react';

import AuctionTimer from '.';

const AuctionTimerMeta = {
  title: 'ui/AuctionTimer',
  component: AuctionTimer,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AuctionTimer>;

export default AuctionTimerMeta;

type Story = StoryObj<typeof AuctionTimerMeta>;

export const Base: Story = {
  name: 'base',
  args: {},
};
