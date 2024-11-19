import type { Meta, StoryObj } from '@storybook/react';

import ArtistCard from './artist-card';

const ArtistCardMeta = {
  title: 'ui/card/ArtistCard',
  component: ArtistCard,
  parameters: {
    // layout: 'fullscreen',
  },
} satisfies Meta<typeof ArtistCard>;

export default ArtistCardMeta;

type Story = StoryObj<typeof ArtistCardMeta>;

export const Default: Story = {
  name: 'base(default)',
  args: {
    direction: 'v',
    ranking: 1,
  },
};

export const HorizontalSmall: Story = {
  name: 'horizontal-small',
  args: {
    direction: 'h',
    size: 'sm',
  },
};

export const HorizontalMedium: Story = {
  name: 'horizontal-medium',
  args: {
    direction: 'h',
    size: 'm',
  },
};

export const HorizontalLarge: Story = {
  name: 'horizontal-large',
  args: {
    direction: 'h',
    size: 'lg',
  },
};
