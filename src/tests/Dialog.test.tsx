import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import { Button, Dialog } from "@/components";
import { checkAccessibility } from "@/utils/accessibility";

const defaultProps = {
  children: (
    <>
      <Dialog.Trigger asChild>
        <Button>Open modal</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Are you sure you want to take this action?</Dialog.Title>
        <Dialog.Description>
          This action cannot be undone. This will permanently perform the action and all the data will be
          affected.
        </Dialog.Description>
      </Dialog.Content>
    </>
  )
};

describe("Dialog component tests:", () => {
  checkAccessibility(<Dialog defaultOpen={true} {...defaultProps} />);
});

describe("Accessibility Testing (WAI-ARIA Roles, States, and Properties):", () => {
  test("The element that serves as the dialog container has a role of dialog", async () => {
    render(<Dialog {...defaultProps} />);

    const user = userEvent.setup();

    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  test("All elements required to operate the dialog are descendants of the element that has role dialog", async () => {
    render(<Dialog {...defaultProps} />);

    const user = userEvent.setup();

    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("dialog")).toContainHTML(screen.getByLabelText("Close").innerHTML);
  });

  test("The dialog container element has aria-modal set to true", async () => {
    render(<Dialog {...defaultProps} />);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));

    const dialog = await screen.findByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
  });

  test("Dialog has a value for aria-labelledby that refers to the element containing the title of the Dialog", async () => {
    render(<Dialog {...defaultProps} />);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));

    const dialog = await screen.findByRole("dialog");
    const dialogTitle = await screen.findByRole("heading", { level: 2 });

    expect(dialog).toHaveAttribute("aria-labelledby", dialogTitle.id);
  });

  test("Dialog has a value set for aria-describedby that refers to the element containing the dialog message", async () => {
    render(<Dialog {...defaultProps} />);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));

    const dialog = await screen.findByRole("dialog");

    // React Testing library issue
    // Cannot use findByRole to findByRole("paragraph")
    // https://github.com/testing-library/dom-testing-library/issues/1234#issuecomment-1587458440
    const dialogMessage = screen.queryByRole("paragraph");

    expect(dialog).toHaveAttribute("aria-describedby", dialogMessage?.id);
  });
});

describe("Accessibility Testing (Keyboard Interaction):", () => {
  test("When a dialog opens, focus moves to an element inside the dialog", async () => {
    render(<Dialog {...defaultProps} />);

    const user = userEvent.setup();

    await user.tab();
    expect(screen.getByRole("button")).toHaveFocus();

    await user.keyboard("{ }");

    expect(screen.getByLabelText("Close")).toHaveFocus();
  });

  test("Pressing Space opens/closes the dialog", async () => {
    render(<Dialog {...defaultProps} />);

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

  test("Pressing Enter opens/closes the dialog", async () => {
    render(<Dialog {...defaultProps} />);

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

  test("Pressing Tab moves focus to the next tabbable element inside the dialog", async () => {
    render(
      <Dialog>
        <Dialog.Trigger asChild>
          <Button>Open modal</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Are you sure you want to take this action?</Dialog.Title>
          <Dialog.Description>
            This action cannot be undone. This will permanently perform the action and all the data will be
            affected.
            <Button>Cancel</Button>
            <Button variant="danger">Yes, continue</Button>
          </Dialog.Description>
        </Dialog.Content>
      </Dialog>
    );

    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));

    expect(screen.getAllByRole("button").find(btn => btn.textContent === "Cancel")).toHaveFocus();

    await user.tab();
    expect(screen.getAllByRole("button").find(btn => btn.textContent === "Yes, continue")).toHaveFocus();
  });

  test("Pressing Shift+Tab moves focus to the previous tabbable element inside the dialog", async () => {
    render(
      <Dialog>
        <Dialog.Trigger asChild>
          <Button>Open modal</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Are you sure you want to take this action?</Dialog.Title>
          <Dialog.Description>
            This action cannot be undone. This will permanently perform the action and all the data will be
            affected.
            <Button>Cancel</Button>
            <Button variant="danger">Yes, continue</Button>
          </Dialog.Description>
        </Dialog.Content>
      </Dialog>
    );

    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));

    expect(screen.getAllByRole("button").find(btn => btn.textContent === "Cancel")).toHaveFocus();

    await user.tab();
    expect(screen.getAllByRole("button").find(btn => btn.textContent === "Yes, continue")).toHaveFocus();

    await user.keyboard("{Shift>}{Tab}{/Shift}{/Tab}}");
    expect(screen.getAllByRole("button").find(btn => btn.textContent === "Cancel")).toHaveFocus();
  });

  test("Pressing Escape Closes the dialog", async () => {
    render(<Dialog {...defaultProps} />);

    const user = userEvent.setup();

    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    await user.keyboard("{Escape}}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveFocus();
  });
});
