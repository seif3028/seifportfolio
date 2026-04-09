"use client";

import { TimelineEntry } from "./timelineData";
import TimelineItem from "./TimelineItem";

interface TimelineProps {
  entries: TimelineEntry[];
}

export default function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line (desktop) */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-green/40 via-neon-green/20 to-transparent" />

      {/* Vertical line (mobile) */}
      <div className="md:hidden absolute left-[5px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-green/40 via-neon-green/20 to-transparent" />

      <div className="flex flex-col gap-8 md:gap-12 pl-6 md:pl-0">
        {entries.map((entry, i) => (
          <TimelineItem
            key={entry.id}
            entry={entry}
            index={i}
            side={i % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
}
