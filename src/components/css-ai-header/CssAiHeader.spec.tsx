import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { CssAiHeader } from "./CssAiHeader";

test("renders header logo and nav", async () => {
  await render(<CssAiHeader />);

  const logo = document.querySelector(".header-logo");
  const contactLinks = document.querySelectorAll('a[href="#contact"]');

  expect(logo?.textContent).toBe("CSS AI");
  expect(contactLinks.length).toBeGreaterThan(0);
});
