// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import { Tab, Tabs } from "vue3-tabs-component";
import DefaultTheme from "vitepress/theme";
import "virtual:group-icons.css";
import "./style.css";
import "./custom.css";
import "@red-asuka/vitepress-plugin-tabs/dist/style.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.component("Tab", Tab);
    app.component("Tabs", (props, ctx) =>
      h(
        Tabs,
        { navClass: "tabs-component-tabs vp-raw", ...ctx.attrs, ...props },
        ctx.slots
      )
    );
    // ...
  },
} satisfies Theme;
