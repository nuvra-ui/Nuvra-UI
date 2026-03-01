import type { Meta, StoryObj } from "@storybook/react";

import { PinInput } from "./PinInput";

const meta = {
  component: PinInput,
} satisfies Meta<typeof PinInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
