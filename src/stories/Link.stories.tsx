import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "../Link/Link";

const meta = {
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LinkExample: Story = {
  args: {
    children: "Link",
  },
  argTypes: {
    children: {
      control: "text",
    },
  },
};
