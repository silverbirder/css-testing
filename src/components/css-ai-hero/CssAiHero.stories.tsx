import type { Meta, StoryObj } from "@storybook/react-vite";

import { CssAiHero } from "./CssAiHero";

const meta = {
  component: CssAiHero,
} satisfies Meta<typeof CssAiHero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
