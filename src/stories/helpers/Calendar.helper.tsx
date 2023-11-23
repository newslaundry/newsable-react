import React, { useState } from "react";

import { format } from "date-fns";

import { Calendar, Text } from "@/components";

const CalendarDemo = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div className="">
      <Text className="mb-4 text-center text-sm">Selected date: {format(date || new Date(), "PPP")}</Text>
      <Calendar mode="single" selected={date} onSelect={setDate} />
    </div>
  );
};

export { CalendarDemo };
