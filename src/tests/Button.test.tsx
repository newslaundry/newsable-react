import React from "react";

import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";

import { Button } from "@/components";
import { checkAccessibility } from "@/utils/accessibility";

describe("Button component tests", () => {
  checkAccessibility(<Button>Button</Button>);
});

describe("Accessibility Testing (WAI-ARIA Roles, States, and Properties):", () => {
  test("When disabled, the button has aria-disabled set to true", () => {
    render(<Button disabled={true}>Button</Button>);

    expect(screen.getByRole("button")).toBeDisabled();

    expect(screen.getByRole("button")).toHaveAttribute("aria-disabled", "true");
  });
});
