import type { Meta, StoryObj } from "@storybook/react-vite";

import { CssAiPricing } from "./CssAiPricing";

const meta = {
  component: CssAiPricing,
} satisfies Meta<typeof CssAiPricing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
