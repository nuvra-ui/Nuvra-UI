import { baseConfig } from "@nuvra-ui/eslint-config";

export default [
  ...baseConfig,
  {
    ignores: [
      "dist/**",
      "build/**",
      ".next/**",
      "storybook-static/**",
      "node_modules/**",
    ],
  },
];
