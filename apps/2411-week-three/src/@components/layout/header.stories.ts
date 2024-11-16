import type { Meta, StoryObj } from '@storybook/react';

import Header from './header';

const HeaderMeta = {
  title: 'ui/layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default HeaderMeta;

type HeaderStory = StoryObj<typeof HeaderMeta>;

export const Base: HeaderStory = {
  name: 'base',
  args: {},
};
