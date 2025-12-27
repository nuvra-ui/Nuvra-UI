import type { Meta, StoryObj } from "@storybook/vue3-vite";

import Button from "../components/Button.vue";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonExample: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: "<Button size='lg' variant='default'>Button</Button>",
  }),
};
