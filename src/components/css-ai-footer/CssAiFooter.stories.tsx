import type { Meta, StoryObj } from "@storybook/react-vite";

import { CssAiFooter } from "./CssAiFooter";

const meta = {
  component: CssAiFooter,
} satisfies Meta<typeof CssAiFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
