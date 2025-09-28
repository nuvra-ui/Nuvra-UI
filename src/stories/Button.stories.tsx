import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "../components/Button/Button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonExample: Story = {
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "link"],
    },
    size: {
      control: "inline-radio",
      options: ["default"],
    },
    children: {
      control: "text",
    },
  },
};
