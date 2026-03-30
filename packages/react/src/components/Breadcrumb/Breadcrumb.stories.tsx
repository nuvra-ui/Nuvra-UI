import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator } from "./Breadcrumb";

const meta = {
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>Item1</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>Item2</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem currentItem={true}>Item3</BreadcrumbItem>
    </Breadcrumb>
  ),
};
