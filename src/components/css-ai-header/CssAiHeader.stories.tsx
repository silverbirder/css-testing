import type { Meta, StoryObj } from "@storybook/react-vite";

import { CssAiHeader } from "./CssAiHeader";

const meta = {
  component: CssAiHeader,
} satisfies Meta<typeof CssAiHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
