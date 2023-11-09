import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import { Toggle } from "@/components";
import { checkAccessibility } from "@/utils/accessibility";

describe("Toggle component tests:", () => {
  checkAccessibility(<Toggle>Toggle button</Toggle>);
});

describe("Accessibility Testing (WAI-ARIA Roles, States, and Properties):", () => {
  test("Element that serves as the toggle has aria-pressed set to true when on and to false when off", async () => {
    render(<Toggle>Toggle button</Toggle>);

    const user = userEvent.setup();

    expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "false");

    await user.tab();
    expect(screen.getByRole("button")).toHaveFocus();

    await user.keyboard("{Enter}");
    expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "true");
  });
});
