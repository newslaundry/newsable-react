import React from "react";

import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { Separator } from "@/components";
import { checkAccessibility } from "@/utils/accessibility";

describe("Separator component tests:", () => {
  checkAccessibility(<Separator />);
  checkAccessibility(<Separator decorative orientation="vertical" variant="neutral" />);
});

describe("Accessibility Testing (WAI-ARIA Roles, States, and Properties):", () => {
  test("Element that serves as the separator has a role of separator", () => {
    render(<Separator />);

    expect(screen.getByRole("separator")).toBeInTheDocument();
  });
});
