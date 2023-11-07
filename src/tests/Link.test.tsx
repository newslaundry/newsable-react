import React from "react";

import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { Link } from "@/components";
import { checkAccessibility } from "@/utils/accessibility";

describe("Link components tests:", () => {
  checkAccessibility(
    <Link href="https://www.radix-ui.com/" target="_blank" showExternalLinkIcon={true}>
      External Link
    </Link>
  );

  checkAccessibility(<Link href="/">Internal Link</Link>);
});

describe("Accessibility Testing (WAI-ARIA Roles, States, and Properties):", () => {
  test("should have role of 'link'", async () => {
    render(<Link href="/">Internal Link</Link>);

    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
