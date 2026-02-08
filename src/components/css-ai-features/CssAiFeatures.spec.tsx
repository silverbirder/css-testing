import { expect, test } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-react";

import "../css-ai-page/css/index.css";
import { CssAiFeatures } from "./CssAiFeatures";

test("renders features heading", async () => {
  const { getByRole } = await render(<CssAiFeatures />);

  await expect
    .element(getByRole("heading", { name: "主要機能", exact: true }))
    .toBeInTheDocument();
});

test("aligns icon, title, and description rows in the bottom feature cards", async () => {
  // Arrange
  await page.viewport(1200, 800);

  // Act
  await render(<CssAiFeatures />);

  // Assert
  const cards = Array.from(
    document.querySelectorAll<HTMLElement>(".feature-card"),
  );
  expect(cards).toHaveLength(6);
  const bottomRow = cards.slice(3, 6);
  const iconOffsets = bottomRow
    .slice(0, 2)
    .map((card) => card.querySelector<HTMLElement>(".card-icon")?.offsetTop);
  const titleOffsets = bottomRow.map(
    (card) => card.querySelector<HTMLElement>(".card-title")?.offsetTop,
  );
  const descriptionOffsets = bottomRow.map(
    (card) => card.querySelector<HTMLElement>(".card-description")?.offsetTop,
  );

  expect(new Set(iconOffsets).size).toBe(1);
  expect(new Set(titleOffsets).size).toBe(1);
  expect(new Set(descriptionOffsets).size).toBe(1);
});
