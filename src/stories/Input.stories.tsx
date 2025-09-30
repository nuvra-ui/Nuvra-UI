import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../components/Input/Input";

const meta = {
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputExample: Story = {
  args: {
    placeholder: "Text Input...",
    type: "text",
  },
};
