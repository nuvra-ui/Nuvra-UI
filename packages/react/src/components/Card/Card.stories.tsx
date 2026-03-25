import type { Meta, StoryObj } from "@storybook/react";

import { Card, CardContent, CardHeader, CardFooter } from "./Card";

const meta = {
  component: Card,
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: (args) => (
    <>
      <Card {...args}>
        <CardHeader>CardHeader</CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          vestibulum laoreet nulla, et ultrices ante suscipit non. Vivamus
          mollis arcu porttitor sapien gravida bibendum. Duis scelerisque
          egestas est sit amet
        </CardContent>
        <CardFooter>CardFooter</CardFooter>
      </Card>
    </>
  ),
};
