import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../vitest-example/*.stories.tsx"
  ],
  "addons": [],
  "framework": "@storybook/react-vite"
};
export default config;