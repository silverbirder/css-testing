import type { Meta, StoryObj } from "@storybook/react-vite";

import { CssAiPageTop } from "./CssAiPageTop";

const meta = {
  component: CssAiPageTop,
  decorators: [
    (Story) => (
      <div style={{ minHeight: "100vh" }}>
        <style>{`
          .page-top-btn {
            opacity: 1;
          }
        `}</style>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CssAiPageTop>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
