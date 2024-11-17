import type { Meta, StoryObj } from '@storybook/react';

import IconButton from './icon-button';

const IconButtonMeta = {
  title: 'ui/buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof IconButton>;

export default IconButtonMeta;

type IconButtonStory = StoryObj<typeof IconButtonMeta>;

export const Base: IconButtonStory = {
  name: 'base',
  args: {
    size: 'primary',
    leftIcon: 'envelope',
    children: 'Enter!',
  },
};

export const Outline: IconButtonStory = {
  name: 'outline',
  args: {
    size: 'primary',
    varients: 'outline',
    leftIcon: 'envelope',
    children: 'Enter!',
  },
};
