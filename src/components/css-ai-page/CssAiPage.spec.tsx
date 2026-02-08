import { expect, test } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-react";

import { CssAiPage } from "./CssAiPage";

test("renders main sections", async () => {
  const { getByRole } = await render(<CssAiPage />);

  await expect.element(
    getByRole("heading", { name: "主要機能", exact: true }),
  ).toBeInTheDocument();
  await expect.element(
    getByRole("heading", { name: "デモ", exact: true }),
  ).toBeInTheDocument();
  await expect.element(
    getByRole("heading", { name: "料金プラン", exact: true }),
  ).toBeInTheDocument();
  await expect.element(
    getByRole("heading", { name: "お問い合わせ", exact: true }),
  ).toBeInTheDocument();
});

test("keeps global header on top after scrolling to demo", async () => {
  // Arrange
  await page.viewport(1200, 800);
  await render(<CssAiPage />);

  const header = document.querySelector<HTMLElement>(".fixed-header");
  const demoSection = document.querySelector<HTMLElement>("#demo");

  if (!header || !demoSection) {
    throw new Error("header or demo section not found");
  }

  // Act
  document.documentElement.style.scrollBehavior = "auto";
  demoSection.scrollIntoView({ block: "start" });
  await new Promise((resolve) => requestAnimationFrame(() => resolve(null)));

  // Assert
  const headerHit = document.elementFromPoint(100, 50);
  expect(headerHit?.closest(".fixed-header")).toBe(header);
});
