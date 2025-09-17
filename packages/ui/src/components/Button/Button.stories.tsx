import type { Meta, StoryObj } from '@storybook/react';
import { Mail } from 'lucide-react';

import { Button } from './Button';

const VARIANTS = [
  'default',
  'destructive',
  'outline',
  'secondary',
  'ghost',
  'link',
] as const;

const SIZES = ['default', 'sm', 'lg', 'icon'] as const;

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
  argTypes: {
    variant: {
      options: VARIANTS,
      control: { type: 'select' },
    },
    size: {
      options: SIZES,
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Edit',
  },
};

export const WithIcon: Story = {
  args: {
    size: 'sm',
  },
  render: (args) => (
    <Button {...args}>
      <Mail aria-hidden="true" className="size-4" />
      Inbox
    </Button>
  ),
};

export const IconButton: Story = {
  args: {
    size: 'icon',
    children: <Mail aria-hidden="true" className="size-4" />,
  },
};
