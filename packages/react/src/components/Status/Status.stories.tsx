import type { Meta, StoryObj } from "@storybook/react";

import { Status } from "./Status";

const meta = {
  component: Status,
} satisfies Meta<typeof Status>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
