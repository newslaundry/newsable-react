import React, { useDeferredValue, useMemo, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { matchSorter } from "match-sorter";

import { Combobox } from "@/components";

const meta: Meta<typeof Combobox> = {
  title: "UI/Combobox",
  component: Combobox
};

export default meta;

type Story = StoryObj<typeof Combobox>;

const sections = ["NL Hafta", "Newsance", "NL Charcha", "Daily Dose"];

const FilterableCombobox = () => {
  const [value, setValue] = useState("");
  const deferredValue = useDeferredValue(value);

  const matches = useMemo(() => matchSorter(sections, deferredValue), [deferredValue]);

  return (
    <Combobox
      value={value}
      onChange={setValue}
      autoFocus={true}
      className="max-w-md"
      autoComplete="list"
      placeholder="Select sections..."
    >
      {matches.length > 0 ? (
        matches.map((section, i) => {
          return (
            <Combobox.Item key={i} value={section}>
              {section}
            </Combobox.Item>
          );
        })
      ) : (
        <div>No results found.</div>
      )}
    </Combobox>
  );
};

const PrimaryCombobox = () => {
  return (
    <Combobox autoFocus={true} className="max-w-md" autoComplete="list">
      {sections.map((section, i) => {
        return (
          <Combobox.Item key={i} value={section}>
            {section}
          </Combobox.Item>
        );
      })}
    </Combobox>
  );
};

export const Primary: Story = {
  render: () => <PrimaryCombobox />
};

export const Filterable: Story = {
  render: () => <FilterableCombobox />
};
