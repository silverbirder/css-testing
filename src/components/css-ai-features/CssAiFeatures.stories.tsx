import type { Meta, StoryObj } from "@storybook/react-vite";

import { CssAiFeatures } from "./CssAiFeatures";

const meta = {
  component: CssAiFeatures,
} satisfies Meta<typeof CssAiFeatures>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
