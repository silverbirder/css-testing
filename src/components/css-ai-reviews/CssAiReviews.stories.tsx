import type { Meta, StoryObj } from "@storybook/react-vite";

import { CssAiReviews } from "./CssAiReviews";

const meta = {
  component: CssAiReviews,
} satisfies Meta<typeof CssAiReviews>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
