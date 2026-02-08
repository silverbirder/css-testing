import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { CssAiContact } from "./CssAiContact";

test("renders contact form", async () => {
  const { getByLabelText } = await render(<CssAiContact />);

  await expect.element(getByLabelText("お名前")).toBeInTheDocument();
});
