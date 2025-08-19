"use client";

import { useEffect, useState } from "react";

export default function useSessionStorage(
  key: string,
  defaultValue: string = "default"
): [string, (value: string | ((prev: string) => string)) => void] {
  const [value, setValue] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const stored = window.sessionStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    }
    return defaultValue;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
