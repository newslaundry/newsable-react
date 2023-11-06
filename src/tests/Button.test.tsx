import React from "react";

import { describe } from "vitest";

import { Button } from "@/components";
import { checkAccessibility } from "@/utils/accessibility";

describe("Button component tests", () => {
  checkAccessibility(<Button>Button</Button>);
});
