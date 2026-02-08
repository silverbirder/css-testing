import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { CssAiHero } from "./CssAiHero";

test("renders hero title", async () => {
  const { getByText } = await render(<CssAiHero />);

  await expect.element(getByText("CSS AI")).toBeInTheDocument();
});
