import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import { AlertDialog, Button } from "@/components";
import { checkAccessibility } from "@/utils/accessibility";

const defaultProps = {
  children: (
    <>
      <AlertDialog.Trigger asChild>
        <Button variant="accent">Open</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Are you sure absolutely sure?</AlertDialog.Title>
        <AlertDialog.Description>
          This action cannot be undone. This will permanently delete your account and remove your data from
          our servers.
        </AlertDialog.Description>
        <AlertDialog.Footer>
          <AlertDialog.Cancel asChild>
            <Button variant="neutral">Cancel</Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <Button variant="danger">Yes, continue</Button>
          </AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </>
  )
};

describe("Alert component tests", () => {
  checkAccessibility(<AlertDialog defaultOpen={true} {...defaultProps} />);
});

describe("Accessibility Testing (WAI-ARIA Roles, States, and Properties):", () => {
  test("The widget has a role of alertdialog", async () => {
    render(<AlertDialog {...defaultProps} />);

    const user = userEvent.setup();

    await user.tab();
    expect(screen.getByRole("button")).toHaveFocus();

    await user.keyboard("{ }");

    const alert = await screen.findByRole("alertdialog");
    expect(alert).toBeInTheDocument();
  });

  test("AlertDialog has a value for aria-labelledby that refers to the element containing the title of the dialog", async () => {
    render(<AlertDialog {...defaultProps} />);

    const user = userEvent.setup();

    await user.tab();
    expect(screen.getByRole("button")).toHaveFocus();

    await user.keyboard("{ }");

    const alert = await screen.findByRole("alertdialog");
    const alertTitle = await screen.findByRole("heading", { level: 2 });

    expect(alert).toHaveAttribute("aria-labelledby", alertTitle.id);
  });

  test("Alert has a value set for aria-describedby that refers to the element containing the alert message", async () => {
    render(<AlertDialog {...defaultProps} />);

    const user = userEvent.setup();

    await user.tab();
    expect(screen.getByRole("button")).toHaveFocus();

    await user.keyboard("{ }");

    const alert = await screen.findByRole("alertdialog");

    // React Testing library issue
    // Cannot use findByRole to findByRole("paragraph")
    // https://github.com/testing-library/dom-testing-library/issues/1234#issuecomment-1587458440
    const alertMessage = screen.queryByRole("paragraph");

    expect(alert).toHaveAttribute("aria-describedby", alertMessage?.id);
  });
});

describe("Accessibility Testing (Keyboard Interaction):", () => {
  test("When an alert opens, focus moves to an element inside the alert", async () => {
    render(<AlertDialog {...defaultProps} />);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));

    expect(screen.getAllByRole("button").find(btn => btn.textContent === "Cancel")).toHaveFocus();
  });

  test("Pressing Space opens/closes the alert", async () => {
    render(<AlertDialog {...defaultProps} />);

    const user = userEvent.setup();

    await user.tab();
    expect(screen.getByRole("button")).toHaveFocus();

    await user.keyboard("{ }");
    const alertShow = await screen.findByRole("alertdialog");

    expect(alertShow).toBeInTheDocument();

    await user.keyboard("{ }");
    const alertHide = screen.queryByRole("alertdialog");

    expect(alertHide).not.toBeInTheDocument();
  });

  test("Pressing Enter opens/closes the alert", async () => {
    render(<AlertDialog {...defaultProps} />);

    const user = userEvent.setup();

    await user.tab();
    expect(screen.getByRole("button")).toHaveFocus();

    await user.keyboard("{Enter}");
    const alertShow = await screen.findByRole("alertdialog");
    expect(alertShow).toBeInTheDocument();

    await user.keyboard("{Enter}");
    const alertHide = screen.queryByRole("alertdialog");

    expect(alertHide).not.toBeInTheDocument();
  });

  test("Pressing Tab moves focus to the next tabbable element inside the alert", async () => {
    render(<AlertDialog {...defaultProps} />);

    const user = userEvent.setup();

    await user.tab();
    expect(screen.getByRole("button")).toHaveFocus();

    await user.keyboard("{ }");
    expect(screen.getAllByRole("button").find(btn => btn.textContent === "Cancel")).toHaveFocus();

    await user.tab();
    expect(screen.getAllByRole("button").find(btn => btn.textContent === "Yes, continue")).toHaveFocus();
  });

  test("Pressing Shift+Tab moves focus to the previous tabbable element inside the alert", async () => {
    render(<AlertDialog {...defaultProps} />);

    const user = userEvent.setup();

    await user.tab();
    expect(screen.getByRole("button")).toHaveFocus();

    await user.keyboard("{ }");
    expect(screen.getAllByRole("button").find(btn => btn.textContent === "Cancel")).toHaveFocus();

    await user.tab();
    expect(screen.getAllByRole("button").find(btn => btn.textContent === "Yes, continue")).toHaveFocus();

    await user.keyboard("{Shift>}{Tab}{/Shift}{/Tab}}");
    expect(screen.getAllByRole("button").find(btn => btn.textContent === "Cancel")).toHaveFocus();
  });

  test("Pressing Esc closes the alert", async () => {
    render(<AlertDialog {...defaultProps} />);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));

    const alertShow = await screen.findByRole("alertdialog");
    expect(alertShow).toBeInTheDocument();

    await user.keyboard("{Escape}");
    const alertHide = screen.queryByRole("alertdialog");

    expect(alertHide).not.toBeInTheDocument();
  });
});
