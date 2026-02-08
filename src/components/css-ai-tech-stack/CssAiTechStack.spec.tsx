import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { CssAiTechStack } from "./CssAiTechStack";

test("renders tech stack tags", async () => {
  const { getByText } = await render(<CssAiTechStack />);

  await expect.element(getByText("TypeScript")).toBeInTheDocument();
});
