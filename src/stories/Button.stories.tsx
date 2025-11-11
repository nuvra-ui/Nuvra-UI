import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button/Button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonExample: Story = {
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "ghost"],
    },
    size: {
      control: "inline-radio",
      options: ["default", "sm", "lg", "icon"],
    },
    children: {
      control: "text",
    },
  },
};
