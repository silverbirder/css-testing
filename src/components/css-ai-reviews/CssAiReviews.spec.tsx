import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { CssAiReviews } from "./CssAiReviews";

test("renders reviews section", async () => {
  const { getByRole } = await render(<CssAiReviews />);

  await expect.element(
    getByRole("heading", { name: "お客様の声", exact: true }),
  ).toBeInTheDocument();
});
