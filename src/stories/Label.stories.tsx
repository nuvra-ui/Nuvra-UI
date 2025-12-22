import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "../Label/Label";
import { Input } from "../Input/Input";

const meta = {
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelExample: Story = {
  args: {
    children: "Label",
  },

  render: (args) => (
    <>
      <Label {...args} htmlFor="Input">
        {args.children}
      </Label>
      <Input placeholder="Placeholder" id="Input" />
    </>
  ),
};
