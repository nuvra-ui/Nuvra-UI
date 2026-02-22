import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "./Textarea";

const meta = {
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
