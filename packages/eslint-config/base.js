import js from "@eslint/js";
import tseslint from "typescript-eslint";

export const baseConfig = [
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    ignores: ["dist/**"],
  },
];
