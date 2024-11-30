import type { Meta, StoryObj } from '@storybook/react';

import CreateAccountPage from '.';

const Meta = {
  title: 'page/CreateAccountPage',
  component: CreateAccountPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CreateAccountPage>;

export default Meta;

type Story = StoryObj<typeof CreateAccountPage>;

export const Mobile: Story = {
  name: 'breakpoint:mobile',
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
  args: {},
};

export const Tablet: Story = {
  name: 'breakpoint:tablet',
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
  args: {},
};

export const Desktop: Story = {
  name: 'breakpoint:desktop',
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
  args: {},
};
