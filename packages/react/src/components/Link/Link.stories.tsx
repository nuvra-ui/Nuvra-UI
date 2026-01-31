import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "./Link";

const meta = {
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: "Link",
  },
};
