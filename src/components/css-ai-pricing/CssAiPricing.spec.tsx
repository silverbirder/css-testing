import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { CssAiPricing } from "./CssAiPricing";

test("renders pricing section", async () => {
  const { getByRole } = await render(<CssAiPricing />);

  await expect.element(
    getByRole("heading", { name: "料金プラン", exact: true }),
  ).toBeInTheDocument();
});
