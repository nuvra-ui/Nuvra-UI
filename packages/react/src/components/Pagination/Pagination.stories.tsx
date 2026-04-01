import type { Meta, StoryObj } from "@storybook/react";

import {
  Pagination,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from "./Pagination";

const meta = {
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: (args) => (
    <Pagination {...args}>
      <PaginationPrevTrigger />
      <PaginationItem>1</PaginationItem>
      <PaginationItem>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
      <PaginationItem>4</PaginationItem>
      <PaginationItem>5</PaginationItem>
      <PaginationItem>6</PaginationItem>
      <PaginationNextTrigger />
    </Pagination>
  ),
};
