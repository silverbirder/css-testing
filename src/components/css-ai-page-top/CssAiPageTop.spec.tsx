import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { CssAiPageTop } from "./CssAiPageTop";

test("renders page top link", async () => {
  await render(<CssAiPageTop />);

  const link = document.querySelector(".page-top-btn");
  expect(link).not.toBeNull();
});
