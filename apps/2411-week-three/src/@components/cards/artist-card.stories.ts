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
    varients: 'default',
  },
};
