import type { Meta, StoryObj } from '@storybook/react';

import Avatar from './index';

const AvatarMeta = {
  title: 'ui/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default AvatarMeta;

type AvatarStory = StoryObj<typeof AvatarMeta>;

export const Base: AvatarStory = {
  name: 'base',
  args: {
    width: '50px',
  },
};
