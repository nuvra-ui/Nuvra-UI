import { defineConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "content",
  appearance: false,

  title: "Nuvra-UI",
  description: "Build flexible, unstyled components - your design, your way.",
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },
  vite: {
    plugins: [groupIconVitePlugin()],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Components", link: "/" },
      { text: "Contributing", link: "/" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is Nuvra-UI?", link: "/" },
          { text: "Getting Started", link: "/introduction/getting-started" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/nuvra-ui" }],
  },
});
