import js from "@eslint/js";

export const baseConfig = [
  js.configs.recommended,
  {
    ignores: ["dist/**"],
  },
];
