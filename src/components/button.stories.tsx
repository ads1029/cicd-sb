import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
  title: 'Components/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'A button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Another button',
    variant: 'secondary',
  },
};