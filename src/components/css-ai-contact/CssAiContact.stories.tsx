import type { Meta, StoryObj } from "@storybook/react-vite";

import { CssAiContact } from "./CssAiContact";

const meta = {
  component: CssAiContact,
} satisfies Meta<typeof CssAiContact>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
