import React from "react";

import { axe, toHaveNoViolations } from "jest-axe";
import { expect, it } from "vitest";

import { renderWithAct } from "./render-with-act";

export const checkAccessibility = (element: React.ReactElement) => {
  expect.extend(toHaveNoViolations);

  it("should pass automated a11y tests", async () => {
    const renderedContainer = await renderWithAct(element);

    if (renderedContainer) {
      const { container } = renderedContainer;
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    } else {
      throw new Error("Failed automated a11y tests. Check @/utils/testUtils/accessibility for details");
    }
  });
};
