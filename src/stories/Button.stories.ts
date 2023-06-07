import type { Meta, StoryObj } from '@storybook/react';

import Button from '../button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'black',
    children: 'click me'
  },
};

export const Secondary: Story = {
  args: {
    color: 'red',
    children: 'click me'
  },
};

export const Large: Story = {
  args: {
    color: 'black',
    big: true,
    children: 'click me'
  },
};

export const Small: Story = {
  args: {
    color: 'black',
    big: false,
    children: 'click me'
  },
};

