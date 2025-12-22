import type { Preview } from "@storybook/react-vite";
import "../src/tailwind.css";
import "../src/styles/global.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
