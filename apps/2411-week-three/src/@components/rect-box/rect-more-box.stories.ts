import type { Meta, StoryObj } from '@storybook/react';

import RectMoreBox from './rect-more-box';

const RectMoreBoxMeta = {
  title: 'ui/rect-box/RectMoreBox',
  component: RectMoreBox,
  parameters: {
    // layout: 'fullscreen',
  },
} satisfies Meta<typeof RectMoreBox>;

export default RectMoreBoxMeta;

type RectMoreBoxStory = StoryObj<typeof RectMoreBoxMeta>;

export const RectMoreBoxDefault: RectMoreBoxStory = {
  name: 'width-default',
  args: {},
};

export const RectMoreBoxWidth300: RectMoreBoxStory = {
  name: 'width-300px',
  args: {
    width: '300px',
    backgroundColor: 'rgba(162, 89, 255, 1)',
    fontColor: '#fff',
    more: 99999,
  },
};
