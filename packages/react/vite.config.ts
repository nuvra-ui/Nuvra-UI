import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tailwindcss(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Nuvra-UI",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
