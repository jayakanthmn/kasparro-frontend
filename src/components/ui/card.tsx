import React from "react";

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border bg-white dark:bg-neutral-900 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}
