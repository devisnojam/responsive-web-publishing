import type { Meta, StoryObj } from '@storybook/react';

import CollectionCard from './collection-card';

const CollectionCardMeta = {
  title: 'ui/card/CollectionCard',
  component: CollectionCard,
  parameters: {
    // layout: 'fullscreen',
  },
} satisfies Meta<typeof CollectionCard>;

export default CollectionCardMeta;

type CollectionCardStory = StoryObj<typeof CollectionCardMeta>;

export const collectionCardBase: CollectionCardStory = {
  name: 'base',
  args: {},
};
