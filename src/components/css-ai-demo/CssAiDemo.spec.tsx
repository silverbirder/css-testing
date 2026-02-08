import { page } from "vitest/browser";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import "../css-ai-page/css/index.css";
import { CssAiDemo } from "./CssAiDemo";

const setViewport = async (width: number, height = 800) => {
  await page.viewport(width, height);
};

const getRects = () => {
  const video = document.querySelector<HTMLElement>(".sidebar-video");
  const steps = document.querySelector<HTMLElement>(".sidebar-steps");

  if (!video || !steps) {
    throw new Error("sidebar blocks not found");
  }

  return {
    video: video.getBoundingClientRect(),
    steps: steps.getBoundingClientRect(),
  };
};

test("positions demo blocks for desktop viewport", async () => {
  // Arrange
  await setViewport(1200);

  // Act
  await render(<CssAiDemo />);

  // Assert
  const { video, steps } = getRects();
  expect(video.left).toBeLessThan(steps.left);
  expect(video.top).toBe(steps.top);
});

test("positions demo blocks for mobile viewport", async () => {
  // Arrange
  await setViewport(375);

  // Act
  await render(<CssAiDemo />);

  // Assert
  const { video, steps } = getRects();
  expect(video.top).toBeLessThan(steps.top);
});
