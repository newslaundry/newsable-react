import React from "react";

import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";

import { Tabs } from "@/components";
import { checkAccessibility } from "@/utils/accessibility";

const defaultProps = {
  children: (
    <>
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="subscription">Subscription</Tabs.Trigger>
        <Tabs.Trigger value="saved">Saved Stories</Tabs.Trigger>
        <Tabs.Trigger value="podcast">Podcast RSS</Tabs.Trigger>
        <Tabs.Trigger value="discord">Discord</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">Account</Tabs.Content>
      <Tabs.Content value="subscription">Subscription Status</Tabs.Content>
      <Tabs.Content value="saved">Saved Stories</Tabs.Content>
      <Tabs.Content value="podcast">Podcast RSS</Tabs.Content>
      <Tabs.Content value="discord">Discord</Tabs.Content>
    </>
  )
};

describe("Tabs component tests:", () => {
  checkAccessibility(
    <Tabs variant="default" defaultValue="account" orientation="horizontal" {...defaultProps} />
  );
});

describe("Accessibility Testing (WAI-ARIA Roles, States, and Properties):", () => {
  test("The element that serves as the container for the set of tabs has role 'tablist'", () => {
    render(<Tabs variant="default" defaultValue="account" orientation="horizontal" {...defaultProps} />);

    expect(screen.getByRole("tablist")).toBeInTheDocument();
  });

  test("Each element that serves as a tab has role 'tab' and is contained within the element with role 'tablist''", () => {
    render(<Tabs variant="default" defaultValue="account" orientation="horizontal" {...defaultProps} />);

    expect(screen.getAllByRole("tab").length).toBe(5);

    const allTabs = screen.getAllByRole("tab");
    const tablist = screen.getByRole("tablist");

    allTabs.forEach(at => {
      expect(tablist).toContainHTML(at.innerHTML);
    });
  });
});
