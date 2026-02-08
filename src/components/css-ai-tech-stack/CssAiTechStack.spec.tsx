import { expect, test } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-react";

import "../css-ai-page/css/index.css";
import { CssAiTechStack } from "./CssAiTechStack";

test("wraps tech stack tags on desktop viewport", async () => {
  // Arrange
  await page.viewport(1200, 800);
  await render(<CssAiTechStack />);

  const tags = Array.from(document.querySelectorAll<HTMLElement>(".tech-tag"));
  if (tags.length < 2) {
    throw new Error("not enough tech tags");
  }

  // Act
  await new Promise((resolve) => requestAnimationFrame(() => resolve(null)));

  // Assert
  const offsets = tags.map((tag) => tag.offsetLeft);
  const hasWrapped = offsets.some((left, index) => {
    if (index === 0) return false;
    const previousLeft = offsets?.[index - 1];
    if (previousLeft === undefined) return false;
    return left < previousLeft;
  });
  expect(hasWrapped).toBe(true);
});
