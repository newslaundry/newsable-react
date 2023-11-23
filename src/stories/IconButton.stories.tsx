import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { PersonStanding as AccessibilityPerson, ChevronDown } from "lucide-react";

import { IconButton } from "@/components";

const meta: Meta<typeof IconButton> = {
  title: "UI/IconButton",
  component: IconButton
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const MoreOptions: Story = {
  render: () => (
    <IconButton label="More options">
      <ChevronDown className="h-4 w-4" aria-hidden="true" />
    </IconButton>
  )
};

export const AccessibilitySettings: Story = {
  render: () => (
    <IconButton label="Accessibility settings">
      <AccessibilityPerson className="h-4 w-4" aria-hidden="true" />
    </IconButton>
  )
};
