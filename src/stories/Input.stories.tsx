import type { Meta, StoryObj } from '@storybook/react';

import Input from '../input/Input';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    big: false,
    placeholder: "enter some text",
    label: 'enter some text'
  },
};

export const Secondary: Story = {
  args: {
    big: false,
    placeholder: "enter some text",
    label: 'enter some text'
  },
};

export const Large: Story = {
  args: {
    big: true,
    placeholder: "enter some text",
    label: 'enter some text'
  },
};


