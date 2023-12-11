import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import { Tooltip } from "@/components";
import { checkAccessibility } from "@/utils/accessibility";

const defaultProps = {
  children: (
    <>
      <Tooltip.Trigger>
        <p className="text-sm underline">Hover me</p>
      </Tooltip.Trigger>
      <Tooltip.Content>A small information</Tooltip.Content>
    </>
  )
};

describe("Tooltip component tests:", () => {
  checkAccessibility(<Tooltip {...defaultProps} />);
});

describe("Accessibility Testing (WAI-ARIA Roles, States, and Properties):", () => {
  test("The element that serves as the tooltip container has role tooltip", async () => {
    render(<Tooltip {...defaultProps} />);

    const user = userEvent.setup();

    const tooltipBtn = screen.getByRole("button");
    await user.hover(tooltipBtn);

    const tooltip = await screen.findByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
  });

  test("The element that triggers the tooltip references the tooltip element with aria-describedby", async () => {
    render(<Tooltip {...defaultProps} />);

    const user = userEvent.setup();

    const tooltipBtn = screen.getByRole("button");
    await user.hover(tooltipBtn);

    const tooltip = await screen.findByRole("tooltip");
    expect(tooltip).toBeInTheDocument();

    expect(tooltipBtn).toHaveAttribute("aria-describedby", tooltip.id);
  });
});

describe("Accessibility Testing (Keyboard Interaction):", () => {
  test("Escape: Dismisses the Tooltip", async () => {
    render(<Tooltip {...defaultProps} />);

    const user = userEvent.setup();

    const tooltipBtn = screen.getByRole("button");

    await user.tab();
    expect(tooltipBtn).toHaveFocus();

    const tooltip = await screen.findByRole("tooltip");
    expect(tooltip).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(tooltip).not.toBeInTheDocument();
  });
});
