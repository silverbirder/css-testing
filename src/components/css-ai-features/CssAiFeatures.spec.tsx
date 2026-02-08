import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { CssAiFeatures } from "./CssAiFeatures";

test("renders features heading", async () => {
  const { getByRole } = await render(<CssAiFeatures />);

  await expect.element(
    getByRole("heading", { name: "主要機能", exact: true }),
  ).toBeInTheDocument();
});
