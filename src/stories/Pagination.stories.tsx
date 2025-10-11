import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../components/Pagination/Pagination";

const meta = {
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PaginationExample: Story = {
  args: {},

  render: (args) => (
    <>
      <Pagination {...args}>
        <PaginationContent>
          <PaginationItem>Hello World</PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  ),
};
