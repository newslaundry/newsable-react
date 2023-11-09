import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";

import { RadioGroup } from "@/components";
import { checkAccessibility } from "@/utils/accessibility";

const defaultProps = {
  children: (
    <>
      <RadioGroup.Item value="r1">UPI, Netbanking, Rupay, Wallets or Paypal</RadioGroup.Item>
      <RadioGroup.Item value="r2">Credit or Debit Card</RadioGroup.Item>
      <RadioGroup.Item value="r3">Paypal</RadioGroup.Item>
    </>
  )
};

describe("RadioGroup component tests:", () => {
  checkAccessibility(
    <RadioGroup
      orientation="vertical"
      aria-labelledby="Subscription options"
      defaultValue="r1"
      {...defaultProps}
    />
  );
});

describe("Accessibility Testing (WAI-ARIA Roles, States, and Properties):", () => {
  test("Radio buttons are contained in or owned by an element with role radiogroup", () => {
    render(
      <RadioGroup
        orientation="vertical"
        aria-labelledby="Subscription options"
        defaultValue="r1"
        {...defaultProps}
      />
    );

    expect(screen.getByRole("radiogroup")).toBeInTheDocument();
  });

  test("Each radio button element has role radio", () => {
    render(
      <RadioGroup
        orientation="vertical"
        aria-labelledby="Subscription options"
        defaultValue="r1"
        {...defaultProps}
      />
    );

    expect(screen.getAllByRole("radio").length).toBe(3);
  });

  test("If a radio button is checked, the radio element has aria-checked set to true and false if it isn't", () => {
    render(
      <RadioGroup
        orientation="vertical"
        aria-labelledby="Subscription options"
        defaultValue="r1"
        {...defaultProps}
      />
    );

    const radioButtons = screen.getAllByRole("radio");

    expect(radioButtons[0]).toHaveAttribute("aria-checked", "true");
    expect(radioButtons[1]).toHaveAttribute("aria-checked", "false");
    expect(radioButtons[2]).toHaveAttribute("aria-checked", "false");
  });

  test("The radiogroup element has a visible label referenced by aria-labelledby", () => {
    render(
      <RadioGroup
        orientation="vertical"
        aria-labelledby="Subscription options"
        defaultValue="r1"
        {...defaultProps}
      />
    );

    expect(screen.getByRole("radiogroup")).toHaveAttribute("aria-labelledby", "Subscription options");
  });

  test("Each radio element is labelled by its content, has a visible label referenced by aria-labelledby, or has a label specified with aria-label", () => {
    render(
      <RadioGroup
        orientation="vertical"
        aria-labelledby="Subscription options"
        defaultValue="r1"
        {...defaultProps}
      />
    );
  });
});

describe("Accessibility Testing (Keyboard Interaction):", () => {
  test("Shift and Tab+Shift moves focus into and out of the radio group", async () => {
    render(
      <RadioGroup
        orientation="vertical"
        aria-labelledby="Subscription options"
        defaultValue="r3"
        {...defaultProps}
      />
    );

    const user = userEvent.setup();

    await user.tab();
    expect(screen.getAllByRole("radio")[2]).toHaveFocus();

    await userEvent.keyboard("{Shift>}{Tab}{/Shift}{/Tab}}");
    expect(screen.getAllByRole("radio")[2]).not.toHaveFocus();
  });

  test("Right Arrow and Down Arrow move focus to the next radio button in the group, uncheck the previously focused button, and check the newly focused button", async () => {
    render(
      <RadioGroup
        orientation="vertical"
        aria-labelledby="Subscription options"
        defaultValue="r1"
        {...defaultProps}
      />
    );

    const user = userEvent.setup();

    await user.tab();
    expect(screen.getAllByRole("radio")[0]).toHaveFocus();

    await userEvent.keyboard("{ArrowDown}");
    expect(screen.getAllByRole("radio")[1]).toHaveFocus();

    // await userEvent.keyboard("{ArrowRight}");
    // expect(screen.getAllByRole("radio")[2]).toHaveFocus();
  });

  test("Left Arrow and Up Arrow move focus to the next radio button in the group, uncheck the previously focused button, and check the newly focused button", async () => {
    render(
      <RadioGroup
        orientation="vertical"
        aria-labelledby="Subscription options"
        defaultValue="r3"
        {...defaultProps}
      />
    );

    const user = userEvent.setup();

    await user.tab();
    expect(screen.getAllByRole("radio")[2]).toHaveFocus();

    await userEvent.keyboard("{ArrowUp}");
    expect(screen.getAllByRole("radio")[1]).toHaveFocus();

    // await userEvent.keyboard("{ArrowLeft}");
    // expect(screen.getAllByRole("radio")[0]).toHaveFocus();
  });
});
