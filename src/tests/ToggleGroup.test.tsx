import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import { ToggleGroup } from "@/components";
import { checkAccessibility } from "@/utils/accessibility";

const defaultProps = {
  children: (
    <>
      <ToggleGroup.Item value="monthly">
        <p>Monthly</p>
      </ToggleGroup.Item>
      <ToggleGroup.Item value="yearly">
        <p>Yearly</p>
      </ToggleGroup.Item>
    </>
  )
};

describe("ToggleGroup component tests:", () => {
  checkAccessibility(<ToggleGroup type="single" defaultValue="yearly" {...defaultProps} />);
});

describe("Accessibility Testing (WAI-ARIA Roles, States, and Properties):", () => {
  test("The container that wraps the toggle buttons has a role of group", () => {
    render(<ToggleGroup type="single" defaultValue="yearly" {...defaultProps} />);

    expect(screen.getByRole("group")).toBeInTheDocument();
  });

  test("Elements that serves as the toggle has aria-checked set to true when on and to false when off", async () => {
    render(<ToggleGroup type="single" defaultValue="yearly" {...defaultProps} />);

    const user = userEvent.setup();

    expect(screen.getAllByRole("radio")[0]).toHaveAttribute("aria-checked", "false");
    expect(screen.getAllByRole("radio")[1]).toHaveAttribute("aria-checked", "true");

    await user.tab();
    expect(screen.getAllByRole("radio")[1]).toHaveFocus();

    await user.keyboard("{ArrowLeft}");
    expect(screen.getAllByRole("radio")[0]).toHaveFocus();

    await user.keyboard("{Enter}");
    expect(screen.getAllByRole("radio")[0]).toHaveAttribute("aria-checked", "true");
    expect(screen.getAllByRole("radio")[1]).toHaveAttribute("aria-checked", "false");
  });
});
