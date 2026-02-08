import { expect, test } from "vitest";
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
