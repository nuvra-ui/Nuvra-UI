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
    template: "<Button v-bind='args'>Button</Button>", // 'todo' - https://storybook.js.org/addons/storybook-addon-vue-slots
  }),

  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "ghost"],
    },
    size: {
      control: "inline-radio",
      options: ["default", "sm", "lg", "icon"],
    },
  },

  //default values
  args: {
    variant: "default",
    size: "default",
  },
};
