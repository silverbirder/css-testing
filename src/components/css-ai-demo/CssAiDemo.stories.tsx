import type { Meta, StoryObj } from "@storybook/react-vite";

import { CssAiDemo } from "./CssAiDemo";

const meta = {
  component: CssAiDemo,
} satisfies Meta<typeof CssAiDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
