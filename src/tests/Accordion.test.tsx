import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, test } from "vitest";

import { Accordion } from "@/components";
import { checkAccessibility } from "@/utils/accessibility";

const defaultProps = {
  children: (
    <>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Heading</Accordion.Trigger>
        <Accordion.Content>Content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Heading</Accordion.Trigger>
        <Accordion.Content>Content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Heading3</Accordion.Trigger>
        <Accordion.Content>Content3</Accordion.Content>
      </Accordion.Item>
    </>
  )
};

describe("Accordion component tests:", () => {
  checkAccessibility(<Accordion {...defaultProps} type="single" />);

  it("should only open one accordion on click when type is set to 'single'", async () => {
    render(
      <Accordion type="single">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Heading</Accordion.Trigger>
          <Accordion.Content data-testid="content-1">Content</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Heading</Accordion.Trigger>
          <Accordion.Content data-testid="content-2">Content</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger>Heading</Accordion.Trigger>
          <Accordion.Content data-testid="content-3">Content</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    await userEvent.click(screen.getAllByRole("button")[0]);
    expect(screen.getByTestId("content-1")).not.toHaveAttribute("hidden");
    expect(screen.getByTestId("content-2")).toHaveAttribute("hidden");

    await userEvent.click(screen.getAllByRole("button")[1]);
    expect(screen.getByTestId("content-1")).toHaveAttribute("hidden");
    expect(screen.getByTestId("content-2")).not.toHaveAttribute("hidden");
  });

  it("should open multiple accordions on click when type is set to 'multiple'", async () => {
    render(
      <Accordion type="multiple">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Heading</Accordion.Trigger>
          <Accordion.Content data-testid="content-1">Content</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Heading</Accordion.Trigger>
          <Accordion.Content data-testid="content-2">Content</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger>Heading</Accordion.Trigger>
          <Accordion.Content data-testid="content-3">Content</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    await userEvent.click(screen.getAllByRole("button")[0]);
    await userEvent.click(screen.getAllByRole("button")[2]);
    expect(screen.getByTestId("content-1")).not.toHaveAttribute("hidden");
    expect(screen.getByTestId("content-2")).toHaveAttribute("hidden");
    expect(screen.getByTestId("content-3")).not.toHaveAttribute("hidden");
  });

  it("should open an accordion by default if type is set to 'single and a defaultValue is provided", () => {
    render(
      <Accordion type="single" defaultValue="item-2">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Heading</Accordion.Trigger>
          <Accordion.Content data-testid="content-1">Content</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Heading</Accordion.Trigger>
          <Accordion.Content data-testid="content-2">Content</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    expect(screen.getByTestId("content-2")).not.toHaveAttribute("hidden");
    expect(screen.getByTestId("content-2")).toHaveAttribute("data-state", "open");
  });

  it("should open multiple accordion panels by default if defaultValue array is provided", () => {
    render(
      <Accordion type="multiple" defaultValue={["item-2", "item-3"]}>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Heading</Accordion.Trigger>
          <Accordion.Content data-testid="content-1">Content</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Heading</Accordion.Trigger>
          <Accordion.Content data-testid="content-2">Content</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger>Heading</Accordion.Trigger>
          <Accordion.Content data-testid="content-3">Content</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    expect(screen.getByTestId("content-2")).not.toHaveAttribute("hidden");
    expect(screen.getByTestId("content-2")).toHaveAttribute("data-state", "open");

    expect(screen.getByTestId("content-3")).not.toHaveAttribute("hidden");
    expect(screen.getByTestId("content-3")).toHaveAttribute("data-state", "open");
  });
});

describe("Accessibility Testing (WAI-ARIA Roles, States, and Properties):", () => {
  test("The title of each accordion header is contained in an element with role 'button'", () => {
    render(<Accordion {...defaultProps} type="single" />);

    expect(screen.getAllByRole("button")).toHaveLength(3);

    const headingButtons = screen.queryAllByRole("button");
    headingButtons.forEach(hb => {
      expect(hb).toHaveTextContent("Heading");
    });
  });

  test("The header buttons should have appropriate aria-expanded roles", async () => {
    render(<Accordion {...defaultProps} type="single" />);

    await userEvent.click(screen.getAllByRole("button")[0]);
    expect(screen.getAllByRole("button")[0]).toHaveAttribute("aria-expanded", "true");

    expect(screen.getAllByRole("button")[1]).toHaveAttribute("aria-expanded", "false");
  });

  test("The accordion header button element has aria-controls set to the ID of the element containing the accordion panel content", () => {
    render(
      <Accordion type="single">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Heading</Accordion.Trigger>
          <Accordion.Content data-testid="content-1">Content</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Heading</Accordion.Trigger>
          <Accordion.Content data-testid="content-2">Content</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    const headingElements = screen.getAllByRole("button", { name: "Heading" });

    headingElements.forEach((heading, index) => {
      const contentId = screen.getByTestId(`content-${index + 1}`).getAttribute("id");
      expect(heading).toHaveAttribute("aria-controls", contentId);
    });
  });

  test("If the accordion panel associated with an accordion header is visible, and if the accordion does not permit the panel to be collapsed, the header button element has aria-disabled set to true", () => {
    render(
      <Accordion type="single" defaultValue="item-1" collapsible={true}>
        <Accordion.Item value="item-1" disabled={true}>
          <Accordion.Trigger>Heading</Accordion.Trigger>
          <Accordion.Content>Content</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Heading</Accordion.Trigger>
          <Accordion.Content>Content</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    expect(screen.getAllByRole("button")[0]).toBeDisabled();
  });

  test("Each element that serves as a container for panel content has role 'region'", async () => {
    render(
      <Accordion type="single">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Heading</Accordion.Trigger>
          <Accordion.Content data-testid="content">Content</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Heading</Accordion.Trigger>
          <Accordion.Content data-testid="content">Content</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    screen.getAllByTestId("content").forEach(content => {
      expect(content).toHaveAttribute("role", "region");
    });
  });

  test("Each element that serves as a container for panel content has 'aria-labelledby' with a value that refers to the button that controls display of the panel", async () => {
    render(
      <Accordion type="single">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Heading</Accordion.Trigger>
          <Accordion.Content data-testid="content">Content</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Heading</Accordion.Trigger>
          <Accordion.Content data-testid="content">Content</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    screen.getAllByTestId("content").forEach((content, index) => {
      expect(content).toHaveAttribute("aria-labelledby");

      const ariaLabelledBy = content.getAttribute("aria-labelledby");

      expect(screen.getAllByRole("button")[index]).toHaveAttribute("id", ariaLabelledBy);
    });
  });
});

describe("Accessibility Testing (Keyboard Interaction):", () => {
  test("Enter or Space: When focus is on the accordion header for a collapsed panel, expands the associated panel", async () => {
    render(
      <Accordion type="single">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Heading</Accordion.Trigger>
          <Accordion.Content data-testid="content-1">Content</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Heading</Accordion.Trigger>
          <Accordion.Content data-testid="content-2">Content</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    expect(document.body).toHaveFocus();

    await userEvent.tab();
    expect(screen.getAllByRole("button")[0]).toHaveFocus();

    await userEvent.click(screen.getAllByRole("button")[0]);
    expect(screen.getByTestId("content-1")).toHaveAttribute("data-state", "open");
    expect(screen.getByTestId("content-2")).toHaveAttribute("data-state", "closed");

    await userEvent.tab();
    expect(screen.getAllByRole("button")[1]).toHaveFocus();

    await userEvent.click(screen.getAllByRole("button")[1]);
    expect(screen.getByTestId("content-1")).toHaveAttribute("data-state", "closed");
    expect(screen.getByTestId("content-2")).toHaveAttribute("data-state", "open");
  });

  test("Tab: Moves focus to the next focusable element; all focusable elements in the accordion are included in the page Tab sequence", async () => {
    render(<Accordion {...defaultProps} type="single" />);

    expect(document.body).toHaveFocus();

    await userEvent.tab();
    expect(screen.getAllByRole("button")[0]).toHaveFocus();

    await userEvent.tab();
    expect(screen.getAllByRole("button")[1]).toHaveFocus();

    await userEvent.tab();
    expect(screen.getAllByRole("button")[2]).toHaveFocus();

    await userEvent.tab();
    expect(document.body).toHaveFocus();
  });

  test("Shift + Tab: Moves focus to the previous focusable element; all focusable elements in the accordion are included in the page Tab sequence", async () => {
    render(<Accordion {...defaultProps} type="single" />);

    expect(document.body).toHaveFocus();

    await userEvent.tab();
    expect(screen.getAllByRole("button")[0]).toHaveFocus();

    await userEvent.tab();
    expect(screen.getAllByRole("button")[1]).toHaveFocus();

    await userEvent.tab();
    expect(screen.getAllByRole("button")[2]).toHaveFocus();

    await userEvent.keyboard("{Shift>}{Tab}{/Shift}{/Tab}}");
    expect(screen.getAllByRole("button")[1]).toHaveFocus();

    await userEvent.keyboard("{Shift>}{Tab}{/Shift}{/Tab}}");
    expect(screen.getAllByRole("button")[0]).toHaveFocus();
  });

  test("Down Arrow: If focus is on an accordion header, moves focus to the next accordion header", async () => {
    render(<Accordion {...defaultProps} type="single" />);

    expect(document.body).toHaveFocus();

    await userEvent.tab();
    expect(screen.getAllByRole("button")[0]).toHaveFocus();

    await userEvent.keyboard("{ArrowDown}");
    expect(screen.getAllByRole("button")[1]).toHaveFocus();

    await userEvent.keyboard("{ArrowDown}");
    expect(screen.getAllByRole("button")[2]).toHaveFocus();
  });

  test("Up Arrow: If focus is on an accordion header, moves focus to the previous accordion header", async () => {
    render(<Accordion {...defaultProps} type="single" />);

    expect(document.body).toHaveFocus();

    await userEvent.tab();
    expect(screen.getAllByRole("button")[0]).toHaveFocus();

    await userEvent.keyboard("{ArrowDown}");
    expect(screen.getAllByRole("button")[1]).toHaveFocus();

    await userEvent.keyboard("{ArrowDown}");
    expect(screen.getAllByRole("button")[2]).toHaveFocus();

    await userEvent.keyboard("{ArrowUp}");
    expect(screen.getAllByRole("button")[1]).toHaveFocus();

    await userEvent.keyboard("{ArrowUp}");
    expect(screen.getAllByRole("button")[0]).toHaveFocus();
  });

  test("Home: When focus is on an accordion header, moves focus to the first accordion header", async () => {
    render(<Accordion {...defaultProps} type="single" />);

    expect(document.body).toHaveFocus();

    await userEvent.tab();
    expect(screen.getAllByRole("button")[0]).toHaveFocus();

    await userEvent.tab();
    expect(screen.getAllByRole("button")[1]).toHaveFocus();

    await userEvent.tab();
    expect(screen.getAllByRole("button")[2]).toHaveFocus();

    await userEvent.keyboard("{Home}");
    expect(screen.getAllByRole("button")[0]).toHaveFocus();
  });

  test("End: When focus is on an accordion header, moves focus to the last accordion header", async () => {
    render(<Accordion {...defaultProps} type="single" />);

    expect(document.body).toHaveFocus();

    await userEvent.tab();
    expect(screen.getAllByRole("button")[0]).toHaveFocus();

    await userEvent.keyboard("{End}");
    expect(screen.getAllByRole("button")[2]).toHaveFocus();
  });
});
