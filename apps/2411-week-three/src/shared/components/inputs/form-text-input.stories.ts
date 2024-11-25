import type { Meta, StoryObj } from '@storybook/react';

import { FormTextInput } from '.';

const Meta = {
  title: 'ui/input/FormTextInput',
  component: FormTextInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FormTextInput>;

export default Meta;

type Story = StoryObj<typeof Meta>;

export const Base: Story = {
  name: 'base',
  args: {
    width: '330px',
    leftIcon: 'user',
    rightIcon: 'eyeSlash',
    inputProps: {
      type: 'text',
      placeholder: 'Username',
    },
  },
};

export const FullWidth: Story = {
  name: 'full width',
  parameters: {
    layout: 'full',
  },
  args: {
    leftIcon: 'user',
    rightIcon: 'eyeSlash',
    inputProps: {
      type: 'text',
      placeholder: 'Username',
    },
  },
};

export const NoRightIcon: Story = {
  name: 'no right icon',
  args: {
    width: '330px',
    leftIcon: 'user',
    inputProps: {
      type: 'text',
      placeholder: 'Username',
    },
  },
};

export const NoLeftIcon: Story = {
  name: 'no left icon',
  args: {
    width: '330px',
    rightIcon: 'eyeSlash',
    inputProps: {
      type: 'text',
      placeholder: 'Username',
    },
  },
};
