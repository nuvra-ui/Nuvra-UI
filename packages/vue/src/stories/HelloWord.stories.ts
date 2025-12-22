import type { Meta, StoryObj } from '@storybook/vue3-vite';

import HelloWorld from '../components/HelloWorld.vue';

const meta = {
  component: HelloWorld,
} satisfies Meta<typeof HelloWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => ({
    components: { HelloWorld },
    setup() {
      return { args };
    },
    template: '<HelloWorld />',
  }),
};