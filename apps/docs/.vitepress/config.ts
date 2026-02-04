import { defineConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "content",
  appearance: false,

  title: "Nuvra-UI | Docs",
  description: "Build flexible, unstyled components - your design, your way.",

  head: [["link", { rel: "icon", href: "/NuvraUILogo.svg" }]],

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

    logo: "/NuvraUILogo.svg",

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
      {
        text: "Components",
        collapsed: true,
        items: [
          { text: "Component Gallery", link: "/components/component-gallery" },
          { text: "Button", link: "/components/button" },
          { text: "Link", link: "/components/link" },
          { text: "Badge", link: "/components/badge" },
        ],
      },
      {
        text: "Contributing",
        items: [{ text: "Contributing", link: "/contributing/contributing" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/nuvra-ui" }],
  },
});
