"use client";

import { Calendar } from "@workspace/ui/components/calendar";
import { useState, useEffect } from "react";

export function JournalCalendar() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Calendar
      mode="single"
      className="rounded-md w-full bg-workbench-background"
      captionLayout="dropdown"
    />
  );
}
