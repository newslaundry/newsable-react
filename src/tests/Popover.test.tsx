import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import { Button, Popover } from "@/components";
import { checkAccessibility } from "@/utils/accessibility";

const defaultProps = {
  children: (
    <>
      <Popover.Trigger asChild>
        <Button>Click to edit</Button>
      </Popover.Trigger>
      <Popover.Content>
        <div className="flex flex-col gap-2.5">
          <p className="font-medium">Edit Form</p>
          <p className="text-sm font-medium text-primary-muted">You can display a form or anything here.</p>
        </div>
        <Popover.Close />
      </Popover.Content>
    </>
  )
};

describe("Popover component tests:", () => {
  checkAccessibility(<Popover {...defaultProps} />);
});

describe("Accessibility Testing (WAI-ARIA Roles, States, and Properties):", () => {
  test("The element that serves as the popover container has a role of dialog", async () => {
    render(<Popover {...defaultProps} />);

    const user = userEvent.setup();

    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  test("All elements required to operate the popover are descendants of the element that has role dialog", async () => {
    render(<Popover {...defaultProps} />);

    const user = userEvent.setup();

    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("dialog")).toContainHTML(screen.getByLabelText("Close").innerHTML);
  });

  test("The Popover container element has aria-modal set to true when opened", async () => {
    render(<Popover {...defaultProps} />);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));

    const popover = await screen.findByRole("dialog");
    expect(popover).toHaveAttribute("aria-modal", "true");
  });
});

describe("Accessibility Testing (Keyboard Interaction):", () => {
  test("When a popover opens, focus moves to an element inside the popover", async () => {
    render(<Popover {...defaultProps} />);

    const user = userEvent.setup();

    await user.click(screen.getByRole("button"));
    expect(screen.getByLabelText("Close")).toHaveFocus();
  });

  test("Pressing Space opens/closes the popover", async () => {
    render(<Popover {...defaultProps} />);

    const user = userEvent.setup();

    await user.tab();
    expect(screen.getByRole("button")).toHaveFocus();

    await user.keyboard("{ }");
    const dialogShow = await screen.findByRole("dialog");
    expect(dialogShow).toBeInTheDocument();

    await user.keyboard("{ }");
    const dialogHide = screen.queryByRole("dialog");
    expect(dialogHide).not.toBeInTheDocument();
  });

  test("Pressing Enter opens/closes the popover", async () => {
    render(<Popover {...defaultProps} />);

    const user = userEvent.setup();

    await user.tab();
    expect(screen.getByRole("button")).toHaveFocus();

    await user.keyboard("{Enter}");
    const dialogShow = await screen.findByRole("dialog");
    expect(dialogShow).toBeInTheDocument();

    await user.keyboard("{Enter}");
    const dialogHide = screen.queryByRole("dialog");
    expect(dialogHide).not.toBeInTheDocument();
  });

  test("Pressing Tab moves focus to the next tabbable element inside the popover", async () => {
    render(
      <Popover>
        <Popover.Trigger asChild>
          <Button>Click to edit</Button>
        </Popover.Trigger>
        <Popover.Content>
          <div className="flex flex-col gap-2.5">
            <p className="font-medium">Edit Form</p>
            <p className="text-sm font-medium text-primary-muted">You can display a form or anything here.</p>
          </div>
          <Button variant="neutral">Cancel</Button>
          <Button variant="danger">Yes, continue</Button>
          <Popover.Close />
        </Popover.Content>
      </Popover>
    );

    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));

    expect(screen.getAllByRole("button").find(btn => btn.textContent === "Cancel")).toHaveFocus();

    await user.tab();
    expect(screen.getAllByRole("button").find(btn => btn.textContent === "Yes, continue")).toHaveFocus();
  });

  test("Pressing Shift+Tab moves focus to the previous tabbable element inside the popover", async () => {
    render(
      <Popover>
        <Popover.Trigger asChild>
          <Button>Click to edit</Button>
        </Popover.Trigger>
        <Popover.Content>
          <div className="flex flex-col gap-2.5">
            <p className="font-medium">Edit Form</p>
            <p className="text-sm font-medium text-primary-muted">You can display a form or anything here.</p>
          </div>
          <Button variant="neutral">Cancel</Button>
          <Button variant="danger">Yes, continue</Button>
          <Popover.Close />
        </Popover.Content>
      </Popover>
    );

    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));

    expect(screen.getAllByRole("button").find(btn => btn.textContent === "Cancel")).toHaveFocus();

    await user.tab();
    expect(screen.getAllByRole("button").find(btn => btn.textContent === "Yes, continue")).toHaveFocus();

    await user.keyboard("{Shift>}{Tab}{/Shift}{/Tab}}");
    expect(screen.getAllByRole("button").find(btn => btn.textContent === "Cancel")).toHaveFocus();
  });

  test("Pressing Escape Closes the popover", async () => {
    render(<Popover {...defaultProps} />);

    const user = userEvent.setup();

    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    await user.keyboard("{Escape}}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveFocus();
  });
});
