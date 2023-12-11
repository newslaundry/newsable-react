// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import React from "react";

import { render, screen } from "@testing-library/react";
import { beforeAll, describe, test, vi } from "vitest";

import { checkAccessibility } from "@/utils/accessibility";

import { CarouselDemo, CarouselWithAutoplay } from "../stories/helpers/Carousel.helper";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // Deprecated
      removeListener: vi.fn(), // Deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn()
    }))
  });

  Object.defineProperty(global, "IntersectionObserver", {
    writable: true,
    value: vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn()
    }))
  });
});

describe("Carousel component tests", () => {
  checkAccessibility(<CarouselDemo />);
  checkAccessibility(<CarouselWithAutoplay />);
});

describe("Accessibility Testing (WAI-ARIA Roles, States, and Properties):", () => {
  test("A carousel container element has role region", async () => {
    render(<CarouselWithAutoplay />);

    const regionElement = screen.getByRole("region");

    expect(regionElement).toBeInTheDocument();
  });

  // describe("Keyboard Interaction Tests", () => {
  //   test("auto-rotate should stop when an element receives keyboard focus", () => {
  //     render(<CarouselWithAutoplay />);
  //     userEvent.tab();
  //     expect(autoRotateStopped()).toBe(true);
  //   });

  //   test("rotation control should be the first element in Tab sequence", async () => {
  //     render(<CarouselWithAutoplay />);
  //     await userEvent.tab();
  //     expect(screen.getByLabelText("Previous slide button")).toHaveFocus();
  //   });

  //   test("Tab and Shift + Tab move focus through interactive elements.", async () => {
  //     render(<CarouselWithAutoplay />);

  //     userEvent.tab();
  //     userEvent.tab({ shift: true });

  //     // Assert
  //     //expect().toBeTruthy();
  //   });

  //   test("Button elements implement the keyboard interaction defined in the button pattern.", async () => {
  //     render(<CarouselWithAutoplay />);

  //     userEvent.click(screen.getByLabelText("Next slide button"));

  //     // Assert
  //     //expect().toBeTruthy();
  //   });

  //   test("Slide picker controls implement the keyboard interaction defined in the Tabs Pattern.", async () => {
  //     render(<CarouselWithAutoplay />);

  //     userEvent.click(screen.getByLabelText("Carousel dot indicator button"));

  //     // Assert
  //     //expect(/*Check if slide picker controls work as expected */).toBeTruthy();
  //   });

  //   function autoRotateStopped() {
  //     // Implement this function too see aagr rotation stop hua
  //   }
});

// describe("WAI-ARIA Roles, States, and Properties Tests", () => {
//   test("carousel container should have appropriate roles either of group or region", () => {
//     render(<CarouselWithAutoplay />);
//     const carousel = screen.getByRole("region");
//     expect(carousel).toBeInTheDocument();
//   });

//   test("carousel container should have aria-roledescription set to carousel", () => {
//     render(<CarouselWithAutoplay />);
//     const carousel = screen.getByRole("region");
//     expect(carousel).toHaveAttribute("aria-roledescription", "carousel");
//   });

//   test("carousel container should have accessible label if present", () => {
//     render(<CarouselWithAutoplay />);
//     const carousel = screen.getByRole("region");
//     expect(carousel).toHaveAttribute("Newslaundry subscriber meetups");
//   });

//   // Add tests for rotation control, next slide control, and previous slide control follwing etst for button patetrns
//   test("rotation control label should change when activated", async () => {
//     render(<CarouselWithAutoplay />);
//     const rotationControl = screen.getByLabelText(/Start slide rotation/i);

//     // initial label
//     expect(rotationControl).toHaveTextContent("Start slide rotation");

//     // click the control
//     userEvent.click(rotationControl);

//     // Check if label changes
//     expect(rotationControl).toHaveTextContent("Stop slide rotation");
//   });

//   test("each slide container should have role group and accessible name", () => {
//     render(<CarouselWithAutoplay />);
//     const slides = screen.getAllByRole("group");
//     slides.forEach(slide => {
//       expect(slide).toBeInTheDocument();
//       expect(slide).toHaveAttribute("aria-label");
//     });
//   });

//   test("element wrapping slide elements should have aria-atomic and aria-live", () => {
//     render(<CarouselWithAutoplay />);
//     const wrapper = screen.getByRole("region");
//     expect(wrapper).toHaveAttribute("aria-atomic", "false");
//     expect(wrapper).toHaveAttribute("aria-live", "polite"); // if not on auto-rotation
//   });

//   test("each slide container should have role tabpanel and no aria-roledescription", () => {
//     render(<CarouselWithAutoplay />);
//     const slides = screen.getAllByRole("tabpanel");
//     slides.forEach(slide => {
//       expect(slide).toBeInTheDocument();
//       expect(slide).not.toHaveAttribute("aria-roledescription");
//     });
//   });

//   test("slide picker controls should be implemented using tabs pattern", () => {
//     render(<CarouselWithAutoplay />);
//     const tablist = screen.getByRole("tablist");
//     screen.getByRole("");
//     expect(tablist).toBeInTheDocument();
//     // Add assertions for tab elements inside tablist
//     // Add assertions for tabpanel and tab role, aria-labelledby, etc.
//   });
// });
