import type { Meta, StoryObj } from '@storybook/react';

import RectImageBox from './rect-image-box';

const RectImageBoxMeta = {
  title: 'ui/rect-box/RectImageBox',
  component: RectImageBox,
  parameters: {
    // layout: 'fullscreen',
  },
} satisfies Meta<typeof RectImageBox>;

export default RectImageBoxMeta;

type RectImageBoxStory = StoryObj<typeof RectImageBoxMeta>;

export const RectImageBoxDefault: RectImageBoxStory = {
  name: 'width-default',
  args: {},
};

export const RectImageBoxWidth300: RectImageBoxStory = {
  name: 'width-300px',
  args: {
    width: '300px',
  },
};
