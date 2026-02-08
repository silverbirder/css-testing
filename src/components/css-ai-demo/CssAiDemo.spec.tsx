import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { CssAiDemo } from "./CssAiDemo";

test("renders demo section", async () => {
  const { getByRole } = await render(<CssAiDemo />);

  await expect.element(
    getByRole("heading", { name: "デモ", exact: true }),
  ).toBeInTheDocument();
});
