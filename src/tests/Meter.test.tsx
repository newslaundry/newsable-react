import React from "react";

import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { Meter } from "@/components";
import { checkAccessibility } from "@/utils/accessibility";

describe("Link components tests:", () => {
  checkAccessibility(
    <Meter
      value={60}
      valueText={`40% (1 lac INR) amount left to fund`}
      aria-label="Subscriptions funded so far"
    >
      <Meter.Indicator style={{ transform: `translateX(-${100 - 60}%)` }} />
    </Meter>
  );
});

describe("Accessibility Testing (WAI-ARIA Roles, States, and Properties):", () => {
  test("should have role of meter", () => {
    render(
      <Meter
        value={60}
        valueText={`40% (1 lac INR) amount left to fund`}
        aria-label="Subscriptions funded so far"
      >
        <Meter.Indicator style={{ transform: `translateX(-${100 - 60}%)` }} />
      </Meter>
    );

    const meterElement = screen.getByRole("meter");
    expect(meterElement).toBeInTheDocument();
  });

  test("should have aria-valuenow set to a decimal value between aria-valuemin and aria-valuemax", () => {
    render(
      <Meter
        value={60}
        valueText={`40% (1 lac INR) amount left to fund`}
        aria-label="Subscriptions funded so far"
      >
        <Meter.Indicator style={{ transform: `translateX(-${100 - 60}%)` }} />
      </Meter>
    );

    const meterElement = screen.getByRole("meter");
    expect(meterElement).toHaveAttribute("aria-valuenow", `${60}`);

    expect(parseFloat(meterElement.getAttribute("aria-valuenow") || "0")).toBeGreaterThanOrEqual(0);
    expect(parseFloat(meterElement.getAttribute("aria-valuenow") || "0")).toBeLessThanOrEqual(100);
  });

  test("should have aria-valuemin set to a decimal value less than aria-valuemax", () => {
    render(
      <Meter
        value={60}
        valueText={`40% (1 lac INR) amount left to fund`}
        aria-label="Subscriptions funded so far"
      >
        <Meter.Indicator style={{ transform: `translateX(-${100 - 60}%)` }} />
      </Meter>
    );

    const meterElement = screen.getByRole("meter");
    expect(meterElement).toHaveAttribute("aria-valuemin", `${0}`);
    expect(parseFloat(meterElement.getAttribute("aria-valuemin") || "0")).toBeLessThan(100);
  });

  test("should have aria-valuemax set to a decimal value greater than aria-valuemin", () => {
    render(
      <Meter
        value={60}
        valueText={`40% (1 lac INR) amount left to fund`}
        aria-label="Subscriptions funded so far"
      >
        <Meter.Indicator style={{ transform: `translateX(-${100 - 60}%)` }} />
      </Meter>
    );

    const meterElement = screen.getByRole("meter");
    expect(meterElement).toHaveAttribute("aria-valuemax", `${100}`);
    expect(parseFloat(meterElement.getAttribute("aria-valuemax") || "0")).toBeGreaterThan(0);
  });

  test("should have aria-valuetext property set if the meter value requires a custom representation", () => {
    render(
      <Meter
        value={60}
        valueText={`40% (1 lac INR) amount left to fund`}
        aria-label="Subscriptions funded so far"
      >
        <Meter.Indicator style={{ transform: `translateX(-${100 - 60}%)` }} />
      </Meter>
    );

    const meterElement = screen.getByRole("meter");
    expect(meterElement).toHaveAttribute("aria-valuetext", `40% (1 lac INR) amount left to fund`);
  });

  test("should have aria-label set if the meter does not have a visible label", () => {
    const meterLabel = "Subscriptions funded so far";

    render(<Meter value={50} valueText={`40% (1 lac INR) amount left to fund`} aria-label={meterLabel} />);

    const meterElement = screen.getByRole("meter");
    expect(meterElement).toHaveAttribute("aria-label", meterLabel);
  });
});
