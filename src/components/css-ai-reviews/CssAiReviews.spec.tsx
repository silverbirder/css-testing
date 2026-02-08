import { expect, test } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-react";

import "../css-ai-page/css/index.css";
import { CssAiReviews } from "./CssAiReviews";

test("shows 3 full review cards and 1 clipped on desktop", async () => {
  // Arrange
  await page.viewport(1200, 800);
  await render(<CssAiReviews />);

  const reel = document.querySelector<HTMLElement>(".reel");
  const cards = Array.from(
    document.querySelectorAll<HTMLElement>(".review-card"),
  );

  if (!reel) {
    throw new Error("reel not found");
  }
  if (cards.length < 4) {
    throw new Error("not enough review cards");
  }

  // Act
  reel.scrollLeft = 0;
  const fourth = cards.at(3);
  if (!fourth) {
    throw new Error("fourth review card not found");
  }

  const visibleLeft = reel.scrollLeft; // 0
  const visibleRight = visibleLeft + reel.clientWidth; // 1200

  const cardLeft = fourth.offsetLeft; // 1035
  const cardRight = fourth.offsetLeft + fourth.offsetWidth; // 1372

  // Assert
  // 1035 < 1200
  expect(cardLeft).toBeLessThan(visibleRight);
  // 1372 > 1200
  expect(cardRight).toBeGreaterThan(visibleRight);
});
