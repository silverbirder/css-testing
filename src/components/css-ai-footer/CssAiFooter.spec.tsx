import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { CssAiFooter } from "./CssAiFooter";

test("renders footer content", async () => {
  const { getByRole } = await render(<CssAiFooter />);

  await expect.element(
    getByRole("heading", { name: "CSS AI", exact: true }),
  ).toBeInTheDocument();
});
