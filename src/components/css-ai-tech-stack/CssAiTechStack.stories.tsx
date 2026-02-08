import type { Meta, StoryObj } from "@storybook/react-vite";

import { CssAiTechStack } from "./CssAiTechStack";

const meta = {
  component: CssAiTechStack,
} satisfies Meta<typeof CssAiTechStack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
