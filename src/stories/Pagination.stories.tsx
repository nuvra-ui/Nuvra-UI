import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "../components/Pagination/Pagination";

const meta = {
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PaginationExample: Story = {
  args: {},

  render: (args) => (
    <>
      <Pagination {...args} />
    </>
  ),
};
