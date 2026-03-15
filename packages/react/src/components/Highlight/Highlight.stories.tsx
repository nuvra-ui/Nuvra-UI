import type { Meta, StoryObj } from "@storybook/react";

import { Highlight } from "./Highlight";

const meta = {
  component: Highlight,
} satisfies Meta<typeof Highlight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: "Highlight",
  },
};
