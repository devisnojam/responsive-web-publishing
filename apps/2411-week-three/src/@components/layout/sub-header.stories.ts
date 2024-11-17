import type { Meta, StoryObj } from '@storybook/react';

import SubHeader from './sub-header';

const SubHeaderMeta = {
  title: 'ui/layout/SubHeader',
  component: SubHeader,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'desktop',
    },
  },
} satisfies Meta<typeof SubHeader>;

export default SubHeaderMeta;

type SubHeaderStory = StoryObj<typeof SubHeaderMeta>;

export const Base: SubHeaderStory = {
  name: 'base',
  args: {},
};
