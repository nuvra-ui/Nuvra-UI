import type { Meta, StoryObj } from "@storybook/vue3-vite";

import Link from "../components/Link.vue";

const meta = {
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LinkExample: Story = {
  render: (args) => ({
    components: { Link },
    setup() {
      return { args };
    },
    template: "<Link v-bind='args'>Link</Link>",
  }),

  argTypes: {
    class: {
      control: "text",
    },
  },
  args: {
    class: "",
  },
};
