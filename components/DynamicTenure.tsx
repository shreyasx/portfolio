"use client";

import { useSyncExternalStore } from "react";

interface DynamicTenureProps {
  startDate: string;
  className?: string;
}

function calculateTenure(startDate: string): string {
  const start = new Date(startDate);
  const now = new Date();

  const monthDiff =
    now.getMonth() -
    start.getMonth() +
    (now.getFullYear() - start.getFullYear()) * 12;

  if (monthDiff < 1) {
    return "Less than a month";
  } else if (monthDiff === 1) {
    return "1 month";
  } else if (monthDiff < 12) {
    return `${monthDiff} months`;
  } else {
    const years = Math.floor(monthDiff / 12);
    const remainingMonths = monthDiff % 12;

    if (remainingMonths === 0) {
      return years === 1 ? "1 year" : `${years} years`;
    } else {
      const yearText = years === 1 ? "1 year" : `${years} years`;
      const monthText =
        remainingMonths === 1 ? "1 month" : `${remainingMonths} months`;
      return `${yearText}, ${monthText}`;
    }
  }
}

// Re-evaluate once a day so the tenure stays accurate in long-lived tabs.
function subscribe(onStoreChange: () => void) {
  const intervalId = setInterval(onStoreChange, 86400000); // 24 hours
  return () => clearInterval(intervalId);
}

export default function DynamicTenure({
  startDate,
  className = "text-sm leading-normal",
}: DynamicTenureProps) {
  // Tenure is time-relative, so it differs between the server (build time) and
  // the client. Render empty on the server to avoid a hydration mismatch;
  // useSyncExternalStore fills in the client value immediately after hydration.
  const tenure = useSyncExternalStore(
    subscribe,
    () => calculateTenure(startDate),
    () => ""
  );

  return <span className={className}>{tenure}</span>;
}
