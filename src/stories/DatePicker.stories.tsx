import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { Button, Calendar, DatePicker, Select } from "@/components";

const meta: Meta<typeof DatePicker> = {
  title: "UI/DatePicker",
  component: DatePicker
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

const SingleDatePickerWithButtons = () => {
  const [date, setDate] = useState<Date>();

  return (
    <DatePicker>
      <DatePicker.Trigger>
        <Button variant="outline" className="w-80 justify-start text-left font-normal">
          <CalendarIcon className="h-4 w-4" aria-hidden="true" />
          {date ? (
            <span className="text-neutral-default">{format(date, "PPP")}</span>
          ) : (
            <span className="text-neutral-muted">Select a date</span>
          )}
        </Button>
      </DatePicker.Trigger>
      <DatePicker.Content align="start">
        <Calendar mode="single" className="border-none p-0 shadow-none" selected={date} onSelect={setDate} />
      </DatePicker.Content>
    </DatePicker>
  );
};

const SingleDatePickerWithDropdowns = () => {
  const [date, setDate] = useState<Date>();

  return (
    <DatePicker>
      <DatePicker.Trigger>
        <Button variant="outline" className="w-80 justify-start text-left font-normal">
          <CalendarIcon className="h-4 w-4" />
          {date ? (
            <span className="text-neutral-default">{format(date, "PPP")}</span>
          ) : (
            <span className="text-neutral-muted">Select a date</span>
          )}
        </Button>
      </DatePicker.Trigger>
      <DatePicker.Content align="start">
        <Calendar
          mode="single"
          captionLayout="dropdown"
          fromYear={2015}
          toYear={2025}
          className="border-none p-0 shadow-none"
          selected={date}
          onSelect={setDate}
        />
      </DatePicker.Content>
    </DatePicker>
  );
};

const SingleDatePickerWithPresets = () => {
  const [date, setDate] = useState<Date>();

  return (
    <DatePicker>
      <DatePicker.Trigger>
        <Button variant="outline" className="w-80 justify-start text-left font-normal">
          <CalendarIcon className="h-4 w-4" />
          {date ? (
            <span className="text-neutral-default">{format(date, "PPP")}</span>
          ) : (
            <span className="text-neutral-muted">Select a date</span>
          )}
        </Button>
      </DatePicker.Trigger>
      <DatePicker.Content align="start" className="flex flex-col gap-4">
        <Select onValueChange={value => setDate(addDays(new Date(), parseInt(value)))}>
          <Select.Trigger aria-label="Select a preset" className="w-full shadow-none">
            <Select.Value placeholder="Select a preset" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="0">Today</Select.Item>
            <Select.Item value="1">Tomorrow</Select.Item>
            <Select.Item value="7">In a week</Select.Item>
            <Select.Item value="30">In a month</Select.Item>
            <Select.Item value="-1">Yesterday</Select.Item>
          </Select.Content>
        </Select>
        <Calendar mode="single" className="border-none p-0 shadow-none" selected={date} onSelect={setDate} />
      </DatePicker.Content>
    </DatePicker>
  );
};

const DateRangePicker = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(new Date(), 5),
    to: addDays(new Date(), 10)
  });

  return (
    <DatePicker>
      <DatePicker.Trigger>
        <Button variant="outline" className="w-80 justify-start text-left font-normal">
          <CalendarIcon className="h-4 w-4" />
          {date?.from ? (
            date.to ? (
              <span className="text-neutral-default">
                {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
              </span>
            ) : (
              <span className="text-neutral-default">{format(date.from, "LLL dd, y")}</span>
            )
          ) : (
            <span className="text-neutral-muted">Select a date range</span>
          )}
        </Button>
      </DatePicker.Trigger>
      <DatePicker.Content>
        <Calendar
          mode="range"
          showOutsideDays={false}
          className="border-none p-0 shadow-none"
          selected={date}
          onSelect={setDate}
          defaultMonth={date?.from}
          numberOfMonths={2}
        />
      </DatePicker.Content>
    </DatePicker>
  );
};

export const SingleWithButtons: Story = {
  render: () => <SingleDatePickerWithButtons />
};

export const SingleWithDropdowns: Story = {
  render: () => <SingleDatePickerWithDropdowns />
};

export const SingleWithPresets: Story = {
  render: () => <SingleDatePickerWithPresets />
};

export const Range: Story = {
  render: () => <DateRangePicker />
};
