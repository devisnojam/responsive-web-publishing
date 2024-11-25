import type { Meta, StoryObj } from '@storybook/react';

import Footer from './footer';

const FooterMeta = {
  title: 'ui/layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Footer>;

export default FooterMeta;

type FooterStory = StoryObj<typeof FooterMeta>;

export const Base: FooterStory = {
  name: 'base',
  args: {},
};
