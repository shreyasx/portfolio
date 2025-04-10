"use client";

import { useEffect, useState } from "react";

interface DynamicTenureProps {
  startDate: string;
  className?: string;
}

export default function DynamicTenure({
  startDate,
  className = "text-sm leading-normal",
}: DynamicTenureProps) {
  const [tenure, setTenure] = useState<string>("");

  useEffect(() => {
    const calculateTenure = () => {
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
    };

    setTenure(calculateTenure());

    // Update every day to keep it accurate
    const intervalId = setInterval(() => {
      setTenure(calculateTenure());
    }, 86400000); // 24 hours

    return () => clearInterval(intervalId);
  }, [startDate]);

  return <span className={className}>{tenure}</span>;
}
