import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { Input } from "./input";

const meta = {
  title: "Component/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
