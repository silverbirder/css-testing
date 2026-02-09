import { expect, test } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-react";

import { CssAiPage } from "./CssAiPage";

test("renders main sections", async () => {
  const { getByRole } = await render(<CssAiPage />);

  await expect
    .element(getByRole("heading", { name: "主要機能", exact: true }))
    .toBeInTheDocument();
  await expect
    .element(getByRole("heading", { name: "デモ", exact: true }))
    .toBeInTheDocument();
  await expect
    .element(getByRole("heading", { name: "料金プラン", exact: true }))
    .toBeInTheDocument();
  await expect
    .element(getByRole("heading", { name: "お問い合わせ", exact: true }))
    .toBeInTheDocument();
});

test("sticky section title stays on top under the header", async () => {
  // Arrange
  await page.viewport(1200, 800);
  await render(<CssAiPage />);

  const header = document.querySelector<HTMLElement>(".fixed-header");
  const demoSection = document.querySelector<HTMLElement>("#demo");
  const stickyTitle = demoSection?.querySelector<HTMLElement>(
    ".sticky-section-title",
  );

  if (!header || !demoSection || !stickyTitle) {
    throw new Error("header, demo section, or sticky title not found");
  }

  // Act
  document.documentElement.style.scrollBehavior = "auto";
  const headerBottom = header.getBoundingClientRect().bottom;
  const stickyTitleTop = stickyTitle.getBoundingClientRect().top;
  window.scrollTo({ top: stickyTitleTop });
  await new Promise(requestAnimationFrame);

  // Assert
  const pointX = Math.round(window.innerWidth / 2);
  const pointY = Math.round(headerBottom + 1);
  const hit = document.elementFromPoint(pointX, pointY);
  expect(hit?.closest(".sticky-section-title")).toBe(stickyTitle);
});

test("global header stays above demo image when they overlap", async () => {
  // Arrange
  await page.viewport(1200, 800);
  await render(<CssAiPage />);

  const header = document.querySelector<HTMLElement>(".fixed-header");
  const demoImage = document.querySelector<HTMLElement>(".demo-image");

  if (!header || !demoImage) {
    throw new Error("header or demo image not found");
  }

  // Act
  document.documentElement.style.scrollBehavior = "auto";
  const imgAbsTop = demoImage.getBoundingClientRect().top;
  window.scrollTo({ top: imgAbsTop });
  await new Promise(requestAnimationFrame);

  // Assert
  const imgRect = demoImage.getBoundingClientRect();
  const pointX = Math.round(imgRect.left);
  const pointY = Math.round(imgRect.top);
  const hit = document.elementFromPoint(pointX, pointY);
  expect(hit?.closest(".fixed-header")).toBe(header);
});
