import type { Meta, StoryObj } from "@storybook/react-vite";
import { CodeSnippet } from "../components/CodeSnippet/CodeSnippet";

const meta = {
  component: CodeSnippet,
} satisfies Meta<typeof CodeSnippet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CodeSnippetExample: Story = {
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "dark"],
    },
    size: {
      control: "inline-radio",
      options: ["default", "sm", "lg"],
    },
  },

  //Default Value for the Component
  args: {
    children: 'console.log("Hello, world!")',
    variant: "default",
    size: "default",
  },
};
