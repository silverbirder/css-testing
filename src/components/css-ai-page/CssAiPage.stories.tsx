import type { Meta, StoryObj } from "@storybook/react-vite";

import { CssAiPage } from "./CssAiPage";

const meta = {
  component: CssAiPage,
} satisfies Meta<typeof CssAiPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
