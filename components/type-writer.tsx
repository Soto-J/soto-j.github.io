"use client";

import { useEffect, useState } from "react";

interface TypeWriterProps {
  title: string;
  className?: string;
  speed?: number;
}

export const TypeWriter = ({
  title,
  className,
  speed = 100,
}: TypeWriterProps) => {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (idx >= title.length) {
        return clearInterval(interval);
      }

      setDisplay((prev) => prev + title[idx]);
      setIdx((prev) => prev + 1);
    }, speed);

    return () => clearInterval(interval);
  }, [title, idx]);

  return <p className={className}>{display}</p>;
};
