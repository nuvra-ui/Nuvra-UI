import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "../components/Link/Link";

const meta = {
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonExample: Story = {
  args: {
    children: "Link",
  },
  argTypes: {
    children: {
      control: "text",
    },
  },
};
