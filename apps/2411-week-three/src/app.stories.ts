import type { Meta, StoryObj } from '@storybook/react';

import App from './App';

const AppMeta = {
  title: 'ui/layout/App',
  component: App,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'desktop',
    },
  },
} satisfies Meta<typeof App>;

export default AppMeta;

type AppStory = StoryObj<typeof AppMeta>;

export const Base: AppStory = {
  name: 'base',
  args: {},
};
